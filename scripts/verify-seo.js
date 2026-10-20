import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

console.log('--- Running Mantle-Gold SEO Verification & CI Guard ---');

let errorsCount = 0;
let warningsCount = 0;

function reportPass(msg) {
    console.log(`  ✓ PASS: ${msg}`);
}

function reportFail(msg) {
    console.error(`  ✗ FAIL: ${msg}`);
    errorsCount++;
}

function reportWarn(msg) {
    console.warn(`  ⚠ WARN: ${msg}`);
    warningsCount++;
}

// 1. Verify robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
    if (robotsContent.includes('Sitemap: https://mantle-gold.com/sitemap.xml')) {
        reportPass('robots.txt exists and contains canonical Sitemap directive');
    } else {
        reportFail('robots.txt missing Sitemap: https://mantle-gold.com/sitemap.xml');
    }
} else {
    reportFail('robots.txt does not exist in dist/');
}

// 2. Verify sitemap.xml
const sitemapPath = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    if (sitemapContent.includes('https://mantle-gold.com/') && sitemapContent.includes('/services/epci')) {
        reportPass('sitemap.xml exists and contains valid canonical URLs');
    } else {
        reportFail('sitemap.xml missing core canonical URLs');
    }

    if (sitemapContent.includes('/thank-you') || sitemapContent.includes('/404')) {
        reportFail('sitemap.xml contains noindex URLs (/thank-you or /404)');
    } else {
        reportPass('sitemap.xml is clean of noindex/404 URLs');
    }
} else {
    reportFail('sitemap.xml does not exist in dist/');
}

// 3. Inspect All Prerendered HTML Pages
const routesToAudit = [
    { file: 'index.html', route: '/', noindexExpected: false },
    { file: 'about/index.html', route: '/about', noindexExpected: false },
    { file: 'services/index.html', route: '/services', noindexExpected: false },
    { file: 'services/epci/index.html', route: '/services/epci', noindexExpected: false },
    { file: 'services/subsea-engineering/index.html', route: '/services/subsea-engineering', noindexExpected: false },
    { file: 'services/pipeline-engineering/index.html', route: '/services/pipeline-engineering', noindexExpected: false },
    { file: 'services/asset-integrity/index.html', route: '/services/asset-integrity', noindexExpected: false },
    { file: 'services/fabrication/index.html', route: '/services/fabrication', noindexExpected: false },
    { file: 'services/procurement/index.html', route: '/services/procurement', noindexExpected: false },
    { file: 'contact/index.html', route: '/contact', noindexExpected: false },
    { file: 'blog/index.html', route: '/blog', noindexExpected: false },
    { file: 'privacy/index.html', route: '/privacy', noindexExpected: false },
    { file: 'terms/index.html', route: '/terms', noindexExpected: false },
    { file: 'thank-you/index.html', route: '/thank-you', noindexExpected: true },
    { file: '404.html', route: '/404', noindexExpected: true }
];

console.log(`\nAuditing ${routesToAudit.length} HTML files in dist/...`);

for (const item of routesToAudit) {
    const filePath = path.join(distDir, item.file);
    if (!fs.existsSync(filePath)) {
        reportFail(`Missing prerendered file for route ${item.route} at ${item.file}`);
        continue;
    }

    const html = fs.readFileSync(filePath, 'utf-8');

    // Title Check
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    if (!titleMatch) {
        reportFail(`${item.route}: Missing <title> tag`);
    } else {
        const titleText = titleMatch[1].trim();
        if (titleText.length > 60) {
            reportFail(`${item.route}: Title exceeds 60 chars (${titleText.length} chars): "${titleText}"`);
        } else {
            reportPass(`${item.route}: Title length is ${titleText.length}/60 chars`);
        }
    }

    // Meta Description Check
    const descMatches = [...html.matchAll(/<meta\s+name="description"\s+content="([^"]*)"/gi)];
    if (descMatches.length === 0) {
        reportFail(`${item.route}: Missing meta description`);
    } else if (descMatches.length > 1) {
        reportFail(`${item.route}: Duplicate meta description tags found (${descMatches.length})`);
    } else {
        const descText = descMatches[0][1].trim();
        if (descText.length > 160) {
            reportFail(`${item.route}: Meta description exceeds 160 chars (${descText.length} chars)`);
        } else {
            reportPass(`${item.route}: Meta description length is ${descText.length}/160 chars`);
        }
    }

    // Meta Keywords Check (Must be 0)
    if (html.includes('name="keywords"')) {
        reportFail(`${item.route}: Meta keywords tag is present (Must be removed)`);
    } else {
        reportPass(`${item.route}: Zero meta keywords tags`);
    }

    // Canonical Tag Check
    const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
    if (!canonicalMatch) {
        reportFail(`${item.route}: Missing canonical link tag`);
    } else {
        const canonicalUrl = canonicalMatch[1];
        if (!canonicalUrl.startsWith('https://mantle-gold.com')) {
            reportFail(`${item.route}: Canonical URL is not non-www HTTPS mantle-gold.com: ${canonicalUrl}`);
        } else {
            reportPass(`${item.route}: Canonical is self-referencing to ${canonicalUrl}`);
        }
    }

    // Production Noindex CI Check
    const robotsMatch = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i);
    const robotsDirective = robotsMatch ? robotsMatch[1] : '';

    if (!item.noindexExpected && robotsDirective.includes('noindex')) {
        reportFail(`${item.route}: CRITICAL - Production route ships "noindex"! Build halted.`);
    } else if (item.noindexExpected && !robotsDirective.includes('noindex')) {
        reportFail(`${item.route}: Expected "noindex" directive on non-indexable page, but found: ${robotsDirective}`);
    } else {
        reportPass(`${item.route}: Robots directive is correct (${item.noindexExpected ? 'noindex' : 'index, follow'})`);
    }

    // JSON-LD Schema Validation
    const jsonLdMatches = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
    if (jsonLdMatches.length > 0) {
        for (const match of jsonLdMatches) {
            try {
                const parsed = JSON.parse(match[1]);
                reportPass(`${item.route}: JSON-LD schema is valid (${parsed['@type'] || (parsed['@graph'] ? '@graph' : 'Schema Object')})`);
            } catch (err) {
                reportFail(`${item.route}: Invalid JSON-LD schema syntax: ${err.message}`);
            }
        }
    }
}

console.log('\n--- SEO Audit Results ---');
console.log(`Errors: ${errorsCount}`);
console.log(`Warnings: ${warningsCount}`);

if (errorsCount > 0) {
    console.error(`\nSEO Build Verification FAILED with ${errorsCount} error(s). Halting build.`);
    process.exit(1);
} else {
    console.log('\nAll SEO Verification Checks PASSED! Production site is 100% compliant.');
    process.exit(0);
}

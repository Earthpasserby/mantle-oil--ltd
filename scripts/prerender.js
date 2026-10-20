import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
    console.error('Error: dist directory does not exist. Run "vite build" first.');
    process.exit(1);
}

const baseHtmlPath = path.join(distDir, 'index.html');
const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

const pages = [
    {
        route: '/',
        title: "Mantle-Gold | EPCI & Oil and Gas Services in Nigeria",
        description: "Mantle-Gold is a Lagos-based EPCI contractor: subsea engineering, pipeline installation and asset integrity for Nigeria's oil and gas sector.",
        h1: "Mantle-Gold: EPCI and Engineering Solutions for Nigeria's Oil and Gas Industry",
        canonical: "https://mantle-gold.com/",
        type: "website",
        noindex: false,
        schema: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Organization",
                    "@id": "https://mantle-gold.com/#organization",
                    "name": "Mantle-Gold",
                    "alternateName": [
                        "Mantle Gold",
                        "Mantle-Gold",
                        "Mantle Gold"
                    ],
                    "url": "https://mantle-gold.com",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://mantle-gold.com/logo.png",
                        "caption": "Mantle-Gold logo"
                    },
                    "description": "Indigenous Nigerian EPCI contractor delivering turnkey subsea engineering, pipeline construction, asset integrity management, structural fabrication and specialized procurement.",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "31 Discovery Gardens Estate",
                        "addressLocality": "Lekki",
                        "addressRegion": "Lagos",
                        "postalCode": "105102",
                        "addressCountry": "NG"
                    },
                    "contactPoint": [
                        {
                            "@type": "ContactPoint",
                            "telephone": "+2348032368599",
                            "contactType": "customer service",
                            "areaServed": "NG",
                            "availableLanguage": ["en"]
                        },
                        {
                            "@type": "ContactPoint",
                            "telephone": "+2349121557656",
                            "contactType": "technical support",
                            "areaServed": "NG",
                            "availableLanguage": ["en"]
                        }
                    ],
                    "email": "info@mantle-gold.com",
                    "areaServed": {
                        "@type": "Country",
                        "name": "Nigeria"
                    },
                    "sameAs": [
                        "https://www.linkedin.com/company/mantle-gold-ltd",
                        "https://x.com/mantlegold",
                        "https://www.instagram.com/mantle.gold/"
                    ]
                },
                {
                    "@type": "WebSite",
                    "@id": "https://mantle-gold.com/#website",
                    "url": "https://mantle-gold.com",
                    "name": "Mantle-Gold",
                    "publisher": {
                        "@id": "https://mantle-gold.com/#organization"
                    }
                }
            ]
        }
    },
    {
        route: '/about',
        title: "About Mantle-Gold | Oil & Gas Engineering, Lagos",
        description: "Established in 2014, Mantle-Gold delivers EPCI and engineering services to Nigeria's oil and gas industry. Meet the team behind our projects.",
        h1: "About Mantle-Gold",
        canonical: "https://mantle-gold.com/about",
        type: "website",
        noindex: false,
        schema: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mantle-gold.com/" },
                { "@type": "ListItem", "position": 2, "name": "About Mantle-Gold", "item": "https://mantle-gold.com/about" }
            ]
        }
    },
    {
        route: '/services',
        title: "Oil & Gas Services in Nigeria | Mantle-Gold",
        description: "EPCI project execution, subsea and pipeline engineering, asset integrity, fabrication and procurement for Nigeria's oil and gas sector.",
        h1: "Oil and Gas Engineering and EPCI Services in Nigeria",
        canonical: "https://mantle-gold.com/services",
        type: "website",
        noindex: false,
        schema: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mantle-gold.com/" },
                { "@type": "ListItem", "position": 2, "name": "Oil & Gas Services in Nigeria", "item": "https://mantle-gold.com/services" }
            ]
        }
    },
    {
        route: '/services/epci',
        title: "EPCI Contractor in Nigeria | Mantle-Gold",
        description: "End-to-end EPCI project execution for oil and gas assets in Nigeria, from engineering and procurement to installation. Request a quote.",
        h1: "EPCI Project Execution for Oil and Gas in Nigeria",
        canonical: "https://mantle-gold.com/services/epci",
        type: "website",
        noindex: false,
        schema: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Service",
                    "name": "EPCI Project Execution",
                    "serviceType": "Engineering, Procurement, Construction and Installation",
                    "provider": { "@type": "Organization", "name": "Mantle-Gold", "url": "https://mantle-gold.com" },
                    "areaServed": { "@type": "Country", "name": "Nigeria" },
                    "description": "Turnkey EPCI project execution for oil and gas infrastructure in Nigeria."
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mantle-gold.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mantle-gold.com/services" },
                        { "@type": "ListItem", "position": 3, "name": "EPCI Project Execution", "item": "https://mantle-gold.com/services/epci" }
                    ]
                }
            ]
        }
    },
    {
        route: '/services/subsea-engineering',
        title: "Subsea Engineering Services in Nigeria | Mantle-Gold",
        description: "Subsea engineering, umbilical and flowline installation support for Nigerian offshore fields. Talk to our technical team.",
        h1: "Subsea Engineering Services in Nigeria",
        canonical: "https://mantle-gold.com/services/subsea-engineering",
        type: "website",
        noindex: false,
        schema: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Service",
                    "name": "Subsea Engineering Services",
                    "serviceType": "Subsea SURF Engineering & Installation",
                    "provider": { "@type": "Organization", "name": "Mantle-Gold", "url": "https://mantle-gold.com" },
                    "areaServed": { "@type": "Country", "name": "Nigeria" },
                    "description": "Deepwater subsea engineering, SURF design, flowlines, and umbilical installation offshore Nigeria."
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mantle-gold.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mantle-gold.com/services" },
                        { "@type": "ListItem", "position": 3, "name": "Subsea Engineering Services", "item": "https://mantle-gold.com/services/subsea-engineering" }
                    ]
                }
            ]
        }
    },
    {
        route: '/services/pipeline-engineering',
        title: "Pipeline Engineering in Nigeria | Mantle-Gold",
        description: "Pipeline and flowline engineering, installation and construction support for onshore and offshore projects in Nigeria. Request a proposal.",
        h1: "Pipeline Engineering and Installation in Nigeria",
        canonical: "https://mantle-gold.com/services/pipeline-engineering",
        type: "website",
        noindex: false,
        schema: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Service",
                    "name": "Pipeline Engineering and Installation",
                    "serviceType": "Pipeline and Flowline Construction",
                    "provider": { "@type": "Organization", "name": "Mantle-Gold", "url": "https://mantle-gold.com" },
                    "areaServed": { "@type": "Country", "name": "Nigeria" },
                    "description": "Onshore, swamp, and offshore pipeline design, trenching, installation, and hydrostatic testing in Nigeria."
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mantle-gold.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mantle-gold.com/services" },
                        { "@type": "ListItem", "position": 3, "name": "Pipeline Engineering", "item": "https://mantle-gold.com/services/pipeline-engineering" }
                    ]
                }
            ]
        }
    },
    {
        route: '/services/asset-integrity',
        title: "Asset Integrity Management in Nigeria | Mantle-Gold",
        description: "Asset support and integrity services that keep Nigerian oil and gas facilities safe, compliant and operating. Speak to Mantle-Gold.",
        h1: "Asset Integrity and Support Services in Nigeria",
        canonical: "https://mantle-gold.com/services/asset-integrity",
        type: "website",
        noindex: false,
        schema: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Service",
                    "name": "Asset Integrity Management",
                    "serviceType": "Asset Support & Integrity Management",
                    "provider": { "@type": "Organization", "name": "Mantle-Gold", "url": "https://mantle-gold.com" },
                    "areaServed": { "@type": "Country", "name": "Nigeria" },
                    "description": "Comprehensive maintenance, risk-based inspection (RBI), corrosion control, and structural integrity management for Nigerian assets."
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mantle-gold.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mantle-gold.com/services" },
                        { "@type": "ListItem", "position": 3, "name": "Asset Integrity Management", "item": "https://mantle-gold.com/services/asset-integrity" }
                    ]
                }
            ]
        }
    },
    {
        route: '/services/fabrication',
        title: "Oil & Gas Fabrication in Lagos | Mantle-Gold",
        description: "Structural and offshore fabrication for oil and gas projects, delivered from Lagos with strict quality and safety control. Request a quote.",
        h1: "Oil and Gas Fabrication in Lagos, Nigeria",
        canonical: "https://mantle-gold.com/services/fabrication",
        type: "website",
        noindex: false,
        schema: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Service",
                    "name": "Oil & Gas Structural Fabrication",
                    "serviceType": "Heavy Structural Steel Fabrication & Spool Piping",
                    "provider": { "@type": "Organization", "name": "Mantle-Gold", "url": "https://mantle-gold.com" },
                    "areaServed": { "@type": "Country", "name": "Nigeria" },
                    "description": "Certified structural fabrication, pressure piping, subsea manifolds, and modular skid assemblies manufactured in Lagos, Nigeria."
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mantle-gold.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mantle-gold.com/services" },
                        { "@type": "ListItem", "position": 3, "name": "Fabrication", "item": "https://mantle-gold.com/services/fabrication" }
                    ]
                }
            ]
        }
    },
    {
        route: '/services/procurement',
        title: "Oil & Gas Procurement Services Nigeria | Mantle-Gold",
        description: "API-certified line pipes, subsea valves and energy procurement for Nigeria's oil and gas sector. Direct site delivery from Lagos.",
        h1: "Procurement Services for Nigeria's Oil and Gas Industry",
        canonical: "https://mantle-gold.com/services/procurement",
        type: "website",
        noindex: false,
        schema: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Service",
                    "name": "Procurement and Supply Chain Services",
                    "serviceType": "Energy Sector Procurement & Logistics",
                    "provider": { "@type": "Organization", "name": "Mantle-Gold", "url": "https://mantle-gold.com" },
                    "areaServed": { "@type": "Country", "name": "Nigeria" },
                    "description": "Global sourcing, expediting, and logistics for API-certified oilfield equipment, line pipes, valves, and electrical materials in Nigeria."
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mantle-gold.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mantle-gold.com/services" },
                        { "@type": "ListItem", "position": 3, "name": "Procurement", "item": "https://mantle-gold.com/services/procurement" }
                    ]
                }
            ]
        }
    },
    {
        route: '/contact',
        title: "Contact Mantle-Gold | Lekki, Lagos",
        description: "Contact Mantle-Gold at 31 Discovery Gardens Estate, Lekki, Lagos. Call +234 803 236 8599 or email info@mantle-gold.com.",
        h1: "Contact Mantle-Gold",
        canonical: "https://mantle-gold.com/contact",
        type: "website",
        noindex: false,
        schema: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://mantle-gold.com/contact#localbusiness",
            "name": "Mantle-Gold",
            "alternateName": ["Mantle Gold", "Mantle-Gold", "Mantle Gold"],
            "url": "https://mantle-gold.com/contact",
            "telephone": ["+2348032368599", "+2349121557656"],
            "email": "info@mantle-gold.com",
            "priceRange": "$$$$",
            "image": "https://mantle-gold.com/images/og-mantle-gold.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "31 Discovery Gardens Estate",
                "addressLocality": "Lekki",
                "addressRegion": "Lagos",
                "postalCode": "105102",
                "addressCountry": "NG"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.4698,
                "longitude": 3.5852
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "17:00"
                }
            ]
        }
    },
    {
        route: '/blog',
        title: "Oil & Gas Engineering Insights | Mantle-Gold",
        description: "Technical insights, subsea project case studies and pipeline engineering articles from Mantle-Gold in Lagos, Nigeria.",
        h1: "Oil & Gas Engineering Insights & Articles",
        canonical: "https://mantle-gold.com/blog",
        type: "website",
        noindex: false,
        schema: {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://mantle-gold.com/blog#blog",
            "name": "Mantle-Gold Engineering Insights & Blog",
            "description": "Technical insights, field case studies, and engineering analysis from Mantle-Gold's oil and gas experts in Lagos, Nigeria.",
            "url": "https://mantle-gold.com/blog"
        }
    },
    {
        route: '/privacy',
        title: "Privacy Policy | Mantle-Gold",
        description: "Privacy policy for Mantle-Gold. How we handle personal data, project inquiries, and cookies in accordance with Nigerian NDPR.",
        h1: "Privacy Policy",
        canonical: "https://mantle-gold.com/privacy",
        type: "website",
        noindex: false
    },
    {
        route: '/terms',
        title: "Terms of Service | Mantle-Gold",
        description: "Terms and conditions governing the use of Mantle-Gold's website and engineering inquiry services in Nigeria.",
        h1: "Terms of Service",
        canonical: "https://mantle-gold.com/terms",
        type: "website",
        noindex: false
    },
    {
        route: '/thank-you',
        title: "Thank You | Mantle-Gold",
        description: "Thank you for contacting Mantle-Gold. Our engineering team will review your inquiry within 24 business hours.",
        h1: "Thank You for Contacting Mantle-Gold",
        canonical: "https://mantle-gold.com/thank-you",
        type: "website",
        noindex: true
    },
    {
        route: '/404',
        title: "Page Not Found (404) | Mantle-Gold",
        description: "The requested page could not be found. Explore Mantle-Gold's EPCI and oil and gas engineering services in Nigeria.",
        h1: "404 - Page Not Found",
        canonical: "https://mantle-gold.com/404",
        type: "website",
        noindex: true
    }
];

function renderPageHtml(template, page) {
    let html = template;

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);

    // Replace Meta Description
    html = html.replace(/<meta\s+name="description"\s+content="[^"]*"/i, `<meta name="description" content="${page.description}"`);

    // Replace Canonical
    html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"/i, `<link rel="canonical" href="${page.canonical}"`);

    // Replace OG Tags
    html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"/i, `<meta property="og:title" content="${page.title}"`);
    html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"/i, `<meta property="og:description" content="${page.description}"`);
    html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"/i, `<meta property="og:url" content="${page.canonical}"`);
    html = html.replace(/<meta\s+property="og:type"\s+content="[^"]*"/i, `<meta property="og:type" content="${page.type || 'website'}"`);

    // Replace Twitter Tags
    html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"/i, `<meta name="twitter:title" content="${page.title}"`);
    html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"/i, `<meta name="twitter:description" content="${page.description}"`);

    // Robots meta handling
    if (page.noindex) {
        if (html.includes('<meta name="robots"')) {
            html = html.replace(/<meta\s+name="robots"\s+content="[^"]*"/i, '<meta name="robots" content="noindex, nofollow"');
        } else {
            html = html.replace('</head>', '    <meta name="robots" content="noindex, nofollow">\n  </head>');
        }
    } else {
        if (html.includes('<meta name="robots"')) {
            html = html.replace(/<meta\s+name="robots"\s+content="[^"]*"/i, '<meta name="robots" content="index, follow"');
        } else {
            html = html.replace('</head>', '    <meta name="robots" content="index, follow">\n  </head>');
        }
    }

    // Replace OG Image Alt
    const pageImageAlt = `${page.title} - Mantle-Gold`;
    if (html.includes('<meta property="og:image:alt"')) {
        html = html.replace(/<meta\s+property="og:image:alt"\s+content="[^"]*"/i, `<meta property="og:image:alt" content="${pageImageAlt}"`);
    }

    // Schema JSON-LD injection
    if (page.schema) {
        const schemaString = JSON.stringify(page.schema);
        // Replace existing Organization script or inject before </head>
        if (html.includes('<script type="application/ld+json">')) {
            html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${schemaString}</script>`);
        } else {
            html = html.replace('</head>', `    <script type="application/ld+json">${schemaString}</script>\n  </head>`);
        }
    }

    // Pre-render semantic content inside #root for crawlers/cURL before React hydration
    if (page.h1) {
        const fallbackContent = `<div id="root"><main class="seo-crawler-content"><h1>${page.h1}</h1><p>${page.description}</p></main></div>`;
        html = html.replace('<div id="root"></div>', fallbackContent);
    }

    return html;
}

console.log('--- Starting Mantle-Gold SEO Prerendering ---');

for (const page of pages) {
    const renderedHtml = renderPageHtml(baseHtml, page);

    if (page.route === '/') {
        fs.writeFileSync(path.join(distDir, 'index.html'), renderedHtml, 'utf-8');
        console.log(`✓ Pre-rendered / -> dist/index.html`);
    } else if (page.route === '/404') {
        fs.writeFileSync(path.join(distDir, '404.html'), renderedHtml, 'utf-8');
        const targetDir = path.join(distDir, '404');
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, 'index.html'), renderedHtml, 'utf-8');
        console.log(`✓ Pre-rendered /404 -> dist/404.html & dist/404/index.html`);
    } else {
        const routeClean = page.route.replace(/^\//, '');
        const targetDir = path.join(distDir, routeClean);
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, 'index.html'), renderedHtml, 'utf-8');
        console.log(`✓ Pre-rendered ${page.route} -> dist/${routeClean}/index.html`);
    }
}

console.log('--- Finished Prerendering All 15 Pages ---');

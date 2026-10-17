import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://mantle-gold.com';
const DEFAULT_IMAGE = `${DOMAIN}/images/og-mantle-gold.jpg`;

const SEO = ({
    title,
    description,
    canonicalPath = '',
    image = DEFAULT_IMAGE,
    type = 'website',
    noindex = false,
    schema = null
}) => {
    const fullTitle = title || "Mantle-Gold Ltd | EPCI & Oil and Gas Services in Nigeria";
    const fullDescription = description || "Mantle-Gold Ltd is a Lagos-based EPCI contractor: subsea engineering, pipeline installation and asset integrity for Nigeria's oil and gas sector.";
    const cleanCanonical = `${DOMAIN}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`.replace(/\/$/, '') || DOMAIN;

    // Environment-based check: if staging hostname or explicitly set, noindex
    const isStaging = typeof window !== 'undefined' && window.location.hostname.includes('vercel.app');
    const robotsDirective = (noindex || isStaging) ? 'noindex, nofollow' : 'index, follow';

    return (
        <Helmet>
            <html lang="en-NG" />
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            <meta name="robots" content={robotsDirective} />
            <link rel="canonical" href={cleanCanonical} />

            {/* Open Graph */}
            <meta property="og:site_name" content="Mantle-Gold Ltd" />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={cleanCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Mantle-Gold Ltd EPCI & Subsea Oil and Gas Engineering in Nigeria" />
            <meta property="og:locale" content="en_NG" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mantlegold" />
            <meta name="twitter:creator" content="@mantlegold" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={fullDescription} />
            <meta name="twitter:image" content={image} />

            {/* Custom structured data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;

import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
    const defaultTitle = "Mantle-Gold Ltd - Oil, Gas & Energy Solutions";
    const defaultDescription = "Mantle-Gold Limited is a multi-disciplinary service provider in Engineering, Procurement, Installation and Construction Services in the Oil and Gas Industry.";
    const defaultKeywords = "oil, gas, energy, EPCI, subsea engineering, pipeline engineering, offshore, onshore, Mantle-Gold, Nigeria";
    
    return (
        <Helmet>
            <title>{title ? `${title} | Mantle-Gold Ltd` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || "https://mantle-gold.com"} />
            <meta property="og:title" content={title ? `${title} | Mantle-Gold Ltd` : defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || "https://mantle-gold.com"} />
            <meta property="twitter:title" content={title ? `${title} | Mantle-Gold Ltd` : defaultTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
        </Helmet>
    );
};

export default SEO;

import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items = [] }) => {
    // items: array of { label: string, path: string }
    const allItems = [{ label: 'Home', path: '/' }, ...items];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": allItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://mantle-gold.com${item.path === '/' ? '' : item.path}`
        }))
    };

    return (
        <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 bg-black/60 border-b border-white/5 text-xs text-gray-400">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto flex items-center flex-wrap gap-1.5 sm:gap-2">
                {allItems.map((item, idx) => {
                    const isLast = idx === allItems.length - 1;
                    return (
                        <div key={item.path || idx} className="flex items-center gap-1.5 sm:gap-2">
                            {idx > 0 && <ChevronRight size={13} className="text-gray-600 flex-shrink-0" />}
                            {isLast ? (
                                <span className="text-gold font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="hover:text-white transition-colors flex items-center gap-1"
                                >
                                    {idx === 0 && <Home size={13} className="text-gray-500" />}
                                    <span>{item.label}</span>
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default Breadcrumbs;

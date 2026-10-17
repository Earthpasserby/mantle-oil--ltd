import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Home, Wrench, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const NotFound = () => {
    return (
        <div className="bg-black text-white min-h-[85vh] flex flex-col justify-center">
            <SEO
                title="Page Not Found | Mantle-Gold Ltd"
                description="The page you requested could not be found. Explore Mantle-Gold Ltd's EPCI and oil and gas engineering services in Nigeria."
                canonicalPath="/404"
                noindex={true}
            />

            <div className="pt-24 pb-6">
                <Breadcrumbs items={[{ label: '404 Not Found', path: '/404' }]} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 py-12 flex-1 flex items-center justify-center">
                <div className="max-w-2xl w-full text-center p-8 sm:p-12 bg-slate rounded-2xl border border-white/10 shadow-2xl">
                    <div className="text-gold font-serif text-6xl sm:text-7xl font-bold mb-4">
                        404
                    </div>
                    <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
                        Navigation Notice
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                        The URL you attempted to reach may have been updated, relocated, or is temporarily unavailable. Use the links below to navigate back to Mantle-Gold Ltd's core operational pages:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
                        <Link
                            to="/"
                            className="p-4 bg-black/40 rounded-xl border border-white/5 hover:border-gold/40 transition-all flex items-center gap-3 text-gray-300 hover:text-white"
                        >
                            <Home size={18} className="text-gold flex-shrink-0" />
                            <div>
                                <div className="text-xs font-bold">Homepage</div>
                                <div className="text-[10px] text-gray-400">Company Overview</div>
                            </div>
                        </Link>
                        <Link
                            to="/services"
                            className="p-4 bg-black/40 rounded-xl border border-white/5 hover:border-gold/40 transition-all flex items-center gap-3 text-gray-300 hover:text-white"
                        >
                            <Wrench size={18} className="text-gold flex-shrink-0" />
                            <div>
                                <div className="text-xs font-bold">Our Services</div>
                                <div className="text-[10px] text-gray-400">EPCI &amp; Engineering</div>
                            </div>
                        </Link>
                        <Link
                            to="/contact"
                            className="p-4 bg-black/40 rounded-xl border border-white/5 hover:border-gold/40 transition-all flex items-center gap-3 text-gray-300 hover:text-white"
                        >
                            <Phone size={18} className="text-gold flex-shrink-0" />
                            <div>
                                <div className="text-xs font-bold">Contact Us</div>
                                <div className="text-[10px] text-gray-400">Lagos Headquarters</div>
                            </div>
                        </Link>
                    </div>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-gold text-black font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-500 transition-all text-sm shadow-xl"
                    >
                        <span>Return to Main Website</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

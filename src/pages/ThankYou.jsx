import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const ThankYou = () => {
    return (
        <div className="bg-black text-white min-h-[85vh] flex flex-col justify-center">
            <SEO
                title="Thank You | Mantle-Gold"
                description="Thank you for contacting Mantle-Gold. Our engineering team has received your message and will respond within 24 business hours."
                canonicalPath="/thank-you"
                noindex={true}
            />

            <div className="pt-24 pb-6">
                <Breadcrumbs items={[{ label: 'Thank You', path: '/thank-you' }]} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 py-12 flex-1 flex items-center justify-center">
                <div className="max-w-2xl w-full text-center p-8 sm:p-12 bg-slate rounded-2xl border border-gold/30 shadow-2xl">
                    <CheckCircle2 size={64} className="text-gold mx-auto mb-6" />
                    <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
                        Inquiry Received
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        Thank You for Contacting Mantle-Gold
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                        Your message has been routed to our technical and commercial operations team in Lekki, Lagos. We respond to all project inquiries within <strong className="text-white">24 business hours</strong>.
                    </p>

                    <div className="p-4 bg-black/40 rounded-xl border border-white/5 mb-8 text-xs sm:text-sm text-gray-300 space-y-2">
                        <div className="flex items-center justify-center gap-2">
                            <Phone size={15} className="text-gold" />
                            <span>Urgent Project Desk: <a href="tel:+2348032368599" className="text-gold hover:underline">+234 803 236 8599</a></span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Mail size={15} className="text-gold" />
                            <span>Direct Email: <a href="mailto:info@mantle-gold.com" className="text-gold hover:underline">info@mantle-gold.com</a></span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-black font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-500 transition-all text-sm shadow-xl"
                        >
                            <span>Return to Homepage</span>
                            <ArrowRight size={16} />
                        </Link>
                        <Link
                            to="/services"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-gold/40 text-gray-300 hover:text-white px-6 py-3.5 rounded-xl transition-all text-sm"
                        >
                            <span>Explore Our Services</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;

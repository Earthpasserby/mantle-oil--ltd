import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const PrivacyPolicy = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <SEO
                title="Privacy Policy | Mantle-Gold"
                description="Privacy Policy for Mantle-Gold. Understand how we collect, use, and protect your information when engaging our oil and gas EPCI services."
                canonicalPath="/privacy"
            />

            <div className="pt-28 pb-10 bg-darker border-b border-white/5">
                <div className="container mx-auto px-4 sm:px-6">
                    <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
                        Legal &amp; Compliance
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Last updated: October 2026 &bull; Mantle-Gold
                    </p>
                </div>
            </div>

            <Breadcrumbs items={[{ label: 'Privacy Policy', path: '/privacy' }]} />

            <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl text-gray-300 text-sm sm:text-base leading-relaxed space-y-6">
                <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">1. Introduction</h2>
                    <p>
                        Mantle-Gold ("we," "our," or "us"), incorporated under the laws of the Federal Republic of Nigeria with its principal administrative office at 31 Discovery Gardens Estate, Lekki, Lagos, respects the privacy of our website visitors, clients, and industry partners. This Privacy Policy details how we handle information submitted to us through our digital presence at mantle-gold.com.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">2. Information We Collect</h2>
                    <p className="mb-2">We collect only information voluntarily submitted by you during business communications, technical consultations, or tender inquiries:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-400">
                        <li>Contact details including full name, business email address, direct telephone number, and employer company name.</li>
                        <li>Project details, technical scopes, Bill of Quantities (BOQ), and Invitation to Tender (ITT) documentation shared for estimation.</li>
                        <li>Technical session analytics strictly used to ensure website stability, uptime, and cybersecurity monitoring.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">3. How Information Is Used</h2>
                    <p className="mb-2">All submitted information is strictly utilized for legitimate commercial and engineering purposes:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-400">
                        <li>Preparing formal engineering tenders, commercial bids, and technical capability presentations.</li>
                        <li>Executing contractual engineering, procurement, construction, and installation (EPCI) obligations.</li>
                        <li>Responding to client inquiries regarding subsea, pipeline, fabrication, or asset integrity services.</li>
                        <li>Maintaining regulatory compliance with Nigerian oil and gas statutory guidelines (NUPRC / NOGICD Act).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">4. Information Security &amp; Sharing</h2>
                    <p>
                        Mantle-Gold will never sell, lease, or monetize your commercial or personal data. We implement industry-grade technical safeguards to prevent unauthorized access or disclosure. Information is disclosed only when required by Nigerian legal authorities or with your explicit consent to project joint venture partners.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">5. Contact Information</h2>
                    <p>
                        For any questions concerning this Privacy Policy, please contact our administrative office at 31 Discovery Gardens Estate, Lekki, Lagos, Nigeria, or email us at <a href="mailto:info@mantle-gold.com" className="text-gold hover:underline">info@mantle-gold.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

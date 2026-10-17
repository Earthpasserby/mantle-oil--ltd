import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const TermsOfService = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <SEO
                title="Terms of Service | Mantle-Gold Ltd"
                description="Terms of Service for Mantle-Gold Ltd. Review the terms governing the use of our website and engineering solutions in Nigeria's oil and gas sector."
                canonicalPath="/terms"
            />

            <div className="pt-28 pb-10 bg-darker border-b border-white/5">
                <div className="container mx-auto px-4 sm:px-6">
                    <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
                        Legal Framework
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Last updated: October 2026 &bull; Mantle-Gold Ltd
                    </p>
                </div>
            </div>

            <Breadcrumbs items={[{ label: 'Terms of Service', path: '/terms' }]} />

            <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl text-gray-300 text-sm sm:text-base leading-relaxed space-y-6">
                <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">1. Agreement to Terms</h2>
                    <p>
                        By accessing or using the website of Mantle-Gold Ltd (accessible via mantle-gold.com), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and applicable laws and regulations of the Federal Republic of Nigeria.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">2. Intellectual Property Rights</h2>
                    <p>
                        All engineering descriptions, proprietary case studies, photographic media, registered company marks, diagrams, and code appearing on this site are the exclusive property of Mantle-Gold Ltd or credited project partners. Unauthorized reproduction, scraping, or commercial exploitation is strictly prohibited without written authorization.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">3. Nature of Information &amp; Disclaimer</h2>
                    <p>
                        The information provided on this website is for informational and commercial introduction purposes regarding our Engineering, Procurement, Construction, and Installation (EPCI) capabilities. Formal commercial obligations, performance warranties, and engineering scopes are governed exclusively by executed master service agreements (MSA) and formal contracts.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">4. Governing Law and Jurisdiction</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the substantive laws of the Federal Republic of Nigeria. Any disputes arising in connection with the use of this website shall fall under the exclusive jurisdiction of the state or federal courts situated in Lagos State, Nigeria.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">5. Corporate Inquiries</h2>
                    <p>
                        For inquiries concerning corporate governance or terms, please contact:
                        <br />
                        <strong>Mantle-Gold Ltd</strong>
                        <br />
                        31 Discovery Gardens Estate, Lekki, Lagos, Nigeria
                        <br />
                        Email: <a href="mailto:info@mantleoilandgas.com" className="text-gold hover:underline">info@mantleoilandgas.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;

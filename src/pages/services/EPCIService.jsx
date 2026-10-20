import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, HardHat, FileText, Anchor, Compass } from 'lucide-react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import CTABanner from '../../components/CTABanner';

const faqs = [
    {
        question: "What does EPCI project execution encompass in Nigeria?",
        answer: "EPCI stands for Engineering, Procurement, Construction, and Installation. In Nigeria's oil and gas sector, Mantle-Gold provides integrated turnkey delivery covering conceptual FEED, detailed multidisciplinary engineering, transparent global and local procurement, onshore fabrication of spools and jackets, and offshore installation using specialized DP2 construction vessels."
    },
    {
        question: "How does Mantle-Gold comply with the NOGICD Act?",
        answer: "Mantle-Gold maintains 100% Nigerian Content commitment across all EPCI operations. Our engineering design, project management, welding fabrication, and site supervision personnel are domiciled in Nigeria, meeting and exceeding Nigerian Oil and Gas Industry Content Development (NOGICD) guidelines."
    },
    {
        question: "What is Mantle-Gold's safety track record on major projects?",
        answer: "Over our decade-plus operational history since 2014, Mantle-Gold has delivered 532,480 cumulative man-hours with a 98% audited safety rating and an unblemished Zero Lost Time Injury (Zero LTI) track record across high-risk offshore and swamp locations."
    },
    {
        question: "Can Mantle-Gold handle both greenfield and brownfield EPCI projects?",
        answer: "Yes. We engineer and execute greenfield field development installations as well as brownfield asset retrofits, platform debottlenecking, pipeline tie-ins, and offshore umbilical relocations in shallow, swamp, and deepwater concessions."
    },
    {
        question: "How do we engage Mantle-Gold for an EPCI project tender?",
        answer: "You can request a technical qualification package or submit your Invitation to Tender (ITT) directly via email at info@mantle-gold.com or contact our Lagos engineering office at +234 803 236 8599."
    }
];

const EPCIService = () => {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "EPCI Project Execution Services",
        "serviceType": "Engineering, Procurement, Construction and Installation (EPCI)",
        "provider": {
            "@type": "Organization",
            "name": "Mantle-Gold",
            "url": "https://mantle-gold.com",
            "logo": "https://mantle-gold.com/logo.png"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Nigeria"
        },
        "description": "End-to-end EPCI project execution for oil and gas assets in Nigeria, from engineering and procurement to installation. Request a quote.",
        "url": "https://mantle-gold.com/services/epci"
    };

    return (
        <div className="bg-black text-white">
            <SEO
                title="EPCI Contractor in Nigeria | Mantle-Gold"
                description="End-to-end EPCI project execution for oil and gas assets in Nigeria, from engineering and procurement to installation. Request a quote."
                canonicalPath="/services/epci"
                schema={serviceSchema}
            />

            <PageHero
                badge="Turnkey EPCI Delivery"
                title="EPCI Project Execution for Oil and Gas in Nigeria"
                subtitle="Complete lifecycle engineering, procurement, construction, and offshore installation delivering maximum operational integrity and strict local content compliance."
                image="/images/epci-overview.jpg"
            />

            <Breadcrumbs items={[
                { label: 'Services', path: '/services' },
                { label: 'EPCI Project Execution', path: '/services/epci' }
            ]} />

            {/* Core Overview Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-darker" aria-label="EPCI Services Overview">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                                Premier EPCI Contractor Nigeria
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                Integrated Turnkey EPCI Solutions for Nigeria’s Energy Infrastructure
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                As a premier <strong>EPCI contractor Nigeria</strong>, Mantle-Gold delivers integrated Engineering, Procurement, Construction, and Installation projects that solve complex technical hurdles across the Niger Delta basin, Gulf of Guinea deepwater assets, and onshore energy terminals.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                Since our establishment in June 2014, our multidisciplinary team of Shell-certified technical authorities, project managers, and marine operations specialists has executed high-precision EPCI work scopes. We bridge the gap between conceptual field architecture and robust, safe operational delivery under rigorous international codes and Nigerian local content regulations.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                Whether deploying subsea production systems, fabricating heavy topside manifolds, or executing high-pressure flowline tie-ins, Mantle-Gold provides single-point accountability to IOCs, indigenous operators, and national oil companies.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {[
                                    "Front-End Engineering Design (FEED)",
                                    "Critical Path International Procurement",
                                    "Certified Heavy Steel Fabrication",
                                    "Offshore DP Vessel Mobilization",
                                    "Subsea Hookup & Commissioning",
                                    "Strict NOGICD Act 100% Compliance"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2.5 p-2.5 bg-slate/50 border border-white/5 rounded-lg">
                                        <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                                        <span className="text-xs sm:text-sm text-gray-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl bg-slate">
                                <img
                                    src="/images/platform-topsides.jpg"
                                    alt="Offshore production topsides platform engineered by Mantle-Gold"
                                    className="w-full h-80 sm:h-96 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-6 bg-gradient-to-t from-black via-black/90 to-black/60">
                                    <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                                        Project Credentials
                                    </div>
                                    <div className="text-white text-lg font-bold font-serif mb-2">
                                        532,480+ Man-Hours with Zero LTI
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Proven track record on Addax Petroleum Okwori Field subsea umbilical relocation and technical contribution to deepwater Gulf of Mexico and offshore Nigeria field assets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work Breakdown */}
            <section className="py-12 sm:py-16 bg-black" aria-label="Scope of Work">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                            Our Capabilities
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Four Pillars of Our Turnkey EPCI Delivery
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Mantle-Gold synchronizes every phase of the project lifecycle to eliminate interface risks, curb schedule slippage, and optimize capital expenditure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Compass className="text-gold" size={28} />,
                                title: "1. Engineering",
                                desc: "Conceptual studies, FEED, detailed 3D modeling, stress analysis, finite element analysis (FEA), and flow assurance for subsea systems and topside packages."
                            },
                            {
                                icon: <FileText className="text-gold" size={28} />,
                                title: "2. Procurement",
                                desc: "Global sourcing of API-grade line pipes, exotic duplex alloys, subsea valves, and umbilicals backed by rigorous vendor quality audits and expedited freight."
                            },
                            {
                                icon: <HardHat className="text-gold" size={28} />,
                                title: "3. Construction",
                                desc: "High-integrity onshore structural fabrication, pressure vessel assembly, piping spools, and skid integration executed by AWS and CSWIP-certified personnel."
                            },
                            {
                                icon: <Anchor className="text-gold" size={28} />,
                                title: "4. Installation",
                                desc: "Marine spread mobilization, dynamic positioning pipeline and umbilical lay, subsea tie-ins, pre-commissioning, hydrotesting, and final handover to operations."
                            }
                        ].map((pillar, idx) => (
                            <div key={idx} className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                                <div className="mb-4">{pillar.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Process Workflow */}
            <section className="py-12 sm:py-16 bg-darker" aria-label="Technical Process">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl mb-12">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                            Execution Protocol
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Rigorous Stage-Gate EPCI Project Methodology
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Every contract undertaken by Mantle-Gold follows a structured Stage-Gate process designed in accordance with Shell DEP, API, and ISO 9001:2015 frameworks to safeguard capital and ensure field safety.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-slate/60 border border-white/10 rounded-xl">
                            <div className="text-gold font-serif text-3xl font-bold mb-2">01</div>
                            <h3 className="text-base font-bold text-white mb-2">FEED &amp; Constructability Audits</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Identification of site geotechnical parameters, marine current modeling, HAZOP/HAZID analysis, and interface risk mapping prior to fabrication commitment.
                            </p>
                        </div>
                        <div className="p-6 bg-slate/60 border border-white/10 rounded-xl">
                            <div className="text-gold font-serif text-3xl font-bold mb-2">02</div>
                            <h3 className="text-base font-bold text-white mb-2">Fabrication &amp; Stringent QA/QC</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                100% Non-Destructive Testing (NDT), hydrostatic pressure proof testing, factory acceptance testing (FAT), and protective coating under NACE standards.
                            </p>
                        </div>
                        <div className="p-6 bg-slate/60 border border-white/10 rounded-xl">
                            <div className="text-gold font-serif text-3xl font-bold mb-2">03</div>
                            <h3 className="text-base font-bold text-white mb-2">Offshore Lay &amp; Commissioning</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Precision reel-lay and J-lay offshore operations, diverless ROV subsea connection, nitrogen purging, hydrotesting, and final operational sign-off.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Spotlight */}
            <section className="py-12 sm:py-16 bg-black" aria-label="Verified Project Credentials">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="bg-slate border border-gold/30 rounded-2xl p-6 sm:p-10 lg:p-12">
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8">
                                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
                                    Verified Project Credential
                                </span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                                    Okwori Field Subsea Umbilicals &amp; Flexible Flowlines Relocation
                                </h3>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                                    Mantle-Gold’s executive technical leadership engineered and supervised the complex offshore relocation and re-installation of flexible pipelines and subsea umbilicals for Addax Petroleum in the Okwori concession offshore Nigeria.
                                </p>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                                    The project resolved dynamic pipeline fatigue challenges while safeguarding active production wells, completed on schedule under zero-incident safety protocols.
                                </p>
                                <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-gold" size={16} />
                                        <span>Client: Addax Petroleum</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-gold" size={16} />
                                        <span>Scope: Umbilicals &amp; Flexible Pipelines</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-gold" size={16} />
                                        <span>Status: Delivered Safely</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 text-center lg:text-right">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-gold text-black font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-500 transition-all text-sm shadow-xl"
                                >
                                    <span>Request Tender Submission</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services Cross-linking */}
            <section className="py-12 bg-darker" aria-label="Related Services">
                <div className="container mx-auto px-4 sm:px-6">
                    <h3 className="text-lg font-bold text-white mb-6">Explore Complementary Engineering Capabilities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Subsea Engineering", path: "/services/subsea-engineering" },
                            { name: "Pipeline Engineering", path: "/services/pipeline-engineering" },
                            { name: "Asset Integrity", path: "/services/asset-integrity" },
                            { name: "Procurement Services", path: "/services/procurement" }
                        ].map((serv, i) => (
                            <Link
                                key={i}
                                to={serv.path}
                                className="p-4 bg-slate rounded-xl border border-white/5 hover:border-gold/40 text-gray-300 hover:text-gold transition-all text-xs sm:text-sm font-semibold flex items-center justify-between"
                            >
                                <span>{serv.name}</span>
                                <ArrowRight size={14} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQAccordion
                title="EPCI Project Execution FAQs"
                subtitle="Technical & Commercial Inquiries"
                faqs={faqs}
            />

            <CTABanner />
        </div>
    );
};

export default EPCIService;

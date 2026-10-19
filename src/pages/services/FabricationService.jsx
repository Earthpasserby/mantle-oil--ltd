import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Flame, Wrench, Shield, CheckCheck } from 'lucide-react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import CTABanner from '../../components/CTABanner';

const faqs = [
    {
        question: "What fabrication services does Mantle-Gold Ltd provide in Lagos, Nigeria?",
        answer: "Mantle-Gold Ltd provides specialized oil and gas fabrication Lagos capabilities, including heavy structural steel framing, offshore topside modules, subsea manifolds, PLET/PLEM structures, high-pressure piping spools, process equipment skids, and customized marine subsea templates."
    },
    {
        question: "What welding certifications and qualifications do your fabricators hold?",
        answer: "All welding engineers, fabricators, and inspectors are certified to AWS D1.1 (structural), ASME Section IX (pressure piping and vessels), and API 1104 standards. Our qualified processes encompass SMAW, GTAW (TIG), GMAW (MIG), and Submerged Arc Welding (SAW) on carbon steels, duplex stainless steels, and exotic nickel alloys."
    },
    {
        question: "How do you ensure quality control during fabrication?",
        answer: "Every fabrication assembly undergoes strict quality verification, including 100% Non-Destructive Testing (NDT) via Phased Array Ultrasonic Testing (PAUT), radiographic inspection (RT), magnetic particle testing (MT), dye penetrant inspection (PT), hydrostatic pressure proof testing, and dimensional laser verification."
    },
    {
        question: "How does Mantle-Gold Ltd comply with Nigerian Content (NOGICD Act)?",
        answer: "Mantle-Gold Ltd is 100% committed to Nigerian Content development. All structural fabrication, pipe spooling, blast cleaning, protective coating, and assembly work scopes are executed by Nigerian personnel in compliant fabrication facilities, creating domestic industrial value."
    },
    {
        question: "How can clients request a quotation for offshore fabrication work?",
        answer: "You can submit engineering drawings, technical specifications, or Invitation to Tender (ITT) packages directly to our Lagos commercial team via email at info@mantle-gold.com or by calling +234 803 236 8599."
    }
];

const FabricationService = () => {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Oil and Gas Fabrication Services",
        "serviceType": "Structural and Offshore Mechanical Fabrication",
        "provider": {
            "@type": "Organization",
            "name": "Mantle-Gold Ltd",
            "url": "https://mantle-gold.com",
            "logo": "https://mantle-gold.com/logo.png"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Nigeria"
        },
        "description": "Structural and offshore fabrication for oil and gas projects, delivered from Lagos with strict quality and safety control. Request a quote.",
        "url": "https://mantle-gold.com/services/fabrication"
    };

    return (
        <div className="bg-black text-white">
            <SEO
                title="Oil & Gas Fabrication in Lagos | Mantle-Gold Ltd"
                description="Structural and offshore fabrication for oil and gas projects, delivered from Lagos with strict quality and safety control. Request a quote."
                canonicalPath="/services/fabrication"
                schema={serviceSchema}
            />

            <PageHero
                badge="High-Integrity Heavy Fabrication"
                title="Oil and Gas Fabrication in Lagos, Nigeria"
                subtitle="Certified offshore structural steel fabrication, high-pressure piping spools, subsea manifolds, and modular skid packaging engineered to international oilfield standards."
                image="/images/fabrication-welding.jpg"
            />

            <Breadcrumbs items={[
                { label: 'Services', path: '/services' },
                { label: 'Fabrication Services', path: '/services/fabrication' }
            ]} />

            {/* Core Overview */}
            <section className="py-12 sm:py-16 md:py-20 bg-darker" aria-label="Fabrication Overview">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                                Certified Energy Fabrication
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                Precision Oil and Gas Fabrication in Lagos, Nigeria
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                High-integrity mechanical and structural assembly is the bedrock of dependable oil and gas infrastructure. Mantle-Gold Ltd delivers premier <strong>oil and gas fabrication Lagos</strong> solutions that meet the stringent material, dimensional, and metallurgical requirements of upstream IOCs, midstream pipeline operators, and offshore concession holders.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                Operating from Lagos with direct access to coastal logistics corridors, our fabrication operations cover heavy structural steel, offshore topside modules, subsea manifolds, pressure-containing pipe spools, and customized equipment skids. We operate under rigorous AWS D1.1, ASME Section IX, and API 1104 welding procedure specifications (WPS).
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                Backed by a verified corporate track record of 532,480+ cumulative man-hours without an LTI since 2014, Mantle-Gold Ltd pairs technical excellence with complete compliance under the Nigerian Oil and Gas Industry Content Development (NOGICD) Act.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {[
                                    "Heavy Offshore Structural Steel Framing",
                                    "Subsea Manifolds, PLEMs, & PLETs",
                                    "ASME B31.3 High-Pressure Piping Spools",
                                    "Duplex, Super Duplex & Inconel Welding",
                                    "100% Phased Array & Radiographic NDT",
                                    "Hydrostatic Proof Pressure Testing"
                                ].map((cap, i) => (
                                    <div key={i} className="flex items-center gap-2.5 p-2.5 bg-slate/50 border border-white/5 rounded-lg">
                                        <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                                        <span className="text-xs sm:text-sm text-gray-200 font-medium">{cap}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl bg-slate">
                                <img
                                    src="/images/drydock-repair.jpg"
                                    alt="Engineers planning fabrication and structural steel assembly in Lagos shipyard"
                                    className="w-full h-80 sm:h-96 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-6 bg-gradient-to-t from-black via-black/90 to-black/60">
                                    <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                                        Quality Assurance
                                    </div>
                                    <div className="text-white text-lg font-bold font-serif mb-2">
                                        100% Verified Weld Integrity
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Comprehensive non-destructive examination (NDE) and hydrostatic testing validating every weld seam before offshore mobilization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Fabrication Disciplines */}
            <section className="py-12 sm:py-16 bg-black" aria-label="Fabrication Capabilities">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                            Core Capabilities
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Heavy Industrial Fabrication Work Scopes
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Engineered from raw plate and tubular delivery to final blast, paint, and load-out onto transport barges.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                            <Flame className="text-gold mb-4" size={30} />
                            <h3 className="text-lg font-bold text-white mb-2">Subsea &amp; Offshore Modules</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Subsea manifold skids, PLEM/PLET headers, mud mats, pipeline tie-in spools, and deck extensions engineered to withstand harsh subsea marine dynamics.
                            </p>
                        </div>
                        <div className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                            <Wrench className="text-gold mb-4" size={30} />
                            <h3 className="text-lg font-bold text-white mb-2">High-Pressure Pipe Spooling</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Fabrication of process piping in carbon steel (API 5L), low-temperature carbon steel, and CRA alloys for high-pressure separation and injection units.
                            </p>
                        </div>
                        <div className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                            <Shield className="text-gold mb-4" size={30} />
                            <h3 className="text-lg font-bold text-white mb-2">Blast, Paint &amp; NACE Coating</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Automated abrasive grit blasting to SA 2.5 profile, multi-coat epoxy/polyurethane marine coating systems, and thermal spray aluminum (TSA) application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality & Welding Standards */}
            <section className="py-12 sm:py-16 bg-darker" aria-label="Quality Standards">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="bg-slate border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12">
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8">
                                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
                                    Quality Control
                                </span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                                    Certified QA/QC and Weld Procedure Qualifications
                                </h3>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                                    Every fabrication project at Mantle-Gold Ltd is governed by an exhaustive Inspection and Test Plan (ITP). Our QA/QC inspectors maintain Level II and III PCN/CSWIP qualifications, supervising Welder Performance Qualifications (WPQ) and Procedure Qualification Records (PQR).
                                </p>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                                    Traceability dossiers provide full 3.1 material test certificates (MTC), NDT films, dimensional inspection reports, and hydrostatic charts for client handover.
                                </p>
                                <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <CheckCheck className="text-gold" size={16} />
                                        <span>AWS D1.1 Structural</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCheck className="text-gold" size={16} />
                                        <span>ASME Section IX Welding</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCheck className="text-gold" size={16} />
                                        <span>ISO 9001:2015 QA/QC</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 text-center lg:text-right">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-gold text-black font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-500 transition-all text-sm shadow-xl"
                                >
                                    <span>Request Fabrication Quote</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services Cross-linking */}
            <section className="py-12 bg-black" aria-label="Related Services">
                <div className="container mx-auto px-4 sm:px-6">
                    <h3 className="text-lg font-bold text-white mb-6">Explore Related Engineering Capabilities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "EPCI Execution", path: "/services/epci" },
                            { name: "Subsea Engineering", path: "/services/subsea-engineering" },
                            { name: "Pipeline Engineering", path: "/services/pipeline-engineering" },
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
                title="Oil & Gas Fabrication FAQs"
                subtitle="Technical & Workshop Inquiries"
                faqs={faqs}
            />

            <CTABanner />
        </div>
    );
};

export default FabricationService;

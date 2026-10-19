import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Activity, Search, ShieldAlert, FileCheck } from 'lucide-react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import CTABanner from '../../components/CTABanner';

const faqs = [
    {
        question: "What is asset integrity management in Nigeria's oil and gas sector?",
        answer: "Asset integrity management Nigeria refers to the systematic engineering processes that ensure oil and gas production facilities, offshore platforms, pipelines, and pressure vessels remain structurally sound, safe to operate, and fully compliant with Nigerian Upstream Petroleum Regulatory Commission (NUPRC) and international codes throughout their operational lifecycle."
    },
    {
        question: "What inspection methodologies does Mantle-Gold Ltd deploy?",
        answer: "We deploy advanced Non-Destructive Testing (NDT) techniques including Phased Array Ultrasonic Testing (PAUT), Time of Flight Diffraction (TOFD), Eddy Current Testing (ECT), magnetic particle inspection, acoustic emission testing, and digital radiographic inspection."
    },
    {
        question: "How does Risk-Based Inspection (RBI) save costs for operators?",
        answer: "By applying API 580 and API 581 Risk-Based Inspection methodologies, Mantle-Gold Ltd prioritizes inspection resources on high-consequence, high-probability failure points. This minimizes unnecessary facility shutdowns, prevents catastrophic leaks, and optimizes maintenance expenditure."
    },
    {
        question: "Can Mantle-Gold Ltd evaluate aging offshore facilities for life extension?",
        answer: "Yes. We execute comprehensive Fitness-For-Service (FFS) assessments under API 579 / ASME FFS-1 standards. Our engineers analyze metal loss, crack-like flaws, fatigue cycles, and corrosion rates to certify safe operating envelope extensions for mature assets."
    },
    {
        question: "What is your safety track record during asset turnaround maintenance?",
        answer: "Mantle-Gold Ltd has delivered over 532,480 cumulative man-hours across high-risk offshore platforms and onshore production facilities with an audited 98% safety rating and an unblemished Zero Lost Time Injury (Zero LTI) track record since 2014."
    }
];

const AssetIntegrityService = () => {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Asset Integrity and Support Services",
        "serviceType": "Oil and Gas Asset Integrity Management (AIM)",
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
        "description": "Asset support and integrity services that keep Nigerian oil and gas facilities safe, compliant and operating. Speak to Mantle-Gold Ltd.",
        "url": "https://mantle-gold.com/services/asset-integrity"
    };

    return (
        <div className="bg-black text-white">
            <SEO
                title="Asset Integrity Management in Nigeria | Mantle-Gold Ltd"
                description="Asset support and integrity services that keep Nigerian oil and gas facilities safe, compliant and operating. Speak to Mantle-Gold Ltd."
                canonicalPath="/services/asset-integrity"
                schema={serviceSchema}
            />

            <PageHero
                badge="Asset Life Extension & Safety"
                title="Asset Integrity and Support Services in Nigeria"
                subtitle="Engineering rigour, Risk-Based Inspection (RBI), corrosion mitigation, and Fitness-For-Service assessments preserving offshore and onshore energy infrastructure."
                image="/images/asset-integrity.jpg"
            />

            <Breadcrumbs items={[
                { label: 'Services', path: '/services' },
                { label: 'Asset Integrity', path: '/services/asset-integrity' }
            ]} />

            {/* Core Overview */}
            <section className="py-12 sm:py-16 md:py-20 bg-darker" aria-label="Asset Integrity Overview">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                                Safe &amp; Compliant Facilities
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                Comprehensive Asset Integrity Management Nigeria for Energy Infrastructure
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                In mature and demanding operating environments, maintaining structural and mechanical reliability is essential for continuous production. Mantle-Gold Ltd provides industry-leading <strong>asset integrity management Nigeria</strong>, delivering engineering surveillance, non-destructive evaluation, and maintenance support that protect high-value capital assets across the energy sector.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                Our integrated integrity frameworks align with American Petroleum Institute (API 510, API 570, API 653, API 580) and Shell DEP standards. We help asset managers transition from reactive maintenance to proactive, risk-informed lifecycle stewardship.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                With more than 532,480 cumulative man-hours delivered safely without an LTI since our incorporation in June 2014, our Shell-certified technical authorities and CSWIP/PCN inspection leads safeguard personnel, operating licenses, and environmental integrity.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {[
                                    "Risk-Based Inspection (RBI) Programs",
                                    "Fitness-For-Service (FFS) per API 579",
                                    "Advanced NDT (PAUT, TOFD, Eddy Current)",
                                    "Corrosion Mapping & Cathodic Protection",
                                    "Pressure Vessel & Tank Shell Audits",
                                    "NUPRC Statutory Compliance Verification"
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
                                    src="/images/plant-inspection.jpg"
                                    alt="Engineers executing asset integrity inspection on industrial oil and gas equipment in Nigeria"
                                    className="w-full h-80 sm:h-96 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-6 bg-gradient-to-t from-black via-black/90 to-black/60">
                                    <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                                        Audited Track Record
                                    </div>
                                    <div className="text-white text-lg font-bold font-serif mb-2">
                                        98% Safety &amp; Quality Rating
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Zero Lost Time Injuries (LTI) across offshore production platforms, gas processing facilities, and deepwater asset integrity campaigns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Asset Integrity Disciplines */}
            <section className="py-12 sm:py-16 bg-black" aria-label="Asset Integrity Disciplines">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                            Integrated Scope
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Four Dimensions of Facility Integrity Assurance
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base">
                            From baseline surveys to life-extension certification, our engineering team manages the complete integrity lifecycle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Search className="text-gold" size={28} />,
                                title: "Risk-Based Inspection",
                                desc: "Development of qualitative and quantitative RBI plans per API 580/581 to optimize turnaround inspection intervals and eliminate unplanned downtime."
                            },
                            {
                                icon: <Activity className="text-gold" size={28} />,
                                title: "Advanced NDT & Survey",
                                desc: "High-resolution ultrasonic wall thickness mapping, phased array testing of welded seams, corrosion under insulation (CUI) detection, and pulsed eddy current."
                            },
                            {
                                icon: <FileCheck className="text-gold" size={28} />,
                                title: "Fitness-For-Service",
                                desc: "API 579-1 / ASME FFS-1 Level 1, 2, and 3 engineering evaluations verifying remaining safe operating margins on corroded or dented assets."
                            },
                            {
                                icon: <ShieldAlert className="text-gold" size={28} />,
                                title: "Corrosion Management",
                                desc: "Chemical inhibitor optimization, cathodic protection potential surveys, composite repair wrapping, and structural blast & paint coating surveillance."
                            }
                        ].map((disc, idx) => (
                            <div key={idx} className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                                <div className="mb-4">{disc.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{disc.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{disc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regulatory & Safety Assurance */}
            <section className="py-12 sm:py-16 bg-darker" aria-label="Compliance & Standards">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="bg-slate border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12">
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8">
                                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
                                    Statutory Compliance
                                </span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                                    NUPRC and International Safety Standards Compliance
                                </h3>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                                    Operating in Nigeria's upstream, midstream, and downstream sectors requires strict adherence to regulatory guidelines issued by the Nigerian Upstream Petroleum Regulatory Commission (NUPRC).
                                </p>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                                    Mantle-Gold Ltd provides verified integrity inspection documentation, statutory pressure vessel re-certification dossiers, and technical authority sign-offs that satisfy international auditing bodies and local authorities.
                                </p>
                                <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-gold" size={16} />
                                        <span>API 510 / 570 / 653 Certified</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-gold" size={16} />
                                        <span>Shell DEP Standards</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-gold" size={16} />
                                        <span>NUPRC Permit Compliant</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 text-center lg:text-right">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-gold text-black font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-500 transition-all text-sm shadow-xl"
                                >
                                    <span>Schedule Facility Audit</span>
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
                    <h3 className="text-lg font-bold text-white mb-6">Related Operational &amp; Engineering Services</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "EPCI Execution", path: "/services/epci" },
                            { name: "Pipeline Engineering", path: "/services/pipeline-engineering" },
                            { name: "Subsea Engineering", path: "/services/subsea-engineering" },
                            { name: "Fabrication Services", path: "/services/fabrication" }
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
                title="Asset Integrity FAQs"
                subtitle="Facility Inspection & Maintenance Questions"
                faqs={faqs}
            />

            <CTABanner />
        </div>
    );
};

export default AssetIntegrityService;

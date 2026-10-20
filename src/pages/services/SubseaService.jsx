import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Waves, Cpu, Compass, Layers } from 'lucide-react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import CTABanner from '../../components/CTABanner';

const faqs = [
    {
        question: "What subsea engineering services does Mantle-Gold provide in Nigeria?",
        answer: "Mantle-Gold delivers comprehensive subsea engineering services Nigeria, including FEED and detailed design for Subsea Umbilicals, Risers, and Flowlines (SURF), subsea manifold and PLET/PLEM layout, dynamic umbilical fatigue analysis, deepwater installation supervision, and diverless ROV intervention planning."
    },
    {
        question: "What qualifications does your subsea technical leadership hold?",
        answer: "Our leadership includes a certified Shell Technical Authority (TA) in Subsea Systems with over 31 years of global oil and gas experience across Shell, ExxonMobil, and Addax in Nigeria and the United States (including Gulf of Mexico deepwater Perdido Stage 2)."
    },
    {
        question: "How do you handle flexible flowline and umbilical installation?",
        answer: "We engineer carousel reel deployment, dynamic tensioner loading, seabed route surveying, umbilical pulling through J-tubes, subsea termination unit (SDU/HDU) tie-in, and hydro-testing under stringent deepwater safety parameters."
    },
    {
        question: "What Nigerian offshore fields has your team supported?",
        answer: "Our technical team has executed subsea flowline and umbilical relocation in Addax Petroleum's Okwori field offshore Nigeria and contributed to subsea FEED and ITT packages for deepwater offshore projects across the Gulf of Guinea."
    },
    {
        question: "Can Mantle-Gold support subsea inspection, maintenance, and repair (IMR)?",
        answer: "Yes. We plan and execute subsea IMR campaigns utilizing Work-Class ROVs, acoustic seabed mapping, cathodic protection monitoring, and ultrasonic non-destructive testing for subsea trees, manifolds, and pipelines."
    }
];

const SubseaService = () => {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Subsea Engineering Services",
        "serviceType": "Subsea Umbilicals, Risers and Flowlines (SURF) Engineering",
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
        "description": "Subsea engineering, umbilical and flowline installation support for Nigerian offshore fields. Talk to our technical team.",
        "url": "https://mantle-gold.com/services/subsea-engineering"
    };

    return (
        <div className="bg-black text-white">
            <SEO
                title="Subsea Engineering Services in Nigeria | Mantle-Gold"
                description="Subsea engineering, umbilical and flowline installation support for Nigerian offshore fields. Talk to our technical team."
                canonicalPath="/services/subsea-engineering"
                schema={serviceSchema}
            />

            <PageHero
                badge="Deepwater & SURF Solutions"
                title="Subsea Engineering Services in Nigeria"
                subtitle="High-precision design, umbilical installation, subsea manifold deployment, and deepwater flow assurance engineered under certified Shell Technical Authority standards."
                image="/images/subsea-vessel.jpg"
            />

            <Breadcrumbs items={[
                { label: 'Services', path: '/services' },
                { label: 'Subsea Engineering', path: '/services/subsea-engineering' }
            ]} />

            {/* Core Overview */}
            <section className="py-12 sm:py-16 md:py-20 bg-darker" aria-label="Subsea Engineering Overview">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                                World-Class SURF Solutions
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                Specialized Subsea Engineering Services Nigeria for Offshore Operators
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                Delivering reliable <strong>subsea engineering services Nigeria</strong> demands deep domain expertise, hydrodynamic modeling prowess, and strict adherence to deepwater offshore safety standards. Mantle-Gold provides end-to-end subsea engineering for Subsea Umbilicals, Risers, and Flowlines (SURF), subsea production systems (SPS), and seabed tie-in infrastructure across shallow water and ultra-deep concessions.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                Headquartered in Lekki, Lagos, Mantle-Gold brings technical leadership backed by Shell-certified Technical Authority credentials. Our engineering team specializes in resolving dynamic subsea pipeline fatigue, high-temperature/high-pressure (HPHT) flowline expansions, seabed routing across uneven bathymetry, and J-tube pull-in stress calculations.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                With a direct legacy of executing critical subsea projects—including flexible flowlines and umbilical relocation for Addax Petroleum in Nigeria's Okwori field and umbilical distribution systems for Shell’s deepwater Perdido Stage 2 in the Gulf of Mexico—Mantle-Gold stands as a proven partner for major operators.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {[
                                    "SURF Field Layout & Bathymetry Routing",
                                    "Dynamic Umbilical Fatigue Analysis",
                                    "Subsea Manifold & PLEM/PLET Design",
                                    "Deepwater Flow Assurance Calculations",
                                    "ROV Subsea Tooling & Intervention",
                                    "Subsea Hydrotesting & Pre-Commissioning"
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
                                    src="/images/pipeline-subsea.jpg"
                                    alt="Subsea manifold and pipeline tie-in junction engineered offshore Nigeria"
                                    className="w-full h-80 sm:h-96 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-6 bg-gradient-to-t from-black via-black/90 to-black/60">
                                    <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                                        Technical Leadership
                                    </div>
                                    <div className="text-white text-lg font-bold font-serif mb-2">
                                        Shell Certified Technical Authority
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Over 31 years of executive subsea engineering credentials leading umbilical design, manufacture, offshore lay, and commissioning for world-class operators.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Subsea Capabilities */}
            <section className="py-12 sm:py-16 bg-black" aria-label="Technical Scope">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                            Core Disciplines
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Comprehensive Subsea Engineering Capabilities
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Engineered from initial conceptual design to offshore installation supervision under API 17 series and DNV-GL standards.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                            <Waves className="text-gold mb-4" size={32} />
                            <h3 className="text-lg font-bold text-white mb-2">Umbilicals &amp; Flexible Flowlines</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                FEED, procurement specifications, tensioner lay calculations, dynamic bend restrictors, and subsea distribution units (SDU) engineered for aggressive deepwater current regimes.
                            </p>
                        </div>
                        <div className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                            <Cpu className="text-gold mb-4" size={32} />
                            <h3 className="text-lg font-bold text-white mb-2">Subsea Production Architecture</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Subsea manifold structures, pipeline end terminations (PLET), pipeline end manifolds (PLEM), and tie-in jumper design optimizing production routing and recovery.
                            </p>
                        </div>
                        <div className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                            <Layers className="text-gold mb-4" size={32} />
                            <h3 className="text-lg font-bold text-white mb-2">Subsea Installation &amp; IMR</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Installation procedures, DP2 vessel mobilization specifications, diverless ROV intervention tooling, pipeline pre-commissioning, and subsea asset life-extension audits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Feature */}
            <section className="py-12 sm:py-16 bg-darker" aria-label="Offshore Subsea Project Record">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="bg-slate border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12">
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8">
                                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
                                    Offshore Case Study
                                </span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                                    Subsea Umbilical Relocation — Okwori Field Concession
                                </h3>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                                    In the Okwori concession offshore Nigeria, dynamic marine currents and changing production requirements necessitated the relocation and re-installation of subsea umbilicals and flexible pipelines without shutting down adjacent producing wells.
                                </p>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                                    Mantle-Gold technical leadership orchestrated the detailed umbilical stress modeling, marine vessel procedures, and ROV-assisted hookup, successfully executing the campaign under zero-incident safety conditions.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                                    <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                                        <div className="text-gold font-bold">Client</div>
                                        <div className="text-gray-300">Addax Petroleum</div>
                                    </div>
                                    <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                                        <div className="text-gold font-bold">Standard</div>
                                        <div className="text-gray-300">API Spec 17E / 17J</div>
                                    </div>
                                    <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                                        <div className="text-gold font-bold">Safety</div>
                                        <div className="text-gray-300">Zero LTI Recorded</div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 text-center lg:text-right">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-gold text-black font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-500 transition-all text-sm shadow-xl"
                                >
                                    <span>Consult Subsea Team</span>
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
                    <h3 className="text-lg font-bold text-white mb-6">Related Offshore &amp; Engineering Services</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "EPCI Project Execution", path: "/services/epci" },
                            { name: "Pipeline Engineering", path: "/services/pipeline-engineering" },
                            { name: "Asset Integrity", path: "/services/asset-integrity" },
                            { name: "Oil & Gas Fabrication", path: "/services/fabrication" }
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
                title="Subsea Engineering FAQs"
                subtitle="Technical Subsea Inquiries"
                faqs={faqs}
            />

            <CTABanner />
        </div>
    );
};

export default SubseaService;

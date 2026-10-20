import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Activity, GitBranch, Gauge, ShieldAlert } from 'lucide-react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import CTABanner from '../../components/CTABanner';

const faqs = [
    {
        question: "What scope of pipeline engineering does Mantle-Gold provide in Nigeria?",
        answer: "Mantle-Gold provides comprehensive pipeline engineering Nigeria services across onshore rights-of-way (ROW), swamp terrain, and offshore environments. Our scope includes hydraulic simulation, route optimization, trenching, horizontal directional drilling (HDD) river crossings, line pipe welding, NDT, hydrotesting, and cathodic protection system commissioning."
    },
    {
        question: "How do you ensure pipeline integrity across swamp and creek crossings?",
        answer: "We deploy concrete weight coating, geotextile mattresses, swamp barge lay equipment, and specialized horizontal directional drilling (HDD) to cross environmentally sensitive watercourses without disturbing fragile ecosystems."
    },
    {
        question: "What welding and testing standards do you follow for pipelines?",
        answer: "All pipeline welding and testing strictly complies with API 1104, ASME B31.4 (liquid transportation), ASME B31.8 (gas transmission), and Shell DEP specifications, verified through 100% radiographic, phased-array ultrasonic testing (PAUT), and hydrotesting."
    },
    {
        question: "Can Mantle-Gold perform hot tapping and pipeline tie-ins?",
        answer: "Yes. We engineer and execute high-pressure hot tapping, stopple plugging, and tie-in spools on active pipelines, enabling brownfield modifications and expansions without halting commercial production."
    },
    {
        question: "What cathodic protection (CP) systems do you design and install?",
        answer: "We design and install both sacrificial galvanic anode cathodic protection systems for offshore pipelines and impressed current cathodic protection (ICCP) systems for long-distance onshore trunklines, preventing external electrochemical corrosion."
    }
];

const PipelineService = () => {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Pipeline Engineering and Installation Services",
        "serviceType": "Pipeline & Flowline Engineering & Construction",
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
        "description": "Pipeline and flowline engineering, installation and construction support for onshore and offshore projects in Nigeria. Request a proposal.",
        "url": "https://mantle-gold.com/services/pipeline-engineering"
    };

    return (
        <div className="bg-black text-white">
            <SEO
                title="Pipeline Engineering in Nigeria | Mantle-Gold"
                description="Pipeline and flowline engineering, installation and construction support for onshore and offshore projects in Nigeria. Request a proposal."
                canonicalPath="/services/pipeline-engineering"
                schema={serviceSchema}
            />

            <PageHero
                badge="Onshore & Offshore Infrastructure"
                title="Pipeline Engineering and Installation in Nigeria"
                subtitle="End-to-end pipeline design, swamp and offshore lay, HDD water crossings, hydrotesting, and cathodic protection ensuring dependable hydrocarbons transport."
                image="/images/pipeline-subsea.jpg"
            />

            <Breadcrumbs items={[
                { label: 'Services', path: '/services' },
                { label: 'Pipeline Engineering', path: '/services/pipeline-engineering' }
            ]} />

            {/* Core Overview */}
            <section className="py-12 sm:py-16 md:py-20 bg-darker" aria-label="Pipeline Engineering Overview">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                                Robust Hydrocarbon Transport
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                Specialized Pipeline Engineering Nigeria for Critical Energy Conduits
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                Pipelines represent the lifeblood of Nigeria's oil and gas infrastructure. As a seasoned specialist in <strong>pipeline engineering Nigeria</strong>, Mantle-Gold engineers, procures, constructs, and commissions onshore gathering networks, swamp transit trunklines, and offshore flowline systems that withstand high pressures, corrosive fluids, and challenging operating terrains.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                From right-of-way (ROW) survey and environmental impact mitigation in the Niger Delta to deepwater pipeline end manifold (PLEM) hookups, our multidisciplinary team manages every technical interface. We apply cutting-edge hydraulic simulation, flow assurance modeling, and stress analysis under ASME B31.4, ASME B31.8, and API 1104 standards.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                With over 532,480 cumulative project man-hours executed with an unblemished Zero LTI record since 2014, Mantle-Gold delivers pipeline capital projects on schedule, within budget, and with complete technical compliance.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {[
                                    "Route Selection & GIS Bathymetry Mapping",
                                    "Hydraulic Surge & Flow Assurance Modeling",
                                    "Horizontal Directional Drilling (HDD)",
                                    "Swamp & Creek Pipeway Construction",
                                    "100% PAUT / NDT Inspection Protocols",
                                    "Nitrogen Purging & Caliper Pigging"
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
                                    src="/images/fabrication-welding.jpg"
                                    alt="Specialized high-pressure pipe welding for pipeline infrastructure in Nigeria"
                                    className="w-full h-80 sm:h-96 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-6 bg-gradient-to-t from-black via-black/90 to-black/60">
                                    <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                                        Engineering Rigor
                                    </div>
                                    <div className="text-white text-lg font-bold font-serif mb-2">
                                        Certified Pressure Boundary Integrity
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Adhering to ASME B31.4, B31.8, and Shell DEP specifications. Qualified welders and CSWIP inspectors executing continuous quality assurance on every welded joint.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work Breakdown */}
            <section className="py-12 sm:py-16 bg-black" aria-label="Pipeline Scope of Work">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                            Scope of Services
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            End-to-End Pipeline Infrastructure Execution
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Mantle-Gold provides comprehensive technical capability across the pipeline asset lifecycle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                            <Activity className="text-gold mb-4" size={30} />
                            <h3 className="text-lg font-bold text-white mb-2">Detailed Engineering &amp; FEED</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Thermal expansion stress analysis, wall thickness calculation (API 5L Grade B to X70), slug flow prediction, and stability design under ocean wave and soil liquefaction conditions.
                            </p>
                        </div>
                        <div className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                            <GitBranch className="text-gold mb-4" size={30} />
                            <h3 className="text-lg font-bold text-white mb-2">Construction &amp; Crossings</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Trenching, stringing, automatic and semi-automatic field welding, HDD for river crossings, swamp laybarge operations, and tie-ins to manifolds and production manifolds.
                            </p>
                        </div>
                        <div className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                            <Gauge className="text-gold mb-4" size={30} />
                            <h3 className="text-lg font-bold text-white mb-2">Testing, CP &amp; Handover</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Hydrostatic proof testing to 1.25x design pressure, intelligent pigging, drying to dew points of -40°C, and Impressed Current Cathodic Protection (ICCP) commissioning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Feature */}
            <section className="py-12 sm:py-16 bg-darker" aria-label="Pipeline Project Record">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="bg-slate border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12">
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8">
                                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
                                    Offshore Flowline Experience
                                </span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                                    Flexible Flowline &amp; Riser Relocation — Okwori Asset
                                </h3>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                                    Mantle-Gold’s executive leadership directed the dynamic pipeline engineering and offshore relocation of flexible flowlines and risers in Addax Petroleum's Okwori offshore field.
                                </p>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                                    The project successfully resolved severe seabed scour and fatigue issues on existing flexible risers, reconnecting deepwater production lines with zero disruption to field hydrocarbons delivery.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                                    <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                                        <div className="text-gold font-bold">Client</div>
                                        <div className="text-gray-300">Addax Petroleum</div>
                                    </div>
                                    <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                                        <div className="text-gold font-bold">Engineering</div>
                                        <div className="text-gray-300">Flexible Flowlines / Risers</div>
                                    </div>
                                    <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                                        <div className="text-gold font-bold">Safety</div>
                                        <div className="text-gray-300">100% Incident-Free</div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 text-center lg:text-right">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-gold text-black font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-500 transition-all text-sm shadow-xl"
                                >
                                    <span>Request Pipeline Proposal</span>
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
                    <h3 className="text-lg font-bold text-white mb-6">Related Energy Engineering Capabilities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "EPCI Execution", path: "/services/epci" },
                            { name: "Subsea Engineering", path: "/services/subsea-engineering" },
                            { name: "Asset Integrity", path: "/services/asset-integrity" },
                            { name: "Heavy Fabrication", path: "/services/fabrication" }
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
                title="Pipeline Engineering FAQs"
                subtitle="Technical Pipeline Questions"
                faqs={faqs}
            />

            <CTABanner />
        </div>
    );
};

export default PipelineService;

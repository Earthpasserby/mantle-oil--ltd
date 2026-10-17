import { useState } from 'react';
import { ArrowRight, Shield, Award, Activity, Sparkles, CheckCircle2, ClipboardCheck, ShieldCheck, Waves, Anchor, Wrench, PackageCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Stats from '../components/Stats';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import HeroVideoBackground from '../components/HeroVideoBackground';
import FAQAccordion from '../components/FAQAccordion';

const clients = [
    { name: "Shell Nigeria", logo: "/logos/shel.png" },
    { name: "ExxonMobil", logo: "/logos/exx.png" },
    { name: "NNPC", logo: "/logos/nn.png" },
    { name: "Addax Petroleum", logo: "/logos/add.png" },
    { name: "WAEP", logo: "/logos/waep.png" },
    { name: "DWC Engineering", logo: "/logos/dwc.png" }
];

const missionTabs = [
    {
        id: "subsea",
        title: "Subsea Installation",
        image: "/images/subsea-vessel.jpg",
        caption: "Deepwater Flowline & Umbilical Deployment",
        tag: "Okwori Field Project"
    },
    {
        id: "topsides",
        title: "Offshore Topsides",
        image: "/images/platform-topsides.jpg",
        caption: "Multi-Tier Production Facilities",
        tag: "Active Asset Management"
    },
    {
        id: "drilling",
        title: "Deepwater Rigs",
        image: "/images/drilling-rig.jpg",
        caption: "High-Capacity Semi-Submersible Exploration",
        tag: "Safety-First Drilling"
    },
    {
        id: "inspection",
        title: "Engineering Team",
        image: "/images/engineers-team.jpg",
        caption: "Site Engineers Reviewing Field Specifications",
        tag: "Shell TA Standards"
    }
];

const homeFaqs = [
    {
        question: "What core services does Mantle-Gold Ltd provide in Nigeria?",
        answer: "Mantle-Gold Ltd delivers end-to-end EPCI project execution, subsea engineering, offshore and onshore pipeline installation, asset integrity management, structural fabrication, and specialized energy procurement for Nigeria's oil and gas sector."
    },
    {
        question: "Where is Mantle-Gold Ltd located and what regions do you serve?",
        answer: "Mantle-Gold Ltd is headquartered at 31 Discovery Gardens Estate, Lekki, Lagos, Nigeria. We execute projects across the Niger Delta, offshore Gulf of Guinea, Port Harcourt, Warri, and major deepwater basins."
    },
    {
        question: "What technical qualifications and safety standards does Mantle-Gold Ltd maintain?",
        answer: "Our leadership includes a Shell-Certified Technical Authority in Subsea Systems. We operate under rigorous ISO 9001 quality and ISO 45001 occupational safety guidelines, with a 98% safety rating and zero Lost Time Injuries (LTI) across 532,480+ cumulative project man-hours."
    },
    {
        question: "How does Mantle-Gold Ltd comply with Nigerian Content (NCDMB) requirements?",
        answer: "Mantle-Gold Ltd is 100% committed to Nigerian Content development under the NOGICD Act. We prioritize local engineering talent, domestic fabrication facilities in Lagos and the Niger Delta, and local vendor ecosystems."
    },
    {
        question: "What are some of Mantle-Gold Ltd's landmark projects in Nigeria?",
        answer: "Notable project milestones include the Okwori Field umbilical and flexible flowline relocation for ADDAX Petroleum, as well as deepwater subsea FEED, technical authority oversight, and ITT engineering support on major SNEPCo deepwater assets."
    }
];

const servicesList = [
    {
        slug: "/services/epci",
        title: "EPCI Project Execution",
        icon: ClipboardCheck,
        desc: "Turnkey engineering, procurement, fabrication, and offshore commissioning for complex upstream and midstream energy infrastructure.",
        image: "/images/epci-overview.jpg"
    },
    {
        slug: "/services/subsea-engineering",
        title: "Subsea Engineering Services",
        icon: Anchor,
        desc: "Deepwater SURF design, flowline tie-ins, subsea manifold installation, and umbilical lay operations under Shell-Certified TA governance.",
        image: "/images/subsea-vessel.jpg"
    },
    {
        slug: "/services/pipeline-engineering",
        title: "Pipeline Engineering & Installation",
        icon: Waves,
        desc: "Onshore, swamp, and offshore pipeline design, trenching, horizontal directional drilling, hydrostatic testing, and pre-commissioning.",
        image: "/images/pipeline-subsea.jpg"
    },
    {
        slug: "/services/asset-integrity",
        title: "Asset Integrity Management",
        icon: ShieldCheck,
        desc: "Risk-based inspection, non-destructive testing, corrosion monitoring, and structural lifecycle extension for aging offshore production platforms.",
        image: "/images/asset-integrity.jpg"
    },
    {
        slug: "/services/fabrication",
        title: "Oil & Gas Structural Fabrication",
        icon: Wrench,
        desc: "Certified heavy structural steel fabrication, spool piping, subsea manifolds, and skid assemblies manufactured in Lagos to international codes.",
        image: "/images/fabrication-yard.jpg"
    },
    {
        slug: "/services/procurement",
        title: "Procurement & Supply Chain",
        icon: PackageCheck,
        desc: "Global supply chain management, API-grade casing and tubular goods, subsea valves, flowline components, and expedite logistics to site.",
        image: "/images/warehouse-valves.jpg"
    }
];

const Home = () => {
    const [activeMissionTab, setActiveMissionTab] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans bg-black text-white"
        >
            <SEO
                title="Mantle-Gold Ltd | EPCI & Oil and Gas Services in Nigeria"
                description="Mantle-Gold Ltd is a Lagos-based EPCI contractor: subsea engineering, pipeline installation and asset integrity for Nigeria's oil and gas sector."
                canonical="https://mantle-gold.com/"
                type="website"
            />

            {/* Hero Section with Interactive Video Background */}
            <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-24 sm:pb-28 md:py-32" aria-label="Hero">
                {/* Background Video Player with Auto Switcher and Controls */}
                <HeroVideoBackground />

                <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center mt-6 md:mt-12 mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-gold/30 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-gold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[10px] sm:text-xs font-bold mb-4 sm:mb-6 shadow-xl"
                    >
                        <Sparkles size={13} className="text-gold" />
                        <span>MANTLE-GOLD LTD &bull; NIGERIAN EPCI EXCELLENCE</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-8 leading-[1.18] max-w-5xl mx-auto pb-1"
                    >
                        Mantle-Gold Ltd: EPCI and Engineering Solutions for Nigeria's Oil and Gas Industry
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-gray-200 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-10 font-light leading-relaxed drop-shadow-md px-2"
                    >
                        Mantle-Gold Ltd delivers premier turnkey EPCI, subsea installation, pipeline engineering, and asset integrity management for offshore and onshore energy operators across Nigeria and the Gulf of Guinea.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto"
                    >
                        <Link
                            to="/services"
                            className="w-full sm:w-auto bg-gold text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold hover:bg-yellow-400 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(232,141,20,0.4)] text-sm sm:text-base"
                        >
                            Explore Our Services <ArrowRight size={18} />
                        </Link>
                        <Link
                            to="/about"
                            className="w-full sm:w-auto bg-black/60 hover:bg-white/10 text-white border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all backdrop-blur-md flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                            <span>About Mantle-Gold Ltd</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 hidden lg:block z-20 pointer-events-none"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm"
                    >
                        <div className="w-1 h-2 bg-gold rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats */}
            <Stats />

            {/* Mission & Purpose Section with Interactive Media Switcher */}
            <section className="py-12 sm:py-16 md:py-24 bg-darker relative overflow-hidden" aria-label="Our Purpose">
                <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
                    {/* Left text */}
                    <div className="lg:col-span-6">
                        <span className="text-gold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs font-bold mb-2 sm:mb-4 block">Our Purpose</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mb-3 sm:mb-6 leading-tight break-words">
                            Proven EPCI Engineering <br className="hidden sm:inline" />
                            <span className="text-gold">Delivered in Nigeria</span>
                        </h2>
                        <p className="text-gray-300 mb-3 sm:mb-5 leading-relaxed text-xs sm:text-base md:text-lg">
                            Mantle-Gold Ltd is the trusted engineering contractor of choice for International Oil Companies (IOCs) and Nigerian independents developing critical oil, natural gas, and offshore energy infrastructure.
                        </p>
                        <p className="text-gray-300 mb-5 sm:mb-7 leading-relaxed text-xs sm:text-base md:text-lg">
                            With over a decade of operational excellence, Shell-certified technical governance, and 532,480 cumulative safe man-hours, Mantle-Gold Ltd combines world-class engineering standards with 100% Nigerian Content compliance.
                        </p>

                        {/* Interactive Highlights List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-8">
                            {[
                                "Shell Certified Technical Authority",
                                "Okwori Field Umbilicals & Flowlines",
                                "Zero LTI Record Over 10+ Years",
                                "100% Nigerian Content Commitment"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2.5 sm:gap-3 bg-slate/60 border border-white/5 p-2 sm:p-3 rounded-xl min-w-0">
                                    <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-200 font-medium truncate">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className="text-gold font-bold hover:text-yellow-400 inline-flex items-center gap-2 group text-xs sm:text-base">
                            Read Our Complete Story &amp; Leadership
                            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Interactive Media Card Deck */}
                    <div className="lg:col-span-6 relative">
                        <div className="absolute -inset-4 bg-gold/15 rounded-3xl filter blur-3xl opacity-40 pointer-events-none" />

                        <div className="relative bg-slate rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 border border-white/10 shadow-2xl overflow-hidden">
                            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {missionTabs.map((tab, idx) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveMissionTab(idx)}
                                        className={`px-2 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold text-center transition-all sm:flex-1 ${
                                            activeMissionTab === idx
                                                ? 'bg-gold text-black shadow-md'
                                                : 'bg-black/50 text-gray-400 hover:text-white'
                                        }`}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </div>

                            {/* Active Image Box */}
                            <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={missionTabs[activeMissionTab].image}
                                        src={missionTabs[activeMissionTab].image}
                                        alt={missionTabs[activeMissionTab].caption}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </AnimatePresence>

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-end justify-between gap-2">
                                    <div>
                                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gold font-bold bg-black/70 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-gold/30 inline-block mb-1">
                                            {missionTabs[activeMissionTab].tag}
                                        </span>
                                        <div className="text-white font-bold text-xs sm:text-base drop-shadow-md">
                                            {missionTabs[activeMissionTab].caption}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Badges */}
                            <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
                                <div className="text-center p-1.5 sm:p-2 rounded-xl bg-black/40 border border-white/5">
                                    <div className="text-base sm:text-xl md:text-2xl font-bold font-serif text-gold">98%</div>
                                    <div className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider leading-tight mt-0.5">Safety Rating</div>
                                </div>
                                <div className="text-center p-1.5 sm:p-2 rounded-xl bg-black/40 border border-white/5">
                                    <div className="text-base sm:text-xl md:text-2xl font-bold font-serif text-gold">532K+</div>
                                    <div className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider leading-tight mt-0.5">Safe Hours</div>
                                </div>
                                <div className="text-center p-1.5 sm:p-2 rounded-xl bg-black/40 border border-white/5">
                                    <div className="text-base sm:text-xl md:text-2xl font-bold font-serif text-gold">10+</div>
                                    <div className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider leading-tight mt-0.5">Years Active</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complete Services Grid - Linking to Every Service Page */}
            <section className="py-12 sm:py-16 md:py-24 bg-black relative overflow-hidden" aria-label="Our Services">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8 sm:mb-14">
                        <span className="text-gold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs font-bold">Specialized Solutions</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mt-2 sm:mt-3 text-white">Our Oil &amp; Gas Services</h2>
                        <p className="text-gray-400 mt-2 sm:mt-4 max-w-2xl mx-auto text-xs sm:text-base md:text-lg px-2 leading-relaxed">
                            Mantle-Gold Ltd provides six specialized service divisions engineered to deliver lifecycle integrity and operational reliability for energy assets in Nigeria.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesList.map((service, i) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={i}
                                    className="group relative rounded-2xl overflow-hidden bg-slate border border-white/10 hover:border-gold/40 transition-all duration-300 shadow-xl flex flex-col"
                                >
                                    <div className="h-48 overflow-hidden relative flex-shrink-0">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/40 to-transparent" />
                                        <div className="absolute bottom-3 left-4 text-gold p-2.5 bg-black/80 rounded-xl border border-gold/30">
                                            <IconComponent size={22} />
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-gold transition-colors">{service.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{service.desc}</p>
                                        <Link to={service.slug} className="inline-flex items-center text-gold text-sm font-semibold hover:underline mt-auto">
                                            Explore Service <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-12 sm:py-16 md:py-24 bg-darker relative" aria-label="Featured Projects">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">Track Record</span>
                        <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2 text-white">Featured Project Milestones</h2>
                        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
                            Field-proven engineering performance across demanding onshore and offshore operational environments in Nigeria.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-slate p-8 rounded-2xl border border-white/10 hover:border-gold/30 transition-all">
                            <span className="text-gold text-xs font-bold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full border border-gold/20 inline-block mb-4">
                                ADDAX Petroleum &bull; Okwori Field
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3">Umbilicals &amp; Flexible Flowlines Relocation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Executed offshore subsea engineering and technical coordination for the safe disconnect, recovery, re-routing, and re-installation of dynamic subsea umbilicals and flexible production flowlines, maintaining uninterrupted asset integrity.
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-white/5 pt-4">
                                <span><strong>Role:</strong> Subsea Engineering Support</span>
                                <span>&bull;</span>
                                <span><strong>Outcome:</strong> Zero Incidents</span>
                            </div>
                        </div>

                        <div className="bg-slate p-8 rounded-2xl border border-white/10 hover:border-gold/30 transition-all">
                            <span className="text-gold text-xs font-bold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full border border-gold/20 inline-block mb-4">
                                SNEPCo &bull; Deepwater Gulf of Guinea
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3">Subsea FEED &amp; Technical Authority Oversight</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Provided Front-End Engineering Design (FEED) verification, Invitation to Tender (ITT) package development, and Shell-Certified Technical Authority (TA) review for major subsea production systems and deepwater flowline networks.
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-white/5 pt-4">
                                <span><strong>Role:</strong> Technical Authority / FEED</span>
                                <span>&bull;</span>
                                <span><strong>Standard:</strong> Shell DEP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Marquee */}
            <section className="py-10 sm:py-16 md:py-20 bg-black overflow-hidden" aria-label="Our Clients">
                <div className="container mx-auto px-4 sm:px-6 mb-6 sm:mb-10 text-center">
                    <span className="text-gold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs font-bold">Trusted By Industry Leaders</span>
                    <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2 sm:mt-3">Our <span className="text-gold">Clients</span></h2>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
                    <div className="marquee-track">
                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 mx-2 sm:mx-3 md:mx-5 bg-white p-2.5 sm:p-4 rounded-xl flex items-center justify-center h-20 sm:h-24 md:h-28 w-32 sm:w-40 md:w-48 group cursor-pointer hover:shadow-lg hover:shadow-gold/10 transition-all duration-300"
                            >
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        className="max-h-12 sm:max-h-16 md:max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <span className={`text-black font-bold text-xs sm:text-base text-center ${client.logo ? 'hidden' : 'block'}`}>
                                    {client.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section with FAQPage Schema */}
            <section className="py-14 sm:py-20 bg-darker">
                <div className="container mx-auto px-4 sm:px-6">
                    <FAQAccordion
                        title="Frequently Asked Questions About Mantle-Gold Ltd"
                        subtitle="Key insights into our EPCI engineering capabilities, certifications, and project track record in Nigeria."
                        faqs={homeFaqs}
                    />
                </div>
            </section>

            {/* CTA Banner */}
            <CTABanner />
        </motion.div>
    );
};

export default Home;

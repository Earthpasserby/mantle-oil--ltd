import { useState } from 'react';
import { ArrowRight, Shield, Award, Activity, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import HeroVideoBackground from '../components/HeroVideoBackground';
import InteractiveShowcase from '../components/InteractiveShowcase';

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
        image: "/images/1fac060faf011a6062d9dc6eaa9e38ba.jpg",
        caption: "Deepwater Flowline & Umbilical Deployment",
        tag: "Okwori Field Project"
    },
    {
        id: "topsides",
        title: "Offshore Topsides",
        image: "/images/db2994ca1dc3750a2dc8f7e677d6b524.jpg",
        caption: "Multi-Tier Production Facilities",
        tag: "Active Asset Management"
    },
    {
        id: "drilling",
        title: "Deepwater Rigs",
        image: "/images/be1d6b1d93df908ca7c8e66795cb404c.jpg",
        caption: "High-Capacity Semi-Submersible Exploration",
        tag: "Safety-First Drilling"
    },
    {
        id: "inspection",
        title: "Engineering Team",
        image: "/images/ea14084971cb421ebffd7a7d8be6a3ab.jpg",
        caption: "Site Engineers Reviewing Field Specifications",
        tag: "Shell TA Standards"
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
                title="Home"
                description="Mantle-Gold Limited — leading EPCI and Engineering Solutions provider in the Oil, Gas, and Energy sector. 10+ years of excellence in subsea engineering, pipeline construction, and asset integrity across Nigeria and West Africa."
                keywords="Mantle-Gold, oil and gas Nigeria, EPCI, subsea engineering, pipeline engineering, asset integrity, Lagos, offshore platform video"
            />

            {/* Hero Section with Interactive Video Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32" aria-label="Hero">
                {/* Background Video Player with Auto Switcher and Controls */}
                <HeroVideoBackground />

                <div className="container mx-auto px-6 relative z-20 text-center mt-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-gold/30 px-5 py-2 rounded-full text-gold uppercase tracking-[0.25em] text-xs font-bold mb-6 shadow-xl"
                    >
                        <Sparkles size={14} className="text-gold" />
                        <span>MANTLE-GOLD LTD &bull; EPCI EXCELLENCE</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-[1.15] max-w-5xl mx-auto drop-shadow-2xl"
                    >
                        OIL, GAS AND ENERGY PRODUCTS <br />
                        <span className="text-gradient">&amp; ENGINEERING SOLUTIONS</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md"
                    >
                        Leading the global transition with innovative extraction technologies, certified subsea engineering, and a proven track record delivering major projects for Shell, Addax, and ExxonMobil.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            to="/services"
                            className="w-full sm:w-auto bg-gold text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(232,141,20,0.4)]"
                        >
                            Explore Our Operations <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/about"
                            className="w-full sm:w-auto bg-black/50 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md flex items-center justify-center gap-2"
                        >
                            <span>Our Operations Gallery</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:block z-20 pointer-events-none"
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
            <section className="py-24 bg-darker relative" aria-label="Our Mission">
                <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
                    {/* Left text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-6"
                    >
                        <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Our Purpose</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Redefining Energy <br />
                            <span className="text-gold">Production &amp; Engineering</span>
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                            MANTLE-GOLD LTD is the community and IOC partner of choice as we develop oil, natural gas, and energy infrastructure in a sustainable, technologically advanced manner.
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg">
                            With over a decade of operational excellence and 532,480 cumulative man-hours delivered safely, we bring proven expertise from FEED to deepwater umbilical relocation and high-pressure subsea flowlines.
                        </p>

                        {/* Interactive Highlights List */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {[
                                "Shell Certified Technical Authority",
                                "Okwori Field Umbilicals & Flowlines",
                                "Zero LTI Record Over 10+ Years",
                                "100% Nigerian Content Commitment"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-slate/60 border border-white/5 p-3 rounded-xl">
                                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                                    <span className="text-sm text-gray-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className="text-gold font-bold hover:text-yellow-400 inline-flex items-center gap-2 group text-base">
                            Read Our Complete Story &amp; Leadership
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Right Interactive Media Card Deck */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-6 relative"
                    >
                        {/* Glow halo */}
                        <div className="absolute -inset-4 bg-gold/15 rounded-3xl filter blur-3xl opacity-60" />

                        <div className="relative bg-slate rounded-3xl p-4 md:p-6 border border-white/10 shadow-2xl overflow-hidden">
                            {/* Card Header Selector Tabs */}
                            <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2 scrollbar-none">
                                {missionTabs.map((tab, idx) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveMissionTab(idx)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
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
                            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={missionTabs[activeMissionTab].image}
                                        src={missionTabs[activeMissionTab].image}
                                        alt={missionTabs[activeMissionTab].caption}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </AnimatePresence>

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                                {/* Caption & Tag */}
                                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between gap-2">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-gold font-bold bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-gold/30 inline-block mb-1">
                                            {missionTabs[activeMissionTab].tag}
                                        </span>
                                        <div className="text-white font-bold text-sm md:text-base drop-shadow-md">
                                            {missionTabs[activeMissionTab].caption}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Badges */}
                            <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10">
                                <div className="text-center p-2 rounded-xl bg-black/40 border border-white/5">
                                    <div className="text-xl md:text-2xl font-bold font-serif text-gold">98%</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Safety Rating</div>
                                </div>
                                <div className="text-center p-2 rounded-xl bg-black/40 border border-white/5">
                                    <div className="text-xl md:text-2xl font-bold font-serif text-gold">532K+</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Safe Hours</div>
                                </div>
                                <div className="text-center p-2 rounded-xl bg-black/40 border border-white/5">
                                    <div className="text-xl md:text-2xl font-bold font-serif text-gold">10+</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Years Active</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Operations Showcase (Real Video and Photo Highlights) */}
            <InteractiveShowcase />

            {/* Services Preview Section */}
            <section className="py-24 bg-black relative" aria-label="Our Services">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">What We Do</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 text-white">Comprehensive Solutions</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base md:text-lg">
                            From front-end engineering design to offshore installation and asset integrity, we deliver end-to-end excellence across the energy value chain.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: "ClipboardCheck",
                                title: "EPCI Project Execution",
                                desc: "End-to-end Engineering, Procurement, Construction, and Installation services delivered with precision and safety.",
                                image: "/images/bc73ef5b884268ec94e67cf95b6dba66.jpg"
                            },
                            {
                                icon: "ShieldCheck",
                                title: "Asset Support & Integrity",
                                desc: "Comprehensive maintenance and integrity management solutions to extend the lifecycle of your offshore and onshore assets.",
                                image: "/images/10162884367c50ef998c1cb6abdd2126.jpg"
                            },
                            {
                                icon: "Waves",
                                title: "Pipeline Engineering",
                                desc: "Specialized pipeline design, installation, and field services ensuring flow assurance and infrastructure reliability.",
                                image: "/images/ecbda25a526406e791a0a92fd2f3cf40.jpg"
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -8 }}
                                className="group relative rounded-2xl overflow-hidden bg-slate border border-white/10 hover:border-gold/40 transition-all duration-300 shadow-xl"
                            >
                                <div className="h-44 overflow-hidden relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/40 to-transparent" />
                                </div>
                                <div className="p-6 -mt-8 relative z-10">
                                    <ServiceCard icon={service.icon} title={service.title} desc={service.desc} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/services" className="text-gold font-bold hover:text-yellow-400 inline-flex items-center gap-2 group text-base">
                            <span>View All 6 Core Services</span>
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Client Marquee */}
            <section className="py-20 bg-darker overflow-hidden" aria-label="Our Clients">
                <div className="container mx-auto px-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">Trusted By Industry Leaders</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">Our <span className="text-gold">Clients</span></h2>
                    </motion.div>
                </div>

                {/* Infinite marquee */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-darker to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-darker to-transparent z-10 pointer-events-none" />
                    <div className="marquee-track">
                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 mx-6 bg-white p-6 rounded-xl flex items-center justify-center h-32 w-52 group cursor-pointer hover:shadow-lg hover:shadow-gold/10 transition-all duration-300"
                            >
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <span className={`text-black font-bold text-lg text-center ${client.logo ? 'hidden' : 'block'}`}>
                                    {client.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <CTABanner />
        </motion.div>
    );
};

export default Home;

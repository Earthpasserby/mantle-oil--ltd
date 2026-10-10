import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

const clients = [
    { name: "Shell Nigeria", logo: "/logos/shel.png" },
    { name: "ExxonMobil", logo: "/logos/exx.png" },
    { name: "NNPC", logo: "/logos/nn.png" },
    { name: "Addax Petroleum", logo: "/logos/add.png" },
    { name: "WAEP", logo: "/logos/waep.png" },
    { name: "DWC Engineering", logo: "/logos/dwc.png" }
];

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans"
        >
            <SEO
                title="Home"
                description="Mantle-Gold Limited — leading EPCI and Engineering Solutions provider in the Oil, Gas, and Energy sector. 10+ years of excellence in subsea engineering, pipeline construction, and asset integrity across Nigeria and West Africa."
                keywords="Mantle-Gold, oil and gas Nigeria, EPCI, subsea engineering, pipeline engineering, asset integrity, Lagos"
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32" aria-label="Hero">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/oil.jpg"
                        alt="Offshore oil rig operated by Mantle-Gold engineering team"
                        className="w-full h-full object-cover opacity-50 scale-105"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center mt-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-gold uppercase tracking-[0.25em] text-sm font-bold mb-6 block"
                    >
                        MANTLE-GOLD LTD
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight"
                    >
                        OIL GAS AND ENERGY PRODUCTS <br />
                        <span className="text-gradient">AND ENGINEERING SOLUTIONS</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        Leading the global transition with innovative extraction technologies, safety-first engineering, and a commitment to environmental stewardship.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex flex-col md:flex-row gap-4 justify-center"
                    >
                        <Link to="/services" className="bg-gold text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(232,141,20,0.3)]">
                            Explore Our Operations <ArrowRight size={20} />
                        </Link>
                        <Link to="/contact" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                            Investor Relations
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1 h-2 bg-gold rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats */}
            <Stats />

            {/* Mission Section */}
            <section className="py-24 bg-darker" aria-label="Our Mission">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Purpose</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Redefining Energy <br /><span className="text-gold">Production</span>
                        </h2>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            MANTLE-GOLD LTD strives to be the community partner of choice as we develop oil and natural gas in a sustainable, innovative way. We focus on low-risk development opportunities combined with rigorous regulatory standards.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            With over a decade of experience and 532,480 cumulative man-hours delivered safely, we bring proven expertise to every project.
                        </p>
                        <Link to="/about" className="text-gold font-semibold hover:underline inline-flex items-center gap-2 group">
                            Read Our Story
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative group cursor-pointer"
                    >
                        <div className="absolute -inset-4 bg-gold/20 rounded-2xl filter blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                        <img
                            src="/images/oil.jpg"
                            alt="Mantle-Gold oil production site"
                            className="relative rounded-2xl shadow-2xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                            loading="lazy"
                        />
                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -right-6 bg-gold text-black p-4 rounded-2xl shadow-xl">
                            <div className="text-2xl font-bold">98%</div>
                            <div className="text-xs font-medium">Safety Rating</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24 bg-black relative" aria-label="Our Services">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">What We Do</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">Comprehensive Solutions</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">From front-end engineering design to offshore installation, we deliver end-to-end excellence across the energy value chain.</p>
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
                            { icon: "ClipboardCheck", title: "EPCI Project Execution", desc: "End-to-end Engineering, Procurement, Construction, and Installation services delivered with precision and safety." },
                            { icon: "ShieldCheck", title: "Asset Support & Integrity", desc: "Comprehensive maintenance and integrity management solutions to extend the lifecycle of your offshore and onshore assets." },
                            { icon: "Waves", title: "Pipeline Engineering", desc: "Specialized pipeline design, installation, and field services ensuring flow assurance and infrastructure reliability." }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -8 }}
                            >
                                <ServiceCard {...service} />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/services" className="text-gold font-semibold hover:underline inline-flex items-center gap-2 group">
                            View All Services
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
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
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Trusted By Industry Leaders</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">Our <span className="text-gold">Clients</span></h2>
                    </motion.div>
                </div>

                {/* Infinite marquee */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-darker to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-darker to-transparent z-10" />
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

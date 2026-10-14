import { useState, useMemo } from 'react';
import { Target, Eye, Users, Award, Briefcase, CheckCircle, Shield, Leaf, HardHat, Calendar, Play, Search, Video, Image as ImageIcon, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import { allMedia, categories } from '../data/mediaData';
import MediaLightbox from '../components/MediaLightbox';

const clients = [
    { name: "Shell Nigeria", logo: "/logos/shel.png" },
    { name: "ExxonMobil", logo: "/logos/exx.png" },
    { name: "NNPC", logo: "/logos/nn.png" },
    { name: "Addax Petroleum", logo: "/logos/add.png" },
    { name: "WAEP", logo: "/logos/waep.png" },
    { name: "DWC Engineering", logo: "/logos/dwc.png" }
];

const milestones = [
    { year: "2014", title: "Company Founded", desc: "Registered with the Corporate Affairs Commission (CAC), Nigeria." },
    { year: "2015", title: "First Major Contract", desc: "Secured Front End Engineering Design (FEED) work for deepwater projects." },
    { year: "2017", title: "SNEPCo Partnership", desc: "Completed FEED and Invitation for Tender for Deepwater Projects in SNEPCo." },
    { year: "2019", title: "Addax Shallow-Water", desc: "Delivered shallow-water project execution for Addax Petroleum." },
    { year: "2021", title: "Okwori Field Project", desc: "Successfully relocated three umbilicals and flexible flowlines from donor to receiver wells in Okwori field for Addax." },
    { year: "2024", title: "10 Years of Excellence", desc: "Surpassed 532,480 cumulative man-hours with a 98% safety rating." }
];

const storyMedia = [
    {
        title: "Okwori Field Umbilicals & Flowlines",
        image: "/images/1fac060faf011a6062d9dc6eaa9e38ba.jpg",
        tag: "Addax Petroleum",
        desc: "Relocated three umbilicals and flexible flowlines from donor to receiver wells."
    },
    {
        title: "SNEPCo Deepwater Projects",
        image: "/images/db2994ca1dc3750a2dc8f7e677d6b524.jpg",
        tag: "FEED & Tender",
        desc: "Front End Engineering Design and Invitation for Tender for deepwater assets."
    },
    {
        title: "Marine Vessel & Rig Operations",
        image: "/images/be1d6b1d93df908ca7c8e66795cb404c.jpg",
        tag: "Offshore Execution",
        desc: "Precision station-keeping and subsea installation in West African waters."
    }
];

const About = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeStoryIdx, setActiveStoryIdx] = useState(0);
    const [lightboxMedia, setLightboxMedia] = useState(null);
    const [hoveredMediaId, setHoveredMediaId] = useState(null);
    const [visibleCount, setVisibleCount] = useState(24);

    // Filtered media list
    const filteredList = useMemo(() => {
        return allMedia.filter((item) => {
            const matchesCategory =
                selectedCategory === 'all'
                    ? true
                    : selectedCategory === 'videos'
                    ? item.type === 'video'
                    : item.category === selectedCategory;

            const matchesSearch =
                searchQuery.trim() === '' ||
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.categoryLabel?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.badge?.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const displayedMedia = filteredList.slice(0, visibleCount);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans bg-black min-h-screen text-white"
        >
            <SEO
                title="About Us & Operations"
                description="Learn about Mantle-Gold Limited — founded in 2014, a leading Nigerian provider of Subsea Engineering, EPCI project delivery, and energy solutions. Explore our comprehensive operations gallery."
                keywords="Mantle-Gold about, Nigerian oil gas company, EPCI Nigeria, subsea engineering history, Engr Ekere Afia, offshore photos, drilling videos"
            />

            {/* Page Hero with Background Media Banner */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/images/db2994ca1dc3750a2dc8f7e677d6b524.jpg"
                        className="w-full h-full object-cover opacity-25"
                    >
                        <source src="/images/video-offshore-twilight-topview.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 bg-black/60 border border-gold/30 px-4 py-1.5 rounded-full text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 shadow-lg"
                    >
                        <Sparkles size={13} /> MANTLE-GOLD LTD
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white"
                    >
                        About <span className="text-gold">MANTLE-GOLD LTD</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        A multi-disciplinary service provider in Engineering, Procurement, Installation, and Construction Services — proudly Nigerian, globally competent, and committed to zero-harm operations.
                    </motion.p>
                </div>
            </div>

            {/* Company Story with Interactive Visual Showcase */}
            <section className="py-20 bg-darker" aria-label="Company Story">
                <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Our Heritage</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            A Decade of Engineering <span className="text-gold">Excellence</span>
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                            Mantle-Gold Ltd was registered with the Corporate Affairs Commission in June 2014. Since inception, she has grown to be a premier provider of expertise in Subsea Engineering, Pipeline Field Services, and Turnkey EPCI in Nigeria.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                            She has completed Front End Engineering Design (FEED) and Invitation for Tender (IFT) for Deepwater Projects in SNEPCo and Shallow-water projects in ADDAX. Mantle-Gold Limited recently relocated three umbilicals and flexible flowlines from donor to receiver wells in Okwori field for ADDAX.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="bg-slate p-4 rounded-xl border border-white/10 flex items-center gap-3">
                                <Briefcase className="text-gold" size={24} />
                                <div>
                                    <div className="text-xl font-bold font-serif text-white">2014</div>
                                    <div className="text-xs text-gray-400">CAC Registered</div>
                                </div>
                            </div>
                            <div className="bg-slate p-4 rounded-xl border border-white/10 flex items-center gap-3">
                                <Award className="text-gold" size={24} />
                                <div>
                                    <div className="text-xl font-bold font-serif text-white">532K+</div>
                                    <div className="text-xs text-gray-400">Safe Man-Hours</div>
                                </div>
                            </div>
                            <div className="bg-slate p-4 rounded-xl border border-white/10 flex items-center gap-3">
                                <Shield className="text-gold" size={24} />
                                <div>
                                    <div className="text-xl font-bold font-serif text-white">98%</div>
                                    <div className="text-xs text-gray-400">Safety Rating</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interactive Story Showcase Carousel / Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-6"
                    >
                        <div className="bg-slate p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs text-gold font-bold uppercase tracking-wider">
                                    Featured Field Execution
                                </span>
                                <div className="flex gap-2">
                                    {storyMedia.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveStoryIdx(i)}
                                            className={`w-7 h-2 rounded-full transition-all ${
                                                activeStoryIdx === i ? 'bg-gold w-9' : 'bg-white/20'
                                            }`}
                                            aria-label={`Slide ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-white/10 group">
                                <img
                                    src={storyMedia[activeStoryIdx].image}
                                    alt={storyMedia[activeStoryIdx].title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="bg-gold text-black text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider mb-1 inline-block">
                                        {storyMedia[activeStoryIdx].tag}
                                    </span>
                                    <h4 className="text-lg font-bold text-white">
                                        {storyMedia[activeStoryIdx].title}
                                    </h4>
                                    <p className="text-gray-300 text-xs mt-1">
                                        {storyMedia[activeStoryIdx].desc}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                {storyMedia.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveStoryIdx(idx)}
                                        className={`p-2 rounded-xl text-left border transition-all ${
                                            activeStoryIdx === idx
                                                ? 'bg-gold/15 border-gold text-white'
                                                : 'bg-black/30 border-white/5 text-gray-400 hover:text-white'
                                        }`}
                                    >
                                        <div className="text-[11px] font-bold truncate">{item.tag}</div>
                                        <div className="text-[10px] text-gray-400 truncate">{item.title}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* MASTER INTERACTIVE OPERATIONS GALLERY (ALL PHOTOS AND VIDEOS) */}
            <section className="py-24 bg-black relative" aria-label="Operations Visual Archive">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold block mb-3">
                            Visual Operations Archive
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                            What We Do <span className="text-gold">In The Field</span>
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            A comprehensive visual record of our offshore drilling platforms, subsea installations, heavy fabrication yards, and technical teams at work.
                        </p>
                    </div>

                    {/* Filter and Search Bar */}
                    <div className="bg-slate p-4 rounded-2xl border border-white/10 mb-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Categories scrollable */}
                        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                            {categories.map((cat) => (
                                <button
                                    key={cat.key}
                                    onClick={() => setSelectedCategory(cat.key)}
                                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                                        selectedCategory === cat.key
                                            ? 'bg-gold text-black shadow-md'
                                            : 'bg-black/40 text-gray-300 hover:text-white border border-white/5'
                                    }`}
                                >
                                    {cat.key === 'videos' && <Video size={13} />}
                                    <span>{cat.label}</span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                        selectedCategory === cat.key ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-400'
                                    }`}>
                                        {cat.count}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full md:w-72 flex-shrink-0">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search operations, videos..."
                                className="w-full bg-black/60 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Media Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                        <AnimatePresence>
                            {displayedMedia.map((item, index) => {
                                const isHovered = hoveredMediaId === item.id;
                                return (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.35, delay: (index % 8) * 0.04 }}
                                        onMouseEnter={() => setHoveredMediaId(item.id)}
                                        onMouseLeave={() => setHoveredMediaId(null)}
                                        onClick={() => setLightboxMedia(item)}
                                        className="group relative rounded-2xl overflow-hidden bg-slate border border-white/10 hover:border-gold/50 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                                    >
                                        <div className="relative aspect-[16/11] w-full overflow-hidden bg-black flex-shrink-0">
                                            {item.type === 'video' ? (
                                                <>
                                                    <video
                                                        src={item.src}
                                                        poster={item.poster}
                                                        muted
                                                        loop
                                                        playsInline
                                                        ref={(el) => {
                                                            if (el) {
                                                                if (isHovered) el.play().catch(() => {});
                                                                else {
                                                                    el.pause();
                                                                    el.currentTime = 0;
                                                                }
                                                            }
                                                        }}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md text-gold text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-gold/30">
                                                        <Video size={11} /> Video
                                                    </div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-11 h-11 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                            <Play size={18} className="ml-0.5" />
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <img
                                                        src={item.src}
                                                        alt={item.title}
                                                        loading="lazy"
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-white/20">
                                                        <ImageIcon size={11} /> Photo
                                                    </div>
                                                </>
                                            )}

                                            <div className="absolute bottom-2.5 right-2.5 bg-black/85 backdrop-blur-md text-gray-300 text-[10px] font-medium px-2 py-0.5 rounded border border-white/10">
                                                {item.badge}
                                            </div>
                                        </div>

                                        <div className="p-4 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate to-black/80">
                                            <div>
                                                <h3 className="text-white font-bold text-sm line-clamp-1 group-hover:text-gold transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-400 text-xs mt-1 line-clamp-2 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                                                <span className="text-gold font-medium">{item.categoryLabel}</span>
                                                <span className="text-gray-500 group-hover:text-white flex items-center gap-0.5">
                                                    View Details <ChevronRight size={12} />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>

                    {/* Load More Button */}
                    {visibleCount < filteredList.length && (
                        <div className="mt-12 text-center">
                            <button
                                onClick={() => setVisibleCount((prev) => prev + 12)}
                                className="bg-slate hover:bg-gold hover:text-black text-white px-8 py-3.5 rounded-full font-bold transition-all border border-white/10 hover:border-gold shadow-lg"
                            >
                                Load More Assets ({filteredList.length - visibleCount} remaining)
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-darker" aria-label="Milestones">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Our Journey</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">Key <span className="text-gold">Milestones</span></h2>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 md:-translate-x-px" />

                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1.5 mt-2 shadow-[0_0_10px_rgba(232,141,20,0.5)] z-10" />

                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <div className="bg-slate p-6 rounded-xl border border-white/5 hover:border-gold/20 transition-colors">
                                        <div className="flex items-center gap-3 mb-2 justify-start">
                                            <Calendar size={16} className="text-gold" />
                                            <span className="text-gold font-bold text-lg">{milestone.year}</span>
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">{milestone.title}</h3>
                                        <p className="text-gray-400 text-sm">{milestone.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-black" aria-label="Vision and Mission">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="bg-slate p-10 rounded-2xl border-l-4 border-gold transition-all duration-300 cursor-pointer shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-black rounded-lg text-gold"><Eye size={32} /></div>
                                <h2 className="text-3xl font-serif font-bold">Our Vision</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                To be the company of choice in the delivery of quality EPCI projects and providing logistics for brown and green fields development for both Oil and Gas and New Energies.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            whileHover={{ y: -8 }}
                            className="bg-slate p-10 rounded-2xl border-l-4 border-gold transition-all duration-300 cursor-pointer shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-black rounded-lg text-gold"><Target size={32} /></div>
                                <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                To deliver EPCI projects responsibly within statutory and regulatory requirements and to cost, quality and schedule while protecting the environment and our most valued asset – people.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* HSE Culture with Real Field Imagery */}
            <section className="py-20 bg-darker" aria-label="HSE Culture">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Safety First</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">HSE &amp; <span className="text-gold">Sustainability</span></h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Shield size={36} />,
                                title: "Zero-Harm Philosophy",
                                desc: "Every project begins and ends with safety. Our 98% safety rating reflects a deep-rooted culture of hazard prevention, rigorous risk assessment, and continuous training.",
                                image: "/images/bd31e76948d13c5281c60d56d5a55a22.jpg"
                            },
                            {
                                icon: <Leaf size={36} />,
                                title: "Environmental Stewardship",
                                desc: "We integrate environmental responsibility into every phase of operations — from design to decommissioning — minimising ecological impact across all project sites.",
                                image: "/images/c27c450405ca4d6a31bc72a731768b21.jpg"
                            },
                            {
                                icon: <HardHat size={36} />,
                                title: "Local Content Excellence",
                                desc: "As a proudly Nigerian company, we champion local content development — training, employing, and empowering Nigerian engineers and technicians to deliver world-class EPCI projects.",
                                image: "/images/ea14084971cb421ebffd7a7d8be6a3ab.jpg"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -8 }}
                                className="group rounded-2xl overflow-hidden bg-slate border border-white/10 hover:border-gold/40 transition-all duration-300 shadow-xl"
                            >
                                <div className="h-44 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/40 to-transparent" />
                                    <div className="absolute bottom-3 left-4 text-gold p-2.5 bg-black/80 rounded-xl border border-gold/30">
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 bg-black" aria-label="Leadership">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-slate rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
                    >
                        <div className="grid lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-8">
                                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Leadership</span>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-2">Engr. Ekere Afia</h2>
                                <p className="text-gold text-lg font-medium mb-6">CEO / Managing Director</p>

                                <div className="prose prose-lg prose-invert max-w-none text-gray-300 space-y-4 text-base md:text-lg leading-relaxed">
                                    <p>
                                        The Chief Executive Officer and Managing Director of Mantle-Gold Limited is Engr. Ekere Afia. He has over thirty-one (31) years of experience in the Oil and Gas Industry. Most of the experience were in ExxonMobil, SHELL and ADDAX in Nigeria and United States of America.
                                    </p>
                                    <p>
                                        He has Civil Engineering and Project Management degrees and several Subsea Engineering Certifications in Nigeria and the United States of America. He is a SHELL certified Technical Authority (TA) in Subsea Systems. He specialises in the design, manufacture, installation and commissioning of Subsea Umbilicals and Distribution Equipment.
                                    </p>
                                    <p>
                                        He recently engineered and installed Flexible Pipelines and Subsea Umbilicals for Addax Petroleum in its Okwori field in Nigeria, and has also installed Subsea Umbilicals and Subsea Distribution Equipment for SHELL's Perdido Stage 2 Deepwater project in the Gulf of Mexico.
                                    </p>
                                </div>
                            </div>

                            {/* Leadership Video Preview Card */}
                            <div className="lg:col-span-4">
                                <div className="relative rounded-2xl overflow-hidden bg-black border border-gold/30 shadow-2xl group cursor-pointer" onClick={() => setLightboxMedia({
                                    id: "lead-vid",
                                    type: "video",
                                    title: "Engr. Ekere Afia — CEO / MD Mantle-Gold Ltd",
                                    src: "/images/video-engineer-portrait.mp4",
                                    badge: "CEO & Shell TA",
                                    description: "Over 31 years leading subsea engineering, deepwater umbilical projects, and Shell technical authority certifications."
                                })}>
                                    <video
                                        src="/images/video-engineer-portrait.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                            <Play size={22} className="ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="text-xs uppercase tracking-widest text-gold font-bold">Executive Video</div>
                                        <div className="text-sm font-bold text-white">Click to Play Overview</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Key credentials */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
                            {[
                                { stat: "31+", label: "Years Experience" },
                                { stat: "SHELL", label: "Certified TA" },
                                { stat: "3", label: "Major IOC Experience" },
                                { stat: "Global", label: "Nigeria & USA" }
                            ].map((cred, i) => (
                                <div key={i} className="text-center p-4 bg-black/40 rounded-xl border border-white/5">
                                    <div className="text-gold text-2xl md:text-3xl font-bold font-serif">{cred.stat}</div>
                                    <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">{cred.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Clients */}
            <section className="py-20 bg-darker" aria-label="Our Clients">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold">Our <span className="text-gold">Clients</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white p-8 rounded-xl flex items-center justify-center h-40 shadow-lg group cursor-pointer"
                            >
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        className="max-h-24 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <span className={`text-black font-bold text-xl text-center ${client.logo ? 'hidden' : 'block'}`}>
                                    {client.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />

            {/* Fullscreen Lightbox Modal */}
            <MediaLightbox
                item={lightboxMedia}
                mediaList={filteredList}
                isOpen={!!lightboxMedia}
                onClose={() => setLightboxMedia(null)}
                onNavigate={(item) => setLightboxMedia(item)}
            />
        </motion.div>
    );
};

export default About;

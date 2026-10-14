import { useState } from 'react';
import { Target, Eye, Award, Briefcase, Shield, Leaf, HardHat, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
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
    const [activeStoryIdx, setActiveStoryIdx] = useState(0);

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
            <div className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
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

                <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 bg-black/60 border border-gold/30 px-3.5 py-1.5 rounded-full text-gold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-bold mb-4 shadow-lg"
                    >
                        <Sparkles size={13} /> MANTLE-GOLD LTD
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 sm:mb-6 text-white"
                    >
                        About <span className="text-gold">MANTLE-GOLD LTD</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2"
                    >
                        A multi-disciplinary service provider in Engineering, Procurement, Installation, and Construction Services — proudly Nigerian, globally competent, and committed to zero-harm operations.
                    </motion.p>
                </div>
            </div>

            {/* Company Story with Interactive Visual Showcase */}
            <section className="py-14 sm:py-20 bg-darker" aria-label="Company Story">
                <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 sm:mb-3 block">Our Heritage</span>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
                            A Decade of Engineering <span className="text-gold">Excellence</span>
                        </h2>
                        <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                            Mantle-Gold Ltd was registered with the Corporate Affairs Commission in June 2014. Since inception, she has grown to be a premier provider of expertise in Subsea Engineering, Pipeline Field Services, and Turnkey EPCI in Nigeria.
                        </p>
                        <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                            She has completed Front End Engineering Design (FEED) and Invitation for Tender (IFT) for Deepwater Projects in SNEPCo and Shallow-water projects in ADDAX. Mantle-Gold Limited recently relocated three umbilicals and flexible flowlines from donor to receiver wells in Okwori field for ADDAX.
                        </p>

                        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
                            <div className="bg-slate p-3 sm:p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                                <Briefcase className="text-gold flex-shrink-0" size={20} />
                                <div>
                                    <div className="text-lg sm:text-xl font-bold font-serif text-white">2014</div>
                                    <div className="text-[10px] sm:text-xs text-gray-400">CAC Registered</div>
                                </div>
                            </div>
                            <div className="bg-slate p-3 sm:p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                                <Award className="text-gold flex-shrink-0" size={20} />
                                <div>
                                    <div className="text-lg sm:text-xl font-bold font-serif text-white">532K+</div>
                                    <div className="text-[10px] sm:text-xs text-gray-400">Safe Hours</div>
                                </div>
                            </div>
                            <div className="bg-slate p-3 sm:p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                                <Shield className="text-gold flex-shrink-0" size={20} />
                                <div>
                                    <div className="text-lg sm:text-xl font-bold font-serif text-white">98%</div>
                                    <div className="text-[10px] sm:text-xs text-gray-400">Safety Rating</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interactive Story Showcase Carousel / Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-6"
                    >
                        <div className="bg-slate p-4 sm:p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[11px] sm:text-xs text-gold font-bold uppercase tracking-wider">
                                    Featured Field Execution
                                </span>
                                <div className="flex gap-2">
                                    {storyMedia.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveStoryIdx(i)}
                                            className={`h-2 rounded-full transition-all ${
                                                activeStoryIdx === i ? 'bg-gold w-8 sm:w-9' : 'bg-white/20 w-5 sm:w-7'
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
                                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                                    <span className="bg-gold text-black text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-1 inline-block">
                                        {storyMedia[activeStoryIdx].tag}
                                    </span>
                                    <h4 className="text-base sm:text-lg font-bold text-white">
                                        {storyMedia[activeStoryIdx].title}
                                    </h4>
                                    <p className="text-gray-300 text-xs mt-0.5 sm:mt-1 line-clamp-2">
                                        {storyMedia[activeStoryIdx].desc}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                                {storyMedia.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveStoryIdx(idx)}
                                        className={`p-1.5 sm:p-2 rounded-xl text-left border transition-all ${
                                            activeStoryIdx === idx
                                                ? 'bg-gold/15 border-gold text-white'
                                                : 'bg-black/30 border-white/5 text-gray-400 hover:text-white'
                                        }`}
                                    >
                                        <div className="text-[10px] sm:text-[11px] font-bold truncate">{item.tag}</div>
                                        <div className="text-[9px] sm:text-[10px] text-gray-400 truncate">{item.title}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>



            {/* Timeline */}
            <section className="py-14 sm:py-20 bg-darker overflow-hidden" aria-label="Milestones">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">Our Journey</span>
                        <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2 sm:mt-3">Key <span className="text-gold">Milestones</span></h2>
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
                                className={`relative flex items-start mb-8 sm:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1.5 mt-2 shadow-[0_0_10px_rgba(232,141,20,0.5)] z-10" />

                                <div className={`ml-8 sm:ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 lg:pr-16 md:text-right' : 'md:pl-12 lg:pl-16'}`}>
                                    <div className="bg-slate p-4 sm:p-6 rounded-xl border border-white/5 hover:border-gold/20 transition-colors">
                                        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2 justify-start">
                                            <Calendar size={15} className="text-gold flex-shrink-0" />
                                            <span className="text-gold font-bold text-base sm:text-lg">{milestone.year}</span>
                                        </div>
                                        <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">{milestone.title}</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{milestone.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-14 sm:py-20 bg-black overflow-hidden" aria-label="Vision and Mission">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="bg-slate p-6 sm:p-8 md:p-10 rounded-2xl border-l-4 border-gold transition-all duration-300 cursor-pointer shadow-xl"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="p-2.5 sm:p-3 bg-black rounded-lg text-gold flex-shrink-0"><Eye size={28} /></div>
                                <h2 className="text-2xl sm:text-3xl font-serif font-bold">Our Vision</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                                To be the company of choice in the delivery of quality EPCI projects and providing logistics for brown and green fields development for both Oil and Gas and New Energies.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            whileHover={{ y: -6 }}
                            className="bg-slate p-6 sm:p-8 md:p-10 rounded-2xl border-l-4 border-gold transition-all duration-300 cursor-pointer shadow-xl"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="p-2.5 sm:p-3 bg-black rounded-lg text-gold flex-shrink-0"><Target size={28} /></div>
                                <h2 className="text-2xl sm:text-3xl font-serif font-bold">Our Mission</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                                To deliver EPCI projects responsibly within statutory and regulatory requirements and to cost, quality and schedule while protecting the environment and our most valued asset – people.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* HSE Culture with Real Field Imagery */}
            <section className="py-14 sm:py-20 bg-darker overflow-hidden" aria-label="HSE Culture">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">Safety First</span>
                        <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2 sm:mt-3">HSE &amp; <span className="text-gold">Sustainability</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: <Shield size={32} />,
                                title: "Zero-Harm Philosophy",
                                desc: "Every project begins and ends with safety. Our 98% safety rating reflects a deep-rooted culture of hazard prevention, rigorous risk assessment, and continuous training.",
                                image: "/images/bd31e76948d13c5281c60d56d5a55a22.jpg"
                            },
                            {
                                icon: <Leaf size={32} />,
                                title: "Environmental Stewardship",
                                desc: "We integrate environmental responsibility into every phase of operations — from design to decommissioning — minimising ecological impact across all project sites.",
                                image: "/images/c27c450405ca4d6a31bc72a731768b21.jpg"
                            },
                            {
                                icon: <HardHat size={32} />,
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
                                whileHover={{ y: -6 }}
                                className="group rounded-2xl overflow-hidden bg-slate border border-white/10 hover:border-gold/40 transition-all duration-300 shadow-xl flex flex-col"
                            >
                                <div className="h-40 sm:h-44 overflow-hidden relative flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/40 to-transparent" />
                                    <div className="absolute bottom-3 left-4 text-gold p-2 bg-black/80 rounded-xl border border-gold/30">
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="p-5 sm:p-6 flex flex-col flex-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-14 sm:py-20 bg-black overflow-hidden" aria-label="Leadership">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-slate rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-white/10 shadow-2xl"
                    >
                        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 items-center">
                            <div className="lg:col-span-8">
                                <span className="text-gold uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold mb-2 sm:mb-3 block">Leadership</span>
                                <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold mb-1 sm:mb-2">Engr. Ekere Afia</h2>
                                <p className="text-gold text-base sm:text-lg font-medium mb-4 sm:mb-6">CEO / Managing Director</p>

                                <div className="prose prose-sm sm:prose-base prose-invert max-w-none text-gray-300 space-y-3 sm:space-y-4 leading-relaxed">
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
                                <div className="relative rounded-2xl overflow-hidden bg-black border border-gold/30 shadow-2xl group">
                                    <video
                                        src="/images/video-engineer-portrait.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-64 sm:h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                                        <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gold font-bold">Executive Video</div>
                                        <div className="text-xs sm:text-sm font-bold text-white">Engr. Ekere Afia — CEO / MD</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Key credentials */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
                            {[
                                { stat: "31+", label: "Years Experience" },
                                { stat: "SHELL", label: "Certified TA" },
                                { stat: "3", label: "Major IOC Experience" },
                                { stat: "Global", label: "Nigeria & USA" }
                            ].map((cred, i) => (
                                <div key={i} className="text-center p-2.5 sm:p-4 bg-black/40 rounded-xl border border-white/5">
                                    <div className="text-gold text-xl sm:text-2xl md:text-3xl font-bold font-serif">{cred.stat}</div>
                                    <div className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider mt-1">{cred.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Clients */}
            <section className="py-14 sm:py-20 bg-darker overflow-hidden" aria-label="Our Clients">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-4xl font-serif font-bold">Our <span className="text-gold">Clients</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-12">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white p-3 sm:p-6 md:p-8 rounded-xl flex items-center justify-center h-24 sm:h-32 md:h-40 shadow-lg group cursor-pointer"
                            >
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        className="max-h-14 sm:max-h-20 md:max-h-24 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <span className={`text-black font-bold text-sm sm:text-lg md:text-xl text-center ${client.logo ? 'hidden' : 'block'}`}>
                                    {client.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />


        </motion.div>
    );
};

export default About;

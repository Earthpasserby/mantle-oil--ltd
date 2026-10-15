import { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Play, Video, Sparkles } from 'lucide-react';
import * as Icons from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { serviceMediaMap } from '../data/mediaData';

const servicesData = [
    {
        icon: "ShieldCheck",
        title: "Asset Support & Integrity",
        desc: "Comprehensive maintenance and integrity management solutions to extend the lifecycle of your offshore and onshore assets.",
        details: [
            "Asset Life Extension Strategies",
            "Risk Based Inspection (RBI)",
            "Corrosion Management & Control",
            "Structural Integrity Management",
            "Facility Underwater Inspections and Audits",
            "Intelligent Pipeline Inspections",
            "Bolt Tensioning and Torquing",
            "Blasting, Painting and Specialist Coating"
        ]
    },
    {
        icon: "ClipboardCheck",
        title: "EPCI Project Execution",
        desc: "End-to-end Engineering, Procurement, Construction, and Installation services delivered with precision and safety.",
        details: [
            "Feasibility Studies",
            "Subsea Field Layouts",
            "Project Management",
            "Contract Management",
            "Strategic Planning and Partnering",
            "Basis of Design Preparation",
            "CAD Construction Drawings",
            "Cost Estimation & Scheduling",
            "Life Cycle Cost Estimation",
            "Construction Monitoring",
            "Management of Change Control"
        ]
    },
    {
        icon: "Hammer",
        title: "Fabrication & Construction Services",
        desc: "State-of-the-art fabrication capabilities for complex structures, pipelines, and subsea components.",
        details: [
            "Facility Access Modules",
            "Modular Facility Maintenance",
            "Offshore Crane Maintenance",
            "Material Load Out",
            "Mooring System Services",
            "Construction Support Services",
            "Heavy Lifting & Transport",
            "Onshore & Offshore Fabrication"
        ]
    },
    {
        icon: "Settings",
        title: "Engineering and Procurements",
        desc: "Technical design excellence combined with global supply chain management to deliver critical project components.",
        details: [
            "Front End Engineering Design (FEED)",
            "Detailed Engineering & Design",
            "Risk Management",
            "Equipment Specification & Selection",
            "Optimization and Upgrade",
            "As-Built and Field Verification",
            "Facility and Site Survey",
            "Material Procurement & Expediting",
            "Subsea Equipment Supply"
        ]
    },
    {
        icon: "Factory",
        title: "Facility Operations Support Services",
        desc: "Optimizing facility performance through expert operations management, staffing, and technical support.",
        details: [
            "Technical Assistant Staff",
            "Project Assistant Staff",
            "Specialist & Expatriate Staff",
            "HSE & Medical Personnel",
            "Turnaround Maintenance (Inspections, Testing)",
            "Debottlenecking & Facility Upgrade",
            "Strategic Project Planning",
            "Sustainability Consulting",
            "Project Due Diligence"
        ]
    },
    {
        icon: "Waves",
        title: "Pipeline Engineering and Field Services",
        desc: "Specialized pipeline design, installation, and field services ensuring flow assurance and infrastructure reliability.",
        details: [
            "Pipeline FEED & Project Management",
            "Main Line Valves & Tie-ins",
            "Metering Stations & Tank Farms",
            "Pipeline Integrity Management",
            "Pipeline Systems Risk Analysis",
            "Pigging & Corrosion Control",
            "Intelligent Pipeline Inspection (ILI)",
            "Offshore & Onshore Pipeline Laying"
        ]
    }
];

const processSteps = [
    { step: "01", title: "Engineering", desc: "FEED, detailed design, risk analysis", icon: "Compass" },
    { step: "02", title: "Procurement", desc: "Equipment sourcing, supply chain", icon: "Package" },
    { step: "03", title: "Construction", desc: "Fabrication, assembly, quality control", icon: "Hammer" },
    { step: "04", title: "Installation", desc: "Offshore/onshore deployment, commissioning", icon: "Anchor" }
];


const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans bg-black min-h-screen text-white relative"
        >
            <SEO
                title="Our Services"
                description="Explore Mantle-Gold Limited's comprehensive services: EPCI Project Execution, Pipeline Engineering, Asset Integrity, Fabrication, Procurements, and Facility Operations Support."
                keywords="EPCI services Nigeria, pipeline engineering, asset integrity, oil gas fabrication, subsea engineering services, Mantle-Gold services"
            />

            {/* Services Page Hero with Background Video */}
            <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/images/bc73ef5b884268ec94e67cf95b6dba66.jpg"
                        className="w-full h-full object-cover opacity-25"
                    >
                        <source src="/images/video-offshore-sunset-aerial.mp4" type="video/mp4" />
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
                        <Sparkles size={13} /> CAPABILITIES &amp; DELIVERABLES
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 sm:mb-6 text-white"
                    >
                        Our <span className="text-gold">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2"
                    >
                        Delivering excellence across the entire energy value chain — from front-end engineering design to offshore installation, marine operations, and asset integrity management.
                    </motion.p>
                </div>
            </section>

            {/* EPCI Process Flow */}
            <section className="py-14 sm:py-20 bg-darker" aria-label="EPCI Process">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">How We Deliver</span>
                        <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2 sm:mt-3">The EPCI <span className="text-gold">Process</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative items-stretch">
                        {processSteps.map((item, index) => {
                            const IconComponent = Icons[item.icon] || Icons.Activity;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="relative h-full flex flex-col"
                                >
                                    <div className="bg-slate p-5 sm:p-7 md:p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all text-center group cursor-pointer shadow-lg hover:-translate-y-1 h-full flex flex-col items-center justify-between">
                                        <div className="w-full flex flex-col items-center">
                                            <div className="text-gold text-4xl sm:text-5xl font-bold font-serif opacity-20 mb-1 sm:mb-2">{item.step}</div>
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gold/20 transition-colors shrink-0">
                                                <IconComponent size={22} className="text-gold" />
                                            </div>
                                            <h3 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{item.title}</h3>
                                        </div>
                                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-auto pt-2">{item.desc}</p>
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                                            <ArrowRight size={20} className="text-gold/40" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Service Cards Grid with Project Photos */}
            <section className="py-14 sm:py-20 bg-black" aria-label="Service Details">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">Explore In Detail</span>
                        <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2 sm:mt-3">Our Core Capabilities</h2>
                        <p className="text-gray-400 mt-2 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">Click any service card to view detailed specifications, scope of work, and key deliverables.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {servicesData.map((service, index) => {
                            const media = serviceMediaMap[service.title] || {};
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    onClick={() => setSelectedService(service)}
                                    className="group rounded-2xl overflow-hidden bg-slate border border-white/10 hover:border-gold/40 transition-all duration-300 shadow-xl cursor-pointer flex flex-col"
                                >
                                    {/* Image Banner */}
                                    <div className="h-44 overflow-hidden relative bg-black">
                                        <img
                                            src={media.image}
                                            alt={service.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/40 to-transparent" />
                                        <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-gold text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-gold/30">
                                            {media.badge}
                                        </span>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <ServiceCard
                                            icon={service.icon}
                                            title={service.title}
                                            desc={service.desc}
                                            onClick={() => setSelectedService(service)}
                                        />
                                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gold font-semibold">
                                            <span>Explore Deliverables</span>
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>



            {/* Service Detail Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-label={selectedService.title}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-slate border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 max-w-3xl w-full relative z-10 shadow-2xl overflow-y-auto max-h-[92vh] mx-3 sm:mx-auto"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 z-20"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>

                            {/* Service Media Video/Image Header in Modal */}
                            {serviceMediaMap[selectedService.title] && (
                                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 bg-black border border-white/10 relative">
                                    {serviceMediaMap[selectedService.title].video ? (
                                        <video
                                            src={serviceMediaMap[selectedService.title].video}
                                            controls
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src={serviceMediaMap[selectedService.title].image}
                                            alt={selectedService.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-gold">
                                    {(() => {
                                        const IconComponent = Icons[selectedService.icon];
                                        return IconComponent ? (
                                            <div className="p-3 bg-black rounded-xl border border-white/10">
                                                <IconComponent size={28} />
                                            </div>
                                        ) : null;
                                    })()}
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-widest text-gold font-bold">Capabilities Scope</span>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">{selectedService.title}</h2>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6 text-base leading-relaxed border-b border-white/10 pb-4">
                                {selectedService.desc}
                            </p>

                            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider text-gold">Key Capabilities &amp; Deliverables</h3>
                            <div className="grid md:grid-cols-2 gap-3">
                                {selectedService.details.map((detail, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.03 }}
                                        className="flex items-start gap-3 p-2.5 rounded-lg bg-black/30 border border-white/5"
                                    >
                                        <CheckCircle className="text-gold w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-200 text-xs md:text-sm">{detail}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <CTABanner />
        </motion.div>
    );
};

export default Services;

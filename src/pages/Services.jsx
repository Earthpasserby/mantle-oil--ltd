import { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

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

            <PageHero
                title="Our"
                highlight="Services"
                subtitle="Delivering excellence across the entire energy value chain — from front-end engineering design to offshore installation and asset integrity management."
            />

            {/* EPCI Process Flow */}
            <section className="py-20 bg-darker" aria-label="EPCI Process">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">How We Deliver</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">The EPCI <span className="text-gold">Process</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                        {processSteps.map((item, index) => {
                            const IconComponent = Icons[item.icon] || Icons.Activity;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="relative"
                                >
                                    <div className="bg-slate p-8 rounded-2xl border border-white/5 hover:border-gold/20 transition-all text-center group cursor-pointer">
                                        <div className="text-gold text-5xl font-bold font-serif opacity-20 mb-2">{item.step}</div>
                                        <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                                            <IconComponent size={24} className="text-gold" />
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                    {/* Connector arrow (hidden on mobile) */}
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                                            <ArrowRight size={20} className="text-gold/40" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Service Cards */}
            <section className="py-20 bg-black" aria-label="Service Details">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Explore In Detail</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">Our Capabilities</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Click any service card to explore our detailed capabilities and deliverables.</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <ServiceCard
                                    {...service}
                                    onClick={() => setSelectedService(service)}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
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
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-slate border border-white/10 rounded-2xl p-8 max-w-2xl w-full relative z-10 shadow-2xl overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-gold">
                                    {(() => {
                                        const IconComponent = Icons[selectedService.icon];
                                        return IconComponent ? (
                                            <div className="p-3 bg-black rounded-xl border border-white/10">
                                                <IconComponent size={32} />
                                            </div>
                                        ) : null;
                                    })()}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold">{selectedService.title}</h2>
                            </div>

                            <p className="text-gray-300 mb-8 text-lg leading-relaxed border-b border-white/10 pb-6">
                                {selectedService.desc}
                            </p>

                            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Key Capabilities</h3>
                            <div className="grid md:grid-cols-2 gap-3">
                                {selectedService.details.map((detail, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.04 }}
                                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                                    >
                                        <CheckCircle className="text-gold w-5 h-5 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 text-sm">{detail}</span>
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

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ShieldCheck,
    ClipboardCheck,
    Wrench,
    PackageCheck,
    Anchor,
    Waves,
    ArrowRight,
    CheckCircle,
    Compass,
    Sparkles,
    CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import CTABanner from '../components/CTABanner';

const servicesList = [
    {
        title: "EPCI Project Execution",
        slug: "/services/epci",
        icon: ClipboardCheck,
        badge: "Turnkey Contracting",
        image: "/images/epci-overview.jpg",
        desc: "End-to-end Engineering, Procurement, Construction, and Installation services delivered for offshore platforms, subsea field developments, and production infrastructure across Nigeria.",
        highlights: [
            "Front-End Engineering Design (FEED) & Detailed Design",
            "Offshore Umbilicals & Flowlines Relocation",
            "Full Lifecycle Contract & Project Management",
            "Commissioning, Decommissioning & Field Support"
        ]
    },
    {
        title: "Subsea Engineering Services",
        slug: "/services/subsea-engineering",
        icon: Anchor,
        badge: "Deepwater SURF",
        image: "/images/subsea-vessel.jpg",
        desc: "Specialized deepwater subsea engineering under the direct governance of a Shell-Certified Technical Authority (TA). From SURF installation to umbilical recovery in the Gulf of Guinea.",
        highlights: [
            "Shell TA Governance & Verification",
            "Dynamic Umbilical & Flowline Installation",
            "Subsea Manifold & Tie-in Systems",
            "ROV Support & Subsea Metrology"
        ]
    },
    {
        title: "Pipeline Engineering & Installation",
        slug: "/services/pipeline-engineering",
        icon: Waves,
        badge: "Onshore & Offshore",
        image: "/images/pipeline-subsea.jpg",
        desc: "Specialized pipeline engineering, hydrotesting, horizontal directional drilling, and trenching across swamp, onshore, and deepwater rights-of-way throughout the Niger Delta.",
        highlights: [
            "Intelligent Pigging & ILI Inspections",
            "Flowline Tie-ins & Hot Tapping Support",
            "Pipeline Stress & Flow Assurance Modeling",
            "Pre-commissioning & Nitrogen Purging"
        ]
    },
    {
        title: "Asset Support & Integrity Management",
        slug: "/services/asset-integrity",
        icon: ShieldCheck,
        badge: "Lifecycle Extension",
        image: "/images/asset-integrity.jpg",
        desc: "Risk-Based Inspection (RBI), non-destructive testing (NDT), and structural integrity management programs to extend the operational life of offshore and onshore production assets.",
        highlights: [
            "Risk-Based Inspection (RBI) Programs",
            "Corrosion Monitoring & Cathodic Protection",
            "Underwater Facility Inspections & Audits",
            "Structural Integrity Lifecycle Extension"
        ]
    },
    {
        title: "Oil & Gas Structural Fabrication",
        slug: "/services/fabrication",
        icon: Wrench,
        badge: "Lagos Facility",
        image: "/images/fabrication-yard.jpg",
        desc: "Certified heavy structural fabrication, spool piping, manifold skids, and topside access modules engineered and manufactured in Lagos under strict ASME and AWS D1.1 codes.",
        highlights: [
            "Structural Topsides & Access Modules",
            "High-Pressure Pipe Spool Pre-fabrication",
            "Loadout, Rigging & Heavy Transport",
            "Blasting, Coating & Non-Destructive Testing"
        ]
    },
    {
        title: "Procurement & Supply Chain Services",
        slug: "/services/procurement",
        icon: PackageCheck,
        badge: "Global Logistics",
        image: "/images/warehouse-valves.jpg",
        desc: "Global procurement and expediting of critical oilfield equipment, API-grade line pipes, subsea valves, flow controls, and hazardous-area electrical systems directly to Nigerian sites.",
        highlights: [
            "API-5L Line Pipes & OCTG Casing",
            "Subsea & Topside Emergency Valves",
            "Mill Test Certifications & Vendor Audits",
            "Nigerian Customs Clearance & Direct Site Logistics"
        ]
    }
];

const processSteps = [
    { step: "01", title: "Engineering", desc: "FEED, detailed engineering, and risk modeling under Shell TA standards.", icon: Compass },
    { step: "02", title: "Procurement", desc: "Strategic sourcing of API-certified equipment and materials globally.", icon: PackageCheck },
    { step: "03", title: "Fabrication", desc: "Structural manufacturing, welding, and NDT in certified yards in Lagos.", icon: Wrench },
    { step: "04", title: "Installation", desc: "Offshore/onshore deployment, tie-ins, testing, and full commissioning.", icon: Anchor }
];

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans bg-black min-h-screen text-white relative"
        >
            <SEO
                title="Oil & Gas Services in Nigeria | Mantle-Gold"
                description="EPCI project execution, subsea and pipeline engineering, asset integrity, fabrication and procurement for Nigeria's oil and gas sector."
                canonical="https://mantle-gold.com/services"
                type="website"
            />

            {/* Breadcrumbs Navigation */}
            <div className="pt-24 sm:pt-28 pb-4 bg-black">
                <div className="container mx-auto px-4 sm:px-6">
                    <Breadcrumbs items={[{ name: 'Oil & Gas Services in Nigeria', url: '/services' }]} />
                </div>
            </div>

            {/* Services Page Hero */}
            <section className="relative pt-8 sm:pt-12 pb-14 sm:pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/images/epci-overview.jpg"
                        className="w-full h-full object-cover opacity-25"
                    >
                        <source src="/images/vid-sunset.mp4" type="video/mp4" />
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
                        <Sparkles size={13} /> NIGERIAN ENERGY CONTRACTOR
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 sm:mb-6 text-white max-w-5xl mx-auto"
                    >
                        Oil and Gas Engineering and EPCI Services in Nigeria
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2"
                    >
                        Mantle-Gold delivers premier oil and gas services in Nigeria, spanning turnkey EPCI project execution, certified subsea engineering, offshore pipeline installation, asset integrity management, structural fabrication, and energy procurement.
                    </motion.p>
                </div>
            </section>

            {/* EPCI Process Flow */}
            <section className="py-12 sm:py-16 bg-darker" aria-label="EPCI Process Flow">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-14">
                        <span className="text-gold uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">Execution Framework</span>
                        <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2 text-white">How Mantle-Gold Delivers EPCI Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative items-stretch">
                        {processSteps.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="relative h-full flex flex-col">
                                    <div className="bg-slate p-6 rounded-2xl border border-white/5 hover:border-gold/30 transition-all text-center group shadow-lg flex flex-col items-center justify-between h-full">
                                        <div className="w-full flex flex-col items-center">
                                            <div className="text-gold text-4xl font-bold font-serif opacity-20 mb-1">{item.step}</div>
                                            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors shrink-0">
                                                <IconComponent size={22} className="text-gold" />
                                            </div>
                                            <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                                        </div>
                                        <p className="text-gray-400 text-xs leading-relaxed mt-auto pt-2">{item.desc}</p>
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                                            <ArrowRight size={20} className="text-gold/40" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* All 6 Core Service Divisions Grid */}
            <section className="py-14 sm:py-20 bg-black" aria-label="All Service Divisions">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="text-gold uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">Core Capabilities</span>
                        <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2 text-white">Our 6 Specialized Service Divisions</h2>
                        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
                            Select any service division below to review detailed technical scopes of work, industry codes, proven project milestones, and request a technical proposal.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="group rounded-2xl overflow-hidden bg-slate border border-white/10 hover:border-gold/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="h-48 overflow-hidden relative bg-black">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/40 to-transparent" />
                                            <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-gold text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-gold/30">
                                                {service.badge}
                                            </span>
                                            <div className="absolute bottom-3 left-4 text-gold p-2.5 bg-black/80 rounded-xl border border-gold/30">
                                                <IconComponent size={22} />
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                                {service.desc}
                                            </p>

                                            <div className="space-y-2 mb-6">
                                                {service.highlights.map((highlight, hIdx) => (
                                                    <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-300">
                                                        <CheckCircle2 size={14} className="text-gold flex-shrink-0 mt-0.5" />
                                                        <span>{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 pt-0 border-t border-white/5 mt-auto">
                                        <Link
                                            to={service.slug}
                                            className="w-full inline-flex items-center justify-center gap-2 bg-gold/10 hover:bg-gold text-gold hover:text-black border border-gold/30 px-4 py-2.5 rounded-xl font-bold text-sm transition-all"
                                        >
                                            <span>View Full Technical Scope</span>
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTABanner />
        </motion.div>
    );
};

export default Services;

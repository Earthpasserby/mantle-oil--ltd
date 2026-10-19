import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, ShoppingCart, Globe2, Truck, FileCheck2 } from 'lucide-react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import CTABanner from '../../components/CTABanner';

const faqs = [
    {
        question: "What procurement services does Mantle-Gold Ltd provide for Nigeria's energy sector?",
        answer: "Mantle-Gold Ltd provides strategic oil and gas procurement Nigeria services, including global sourcing of API 5L line pipes, subsea production valves, dynamic umbilicals, high-yield structural steel tubulars, heat exchangers, instrumentation packages, and heavy rotating machinery."
    },
    {
        question: "How do you ensure equipment quality and authenticity from OEMs?",
        answer: "Every procurement order is tied to accredited Original Equipment Manufacturers (OEMs). We conduct factory source audits, witness Factory Acceptance Testing (FAT), verify EN 10204 Type 3.1 and 3.2 material test certificates (MTC), and execute third-party pre-shipment inspections."
    },
    {
        question: "How does Mantle-Gold Ltd manage customs clearance and Nigerian logistics?",
        answer: "Operating from Lekki, Lagos, our supply chain team navigates Nigerian port clearances, Form M processing, SONCAP certification, and end-to-end heavy freight transport directly to onshore supply bases, fabrication yards, or offshore load-out terminals."
    },
    {
        question: "How does your procurement process support the NOGICD Act?",
        answer: "We maximize Nigerian local content by partnering with domestic stockists, utilizing local marine logistics providers, and ensuring in-country value addition across warehousing, testing, and expediting in full compliance with the NOGICD Act."
    },
    {
        question: "How can operators submit a procurement requisition or RFQ?",
        answer: "Operators can transmit their Bill of Materials (BOM), Material Requisitions (MR), or Request for Quotation (RFQ) directly to our procurement department at info@mantle-gold.com or telephone +234 803 236 8599."
    }
];

const ProcurementService = () => {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Oil and Gas Procurement Services",
        "serviceType": "Energy Sector Global Sourcing and Procurement",
        "provider": {
            "@type": "Organization",
            "name": "Mantle-Gold Ltd",
            "url": "https://mantle-gold.com",
            "logo": "https://mantle-gold.com/logo.png"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Nigeria"
        },
        "description": "Specialized procurement and global sourcing for Nigerian oil and gas operations. Heavy equipment, subsea components and line pipes delivered.",
        "url": "https://mantle-gold.com/services/procurement"
    };

    return (
        <div className="bg-black text-white">
            <SEO
                title="Oil & Gas Procurement Services Nigeria | Mantle-Gold Ltd"
                description="Specialized procurement and global sourcing for Nigerian oil and gas operations. Heavy equipment, subsea components and line pipes delivered."
                canonicalPath="/services/procurement"
                schema={serviceSchema}
            />

            <PageHero
                badge="Global Sourcing & Supply Chain"
                title="Procurement Services for Nigeria's Oil and Gas Industry"
                subtitle="Strategic global sourcing, certified OEM partnerships, expedited port clearance, and rigorous material verification delivering critical-path energy assets."
                image="/images/feed-procurement.jpg"
            />

            <Breadcrumbs items={[
                { label: 'Services', path: '/services' },
                { label: 'Procurement Services', path: '/services/procurement' }
            ]} />

            {/* Core Overview */}
            <section className="py-12 sm:py-16 md:py-20 bg-darker" aria-label="Procurement Overview">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                                Strategic Supply Chain
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                Reliable Oil and Gas Procurement Nigeria for Capital Energy Projects
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                Timely delivery of certified equipment and materials is vital to preventing project delays and budget overruns in offshore and onshore operations. Mantle-Gold Ltd delivers transparent, high-efficiency <strong>oil and gas procurement Nigeria</strong> services, connecting Nigerian operators with Tier-1 global Original Equipment Manufacturers (OEMs) and vetted domestic stockists.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                Our procurement engineering team evaluates technical datasheets, audits manufacturing facilities, and supervises Factory Acceptance Testing (FAT) to ensure absolute compliance with API, ASME, ASTM, and Shell DEP specifications.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                With more than a decade of operational excellence since June 2014, Mantle-Gold Ltd combines international supply chain relationships with Nigerian port clearance expertise, delivering complex materials directly to fabrication yards, platforms, and field terminals.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {[
                                    "API 5L Line Pipes & CRA Clad Tubulars",
                                    "High-Pressure Subsea & Topside Valves",
                                    "Subsea Umbilicals & Electrical Flying Leads",
                                    "Heavy Structural Steel Plates & Beams",
                                    "OEM Spare Parts & Rotating Machinery",
                                    "Strict NOGICD Act Nigerian Value Addition"
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
                                    src="/images/marine-logistics.jpg"
                                    alt="Supply vessel and marine logistics supporting procurement delivery in Nigerian waters"
                                    className="w-full h-80 sm:h-96 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-6 bg-gradient-to-t from-black via-black/90 to-black/60">
                                    <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                                        Transparent Sourcing
                                    </div>
                                    <div className="text-white text-lg font-bold font-serif mb-2">
                                        End-to-End Material Traceability
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        100% mill test certificates (MTC 3.1/3.2), positive material identification (PMI), and pre-shipment inspections eliminating supply chain counterfeit risk.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Procurement Categories */}
            <section className="py-12 sm:py-16 bg-black" aria-label="Procurement Categories">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                            Equipment Categories
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Major Material &amp; Equipment Lines Sourced
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Sourced directly from ISO-certified global manufacturers and compliant Nigerian distributors.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <ShoppingCart className="text-gold" size={28} />,
                                title: "Piping & Valves",
                                desc: "Carbon steel, duplex, and super duplex line pipes; ball, gate, check, and subsea choke valves up to API 15,000 psi ratings."
                            },
                            {
                                icon: <Globe2 className="text-gold" size={28} />,
                                title: "Subsea Hardware",
                                desc: "Dynamic and static electro-hydraulic umbilicals, subsea distribution units (SDU), jumper connectors, and PLET headers."
                            },
                            {
                                icon: <FileCheck2 className="text-gold" size={28} />,
                                title: "Structural Steel",
                                desc: "High-yield S355 and S460 European structural steel sections, plates, tubular members, and grating for offshore jackets."
                            },
                            {
                                icon: <Truck className="text-gold" size={28} />,
                                title: "Rotating Equipment",
                                desc: "Centrifugal pumps, reciprocating gas compressors, turbine skids, chemical injection systems, and certified OEM spare parts."
                            }
                        ].map((cat, idx) => (
                            <div key={idx} className="p-6 bg-slate rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                                <div className="mb-4">{cat.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supply Chain Assurance */}
            <section className="py-12 sm:py-16 bg-darker" aria-label="Logistics & Compliance">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="bg-slate border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12">
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8">
                                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
                                    Customs &amp; Freight Clearance
                                </span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                                    Integrated Freight Forwarding &amp; Nigerian Port Handling
                                </h3>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                                    Importing critical oilfield hardware into Nigeria demands meticulous regulatory adherence. Mantle-Gold Ltd coordinates Form M processing, PAAR generation, NUPRC clearance permits, and expedited customs clearance at Lagos and Port Harcourt port complexes.
                                </p>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                                    We manage bonded warehousing, heavy-lift crane handling, and marine barge transport directly to offshore fields or project marshaling yards, ensuring zero project standby costs.
                                </p>
                                <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-gold" size={16} />
                                        <span>NUPRC Permit Approved</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-gold" size={16} />
                                        <span>NOGICD Act 100% Compliant</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-gold" size={16} />
                                        <span>Full OEM Warranty</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 text-center lg:text-right">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-gold text-black font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-500 transition-all text-sm shadow-xl"
                                >
                                    <span>Submit Material RFQ</span>
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
                    <h3 className="text-lg font-bold text-white mb-6">Related Engineering &amp; Operational Services</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "EPCI Execution", path: "/services/epci" },
                            { name: "Subsea Engineering", path: "/services/subsea-engineering" },
                            { name: "Pipeline Engineering", path: "/services/pipeline-engineering" },
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
                title="Procurement Services FAQs"
                subtitle="Sourcing & Commercial Inquiries"
                faqs={faqs}
            />

            <CTABanner />
        </div>
    );
};

export default ProcurementService;

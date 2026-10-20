import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen, Clock, Tag, X, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import CTABanner from '../components/CTABanner';

const blogPosts = [
    {
        id: "okwori-subsea-umbilicals-relocation",
        slug: "okwori-subsea-umbilicals-relocation",
        title: "Executing Subsea Umbilical & Flexible Flowline Relocation in the Okwori Field",
        excerpt: "A technical examination of deepwater disconnection, recovery, and re-routing procedures for dynamic subsea umbilicals and flexible production lines offshore Nigeria.",
        date: "2024-08-15",
        formattedDate: "August 15, 2024",
        author: "Engr. Ekere Afia",
        authorRole: "Managing Director & Shell-Certified TA",
        readTime: "6 min read",
        category: "Subsea Engineering",
        image: "/images/subsea-vessel.jpg",
        content: `
            <h3>Project Background & Field Context</h3>
            <p>In offshore subsea field redevelopments, the relocation of existing subsea umbilicals and flexible production flowlines presents extreme engineering and hydrodynamic challenges. In the Okwori field offshore Nigeria, operated by ADDAX Petroleum, Mantle-Gold was tasked with engineering and technically coordinating the safe relocation of three critical subsea umbilicals and flexible flowlines from donor well locations to receiver wells.</p>

            <h3>Technical Execution & Dynamic Analysis</h3>
            <p>Subsea umbilicals operate under severe tension, bending, and torsional cycles caused by wave-induced vessel motions and deepwater ocean currents. Prior to mobilization, our technical team executed comprehensive static and dynamic finite element modeling to determine minimum bend radius (MBR) limits and permissible pull-in tension thresholds.</p>

            <h3>Offshore Recovery & Re-Installation Protocols</h3>
            <p>Using specialized offshore construction vessels equipped with dynamic positioning (DP2) and active heave-compensated subsea cranes, the lines were meticulously unlatched, recovered to the deck for integrity verification and electrical/hydraulic continuity testing, and re-laid to new receiver subsea tie-in points.</p>

            <h3>Outcome & Operational Impact</h3>
            <p>The entire operation was completed with zero Lost Time Injuries (LTI), zero environmental discharges, and complete hydraulic and electrical integrity restoration. This project serves as a gold standard for brownfield optimization in Nigerian deepwater basins.</p>
        `
    },
    {
        id: "technical-authority-governance-deepwater-feed",
        slug: "technical-authority-governance-deepwater-feed",
        title: "The Strategic Importance of Technical Authority (TA) Governance in Deepwater FEED",
        excerpt: "Why rigorous Technical Authority oversight during Front-End Engineering Design prevents catastrophic offshore failures and multi-million-dollar project delays.",
        date: "2024-05-22",
        formattedDate: "May 22, 2024",
        author: "Engr. Ekere Afia",
        authorRole: "Managing Director & Shell-Certified TA",
        readTime: "5 min read",
        category: "Technical Governance",
        image: "/images/platform-topsides.jpg",
        content: `
            <h3>The Cost of Inadequate Front-End Engineering</h3>
            <p>In deepwater offshore developments, over 70% of lifecycle cost overruns and operational failures trace back to inadequate Front-End Engineering Design (FEED) or compromised Technical Authority (TA) governance. When high-pressure, high-temperature (HPHT) subsea systems fail 1,000 meters underwater, remediation costs multiply exponentially.</p>

            <h3>The Shell Technical Authority Framework</h3>
            <p>As a Shell-Certified Technical Authority (TA) in Subsea Systems, Mantle-Gold applies Shell Design and Engineering Practices (DEPs) to review Invitation for Tender (IFT) specifications, subsea equipment layouts, and material selections. Independent TA verification guarantees that all safety barriers, material fatigue limits, and flow assurance criteria meet world-class industry thresholds.</p>

            <h3>Application on Nigerian Deepwater Assets</h3>
            <p>During our involvement with major deepwater FEED packages in SNEPCo and Gulf of Guinea fields, this structured technical authority oversight identified critical flowline expansion vulnerabilities early in the design cycle, saving operators significant capital expenditure and ensuring decades of safe operations.</p>
        `
    },
    {
        id: "asset-integrity-management-gulf-of-guinea",
        slug: "asset-integrity-management-gulf-of-guinea",
        title: "Extending the Operational Lifespan of Offshore Facilities in the Gulf of Guinea",
        excerpt: "Strategies for combatting microbiologically influenced corrosion, structural fatigue, and splash-zone degradation on aging West African production platforms.",
        date: "2024-02-10",
        formattedDate: "February 10, 2024",
        author: "Mantle-Gold Technical Team",
        authorRole: "Asset Integrity Engineering Division",
        readTime: "7 min read",
        category: "Asset Integrity",
        image: "/images/asset-integrity.jpg",
        content: `
            <h3>The Aging Infrastructure Challenge</h3>
            <p>The Gulf of Guinea hosts dozens of offshore production platforms and topsides that have exceeded their original 20-to-25-year design lifespans. High humidity, warm sea surface temperatures, and severe marine growth accelerate splash-zone corrosion and structural fatigue.</p>

            <h3>Risk-Based Inspection (RBI) Methodologies</h3>
            <p>Rather than relying on generic calendar-based maintenance schedules, Mantle-Gold deploys Risk-Based Inspection (RBI) compliant with API 580/581. By modeling probability of failure (PoF) alongside consequence of failure (CoF), inspection resources are focused directly on high-risk process piping, pressure vessels, and primary structural jacket members.</p>

            <h3>Non-Destructive Testing (NDT) & Life Extension</h3>
            <p>Utilizing advanced ultrasonic thickness gauging, phased array NDT, and underwater drone/ROV visual surveys, our engineers provide operators with precise structural fitness-for-service (FFS) assessments, allowing safe license renewals and production uptime extension.</p>
        `
    }
];

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "https://mantle-gold.com/blog#blog",
        "name": "Mantle-Gold Engineering Insights & Blog",
        "description": "Technical insights, field case studies, and engineering analysis from Mantle-Gold's oil and gas experts in Lagos, Nigeria.",
        "url": "https://mantle-gold.com/blog",
        "publisher": {
            "@type": "Organization",
            "name": "Mantle-Gold",
            "url": "https://mantle-gold.com",
            "logo": "https://mantle-gold.com/logo.png"
        },
        "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "@id": `https://mantle-gold.com/blog#${post.slug}`,
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "dateModified": post.date,
            "author": {
                "@type": "Person",
                "name": post.author
            },
            "publisher": {
                "@type": "Organization",
                "name": "Mantle-Gold",
                "logo": "https://mantle-gold.com/logo.png"
            },
            "image": `https://mantle-gold.com${post.image}`,
            "mainEntityOfPage": "https://mantle-gold.com/blog"
        }))
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans bg-black min-h-screen text-white relative"
        >
            <SEO
                title="Oil & Gas Engineering Insights | Mantle-Gold"
                description="Technical insights, subsea project case studies, and pipeline engineering articles from Mantle-Gold, Lagos, Nigeria."
                canonical="https://mantle-gold.com/blog"
                type="website"
                schema={blogSchema}
            />

            {/* Breadcrumbs Navigation */}
            <div className="pt-24 sm:pt-28 pb-4 bg-black">
                <div className="container mx-auto px-4 sm:px-6">
                    <Breadcrumbs items={[{ name: 'Engineering Insights & Blog', url: '/blog' }]} />
                </div>
            </div>

            {/* Hero */}
            <section className="relative pt-8 sm:pt-12 pb-14 sm:pb-20 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-black/60 border border-gold/30 px-3.5 py-1.5 rounded-full text-gold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-bold mb-4 shadow-lg"
                    >
                        <Sparkles size={13} /> TECHNICAL KNOWLEDGE BASE
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 sm:mb-6 text-white max-w-5xl mx-auto"
                    >
                        Oil &amp; Gas Engineering Insights &amp; Articles
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2"
                    >
                        Explore technical case studies, subsea field execution reviews, and regulatory standards written by the technical authorities and engineers at Mantle-Gold.
                    </motion.p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-12 sm:py-16 bg-darker" aria-label="Articles Feed">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate rounded-2xl overflow-hidden border border-white/10 hover:border-gold/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="h-48 overflow-hidden relative bg-black">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/40 to-transparent" />
                                        <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-gold text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-gold/30">
                                            {post.category}
                                        </span>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                            <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.formattedDate}</span>
                                            <span>&bull;</span>
                                            <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
                                        </div>

                                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors leading-snug">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-xs text-gray-300">
                                            <User size={13} className="text-gold" />
                                            <span><strong>{post.author}</strong> — {post.authorRole}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 pt-0 mt-auto">
                                    <button
                                        onClick={() => setSelectedPost(post)}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-gold/10 hover:bg-gold text-gold hover:text-black border border-gold/30 px-4 py-2.5 rounded-xl font-bold text-sm transition-all"
                                    >
                                        <BookOpen size={16} />
                                        <span>Read Full Article</span>
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Article Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4" role="dialog" aria-modal="true">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPost(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-slate border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 max-w-3xl w-full relative z-10 shadow-2xl overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 z-20"
                                aria-label="Close article"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-6">
                                <span className="bg-gold text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                                    {selectedPost.category}
                                </span>
                                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                                    {selectedPost.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 border-b border-white/10 pb-4">
                                    <span>By {selectedPost.author} ({selectedPost.authorRole})</span>
                                    <span>&bull;</span>
                                    <span>{selectedPost.formattedDate}</span>
                                    <span>&bull;</span>
                                    <span>{selectedPost.readTime}</span>
                                </div>
                            </div>

                            <div
                                className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-4"
                                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                            />

                            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                                <Link
                                    to="/contact"
                                    className="bg-gold text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-all inline-flex items-center gap-2"
                                >
                                    <span>Discuss a Project With Our Team</span>
                                    <ArrowRight size={16} />
                                </Link>
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="text-gray-400 hover:text-white text-sm"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <CTABanner />
        </motion.div>
    );
};

export default Blog;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, ArrowRight, Sparkles, Filter, Video, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allMedia, categories } from '../data/mediaData';
import MediaLightbox from './MediaLightbox';

const InteractiveShowcase = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);

    // Filter media items based on tab
    const filteredMedia = allMedia.filter((item) => {
        if (activeTab === 'all') return true;
        if (activeTab === 'videos') return item.type === 'video';
        return item.category === activeTab;
    }).slice(0, 8); // Top 8 featured on homepage

    return (
        <section className="py-16 md:py-24 bg-darker relative overflow-hidden" aria-label="Operations Showcase">
            {/* Background ambiance glow */}
            <div className="absolute top-1/2 left-0 w-72 md:w-96 h-72 md:h-96 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs font-bold mb-2 sm:mb-3 flex items-center gap-2"
                        >
                            <Sparkles size={13} /> Real Projects in Action
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight"
                        >
                            Operational <span className="text-gold">Footprint</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 mt-2 sm:mt-3 max-w-xl text-sm sm:text-base md:text-lg"
                        >
                            Explore authentic deepwater drilling, subsea umbilical installations, topside facilities, and certified engineering personnel.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 text-gold font-semibold hover:text-yellow-400 transition-colors group text-sm sm:text-base"
                        >
                            <span>Browse Complete Gallery ({allMedia.length} Assets)</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Filter Tabs (smooth edge-to-edge touch scroll on mobile) */}
                <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 md:mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveTab(cat.key)}
                            className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 sm:gap-2 flex-shrink-0 ${
                                activeTab === cat.key
                                    ? 'bg-gold text-black shadow-lg shadow-gold/20 scale-105'
                                    : 'bg-slate/80 text-gray-300 hover:text-white hover:bg-slate border border-white/5'
                            }`}
                        >
                            {cat.key === 'videos' ? <Video size={13} /> : null}
                            <span>{cat.label}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                activeTab === cat.key ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-400'
                            }`}>
                                {cat.count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Media Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    <AnimatePresence>
                        {filteredMedia.map((item, idx) => {
                            const isHovered = hoveredId === item.id;
                            return (
                                <motion.div
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    onClick={() => setSelectedMedia(item)}
                                    className="group relative rounded-2xl overflow-hidden bg-slate border border-white/10 hover:border-gold/40 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gold/10"
                                >
                                    {/* Aspect Ratio Box */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                                        {item.type === 'video' ? (
                                            <>
                                                {/* Video with hover auto-preview */}
                                                <video
                                                    src={item.src}
                                                    poster={item.poster}
                                                    muted
                                                    loop
                                                    playsInline
                                                    ref={(el) => {
                                                        if (el) {
                                                            if (isHovered) {
                                                                el.play().catch(() => {});
                                                            } else {
                                                                el.pause();
                                                                el.currentTime = 0;
                                                            }
                                                        }
                                                    }}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-gold text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-gold/30">
                                                    <Video size={11} /> Video
                                                </div>
                                                {/* Play Button Indicator */}
                                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <div className="w-12 h-12 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                        <Play size={20} className="ml-1" />
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <img
                                                    src={item.src}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-white/20">
                                                    <ImageIcon size={11} /> Photo
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                                                    <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg">
                                                        <Eye size={20} />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* Bottom category pill */}
                                        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md text-gray-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-white/10">
                                            {item.badge}
                                        </div>
                                    </div>

                                    {/* Content info */}
                                    <div className="p-4 bg-gradient-to-b from-slate to-black/90">
                                        <h3 className="text-white font-bold text-sm line-clamp-1 group-hover:text-gold transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs mt-1 line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom CTA for about page gallery */}
                <div className="mt-8 sm:mt-12 text-center px-2">
                    <Link
                        to="/about"
                        className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-slate hover:bg-gold hover:text-black text-white px-5 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all duration-300 border border-white/10 hover:border-gold shadow-xl group text-xs sm:text-base max-w-full text-center"
                    >
                        <span>Explore Complete Operations Gallery</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                </div>
            </div>

            {/* Lightbox Modal */}
            <MediaLightbox
                item={selectedMedia}
                mediaList={filteredMedia}
                isOpen={!!selectedMedia}
                onClose={() => setSelectedMedia(null)}
                onNavigate={(item) => setSelectedMedia(item)}
            />
        </section>
    );
};

export default InteractiveShowcase;

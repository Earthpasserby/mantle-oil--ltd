import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Maximize2, Tag, ShieldCheck } from 'lucide-react';

const MediaLightbox = ({ item, mediaList, isOpen, onClose, onNavigate }) => {
    const videoRef = useRef(null);

    // Keyboard navigation (Esc, Left, Right)
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight' && onNavigate && mediaList) {
                const nextIndex = (currentIndex + 1) % mediaList.length;
                onNavigate(mediaList[nextIndex]);
            }
            if (e.key === 'ArrowLeft' && onNavigate && mediaList) {
                const prevIndex = (currentIndex - 1 + mediaList.length) % mediaList.length;
                onNavigate(mediaList[prevIndex]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, item, mediaList]);

    if (!isOpen || !item) return null;

    const currentIndex = mediaList ? mediaList.findIndex((m) => m.id === item.id) : -1;
    const hasNext = mediaList && mediaList.length > 1;

    const handleNext = (e) => {
        e.stopPropagation();
        if (hasNext && onNavigate) {
            const nextIndex = (currentIndex + 1) % mediaList.length;
            onNavigate(mediaList[nextIndex]);
        }
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        if (hasNext && onNavigate) {
            const prevIndex = (currentIndex - 1 + mediaList.length) % mediaList.length;
            onNavigate(mediaList[prevIndex]);
        }
    };

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
                onClick={onClose}
                role="dialog"
                aria-modal="true"
                aria-label={item.title}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-gold hover:text-black text-white flex items-center justify-center transition-all duration-200 border border-white/20"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                {/* Left Arrow */}
                {hasNext && (
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-gold hover:text-black text-white flex items-center justify-center transition-all duration-200 border border-white/20 shadow-xl"
                        aria-label="Previous item"
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}

                {/* Right Arrow */}
                {hasNext && (
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-gold hover:text-black text-white flex items-center justify-center transition-all duration-200 border border-white/20 shadow-xl"
                        aria-label="Next item"
                    >
                        <ChevronRight size={24} />
                    </button>
                )}

                {/* Main Modal Content Card */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative max-w-5xl w-full max-h-[90vh] bg-slate/95 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                >
                    {/* Media Display Area */}
                    <div className="relative bg-black flex items-center justify-center max-h-[62vh] overflow-hidden">
                        {item.type === 'video' ? (
                            <video
                                ref={videoRef}
                                key={item.src}
                                src={item.src}
                                controls
                                autoPlay
                                playsInline
                                className="w-full max-h-[62vh] object-contain"
                            >
                                Your browser does not support HTML5 video.
                            </video>
                        ) : (
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full max-h-[62vh] object-contain"
                            />
                        )}
                    </div>

                    {/* Meta & Description Footer */}
                    <div className="p-6 md:p-8 bg-slate border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="bg-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                                    <Tag size={12} /> {item.badge || (item.type === 'video' ? 'Video' : 'Photo')}
                                </span>
                                {item.categoryLabel && (
                                    <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
                                        {item.categoryLabel}
                                    </span>
                                )}
                                {currentIndex >= 0 && (
                                    <span className="text-gray-500 text-xs font-mono ml-auto md:ml-0">
                                        {currentIndex + 1} / {mediaList.length}
                                    </span>
                                )}
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base max-w-3xl leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-3 self-end md:self-center flex-shrink-0">
                            <div className="flex items-center gap-2 text-xs text-gold bg-gold/10 border border-gold/30 px-3 py-1.5 rounded-xl font-medium">
                                <ShieldCheck size={16} /> Mantle-Gold Verified
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default MediaLightbox;

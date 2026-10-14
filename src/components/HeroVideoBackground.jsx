import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { heroVideos } from '../data/mediaData';

const HeroVideoBackground = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const DURATION = 8000; // 8 seconds auto-advance duration
    const currentVideo = heroVideos[currentIndex];

    // Automatic advance to the next video
    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
    };

    // Auto-advance timer: automatically transitions to next video after DURATION
    useEffect(() => {
        const timer = setTimeout(() => {
            goToNext();
        }, DURATION);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    // Preload next video in background for seamless transitions without buffering pause
    useEffect(() => {
        const nextIndex = (currentIndex + 1) % heroVideos.length;
        const nextSrc = heroVideos[nextIndex]?.src;
        if (nextSrc) {
            const preloadEl = document.createElement('video');
            preloadEl.src = nextSrc;
            preloadEl.preload = 'auto';
        }
    }, [currentIndex]);

    // Keep muted state synchronized with DOM video element
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
            videoRef.current.defaultMuted = isMuted;
        }
    }, [isMuted]);

    // Toggle Audio
    const toggleMute = () => {
        setIsMuted((prev) => {
            const next = !prev;
            if (videoRef.current) {
                videoRef.current.muted = next;
            }
            return next;
        });
    };

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black select-none" aria-label="Hero video background">
            {/* Background Video Player with seamless crossfade */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentVideo.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        muted={isMuted}
                        playsInline
                        webkit-playsinline="true"
                        poster={currentVideo.poster}
                        className="w-full h-full object-cover"
                        onCanPlay={(e) => {
                            // Enforce DOM muted properties to satisfy browser autoplay requirements
                            e.currentTarget.muted = isMuted;
                            e.currentTarget.defaultMuted = isMuted;
                            const playPromise = e.currentTarget.play();
                            if (playPromise !== undefined) {
                                playPromise.catch(() => {
                                    // Browser policy catch
                                });
                            }
                        }}
                        onEnded={goToNext}
                    >
                        <source src={currentVideo.src} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </motion.div>
            </AnimatePresence>

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/70 pointer-events-none" />

            {/* Subtle grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(232, 141, 20, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 141, 20, 0.4) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Volume Control Only */}
            <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 z-30 pointer-events-auto">
                <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center transition-colors shadow-2xl ${
                        isMuted ? 'text-gray-400 hover:text-white hover:border-white/30' : 'text-gold border-gold/30 bg-gold/10'
                    }`}
                    title={isMuted ? "Unmute video" : "Mute video"}
                >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
            </div>
        </div>
    );
};

export default HeroVideoBackground;

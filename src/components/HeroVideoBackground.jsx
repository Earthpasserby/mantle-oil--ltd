import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { heroVideos } from '../data/mediaData';

const HeroVideoBackground = ({ onVideoChange }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);
    const progressTimerRef = useRef(null);

    const DURATION = 9000; // 9 seconds per slide
    const currentVideo = heroVideos[currentIndex];

    // Handle slide change
    const goToIndex = (index) => {
        const nextIndex = (index + heroVideos.length) % heroVideos.length;
        setCurrentIndex(nextIndex);
        setProgress(0);
        if (onVideoChange) onVideoChange(heroVideos[nextIndex]);
    };

    const handleNext = () => goToIndex(currentIndex + 1);
    const handlePrev = () => goToIndex(currentIndex - 1);

    // Toggle Play/Pause
    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
        }
    };

    // Toggle Audio
    const toggleMute = () => {
        if (!videoRef.current) return;
        const newMuted = !isMuted;
        videoRef.current.muted = newMuted;
        setIsMuted(newMuted);
    };

    // Auto-advance progress
    useEffect(() => {
        if (!isPlaying) return;

        const interval = 100;
        const step = (interval / DURATION) * 100;

        progressTimerRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    goToIndex(currentIndex + 1);
                    return 0;
                }
                return prev + step;
            });
        }, interval);

        return () => {
            if (progressTimerRef.current) clearInterval(progressTimerRef.current);
        };
    }, [currentIndex, isPlaying]);

    // Update video element source on index change
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.load();
            if (isPlaying) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // Autoplay was prevented or aborted
                    });
                }
            }
        }
    }, [currentIndex]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black select-none" aria-label="Hero video background">
            {/* Background Video Player */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentVideo.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        poster={currentVideo.poster}
                        className="w-full h-full object-cover"
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

            {/* Interactive Video Switcher Overlay Bar (Bottom) */}
            <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 z-30 px-3 sm:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 pointer-events-auto">
                {/* Active Video Info Pill - visible on md screens */}
                <div className="hidden md:flex items-center gap-3 bg-black/70 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl">
                    <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
                    </span>
                    <div className="text-left">
                        <div className="text-[10px] uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
                            <Sparkles size={11} /> {currentVideo.badge} &bull; {currentVideo.location}
                        </div>
                        <div className="text-xs text-white/90 font-medium truncate max-w-[200px] lg:max-w-sm">
                            {currentVideo.title}
                        </div>
                    </div>
                </div>

                {/* Mobile Unified Control Bar (Switcher + Play/Mute all in one compact row) */}
                <div className="flex md:hidden items-center gap-1 sm:gap-1.5 bg-black/85 backdrop-blur-lg border border-white/15 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full shadow-2xl max-w-[calc(100vw-1.5rem)] mx-auto overflow-x-auto scrollbar-none">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous video"
                        className="w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        <ChevronLeft size={14} />
                    </button>
                    <button
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                        className="w-7 h-7 flex-shrink-0 rounded-full bg-gold text-black flex items-center justify-center hover:bg-yellow-400 active:scale-95 transition-transform"
                    >
                        {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next video"
                        className="w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        <ChevronRight size={14} />
                    </button>

                    <div className="h-3 w-px bg-white/20 mx-0.5 sm:mx-1 flex-shrink-0" />

                    {/* Indicator dots for mobile */}
                    <div className="flex items-center gap-1 sm:gap-1.5 px-0.5 sm:px-1 flex-shrink-0">
                        {heroVideos.map((vid, idx) => (
                            <button
                                key={vid.id}
                                onClick={() => goToIndex(idx)}
                                aria-label={`Switch to video ${idx + 1}`}
                                className={`relative h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                                    idx === currentIndex
                                        ? 'w-5 sm:w-6 bg-gold'
                                        : 'w-2 bg-white/30 hover:bg-white/60'
                                }`}
                            />
                        ))}
                    </div>

                    <div className="h-3 w-px bg-white/20 mx-0.5 sm:mx-1 flex-shrink-0" />

                    <button
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
                        className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center transition-colors ${
                            isMuted ? 'text-gray-400 hover:text-white' : 'text-gold bg-gold/20'
                        }`}
                    >
                        {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                    </button>
                </div>

                {/* Desktop Video Switcher Indicators */}
                <div className="hidden md:flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/10 p-1.5 rounded-full">
                    {heroVideos.map((vid, idx) => (
                        <button
                            key={vid.id}
                            onClick={() => goToIndex(idx)}
                            aria-label={`Switch to ${vid.title}`}
                            className={`group relative h-8 px-3 rounded-full flex items-center gap-1.5 transition-all duration-300 text-xs font-semibold ${
                                idx === currentIndex
                                    ? 'bg-gold text-black shadow-lg shadow-gold/20'
                                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            <span>0{idx + 1}</span>
                            <span className="hidden lg:inline text-[11px] truncate max-w-[90px]">
                                {vid.badge.split(' ')[0]}
                            </span>
                            {/* Animated progress bar inside active button */}
                            {idx === currentIndex && isPlaying && (
                                <span
                                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-black/60 rounded-full overflow-hidden"
                                >
                                    <span
                                        className="block h-full bg-black transition-all duration-100 ease-linear"
                                        style={{ width: `${progress}%` }}
                                    />
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Desktop Playback Controls */}
                <div className="hidden md:flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/10 p-1.5 rounded-full">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous video"
                        className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        title="Previous video"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                        className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center hover:bg-yellow-400 transition-transform active:scale-95"
                        title={isPlaying ? "Pause video loop" : "Play video"}
                    >
                        {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next video"
                        className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        title="Next video"
                    >
                        <ChevronRight size={16} />
                    </button>
                    <div className="h-4 w-px bg-white/20 mx-1" />
                    <button
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                            isMuted ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gold bg-gold/20'
                        }`}
                        title={isMuted ? "Unmute video" : "Mute video"}
                    >
                        {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroVideoBackground;

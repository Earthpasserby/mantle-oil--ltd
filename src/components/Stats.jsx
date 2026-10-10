import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const useCountUp = (end, duration = 2000, startCounting = false) => {
    const [count, setCount] = useState(0);
    const isNumber = typeof end === 'number';

    useEffect(() => {
        if (!startCounting || !isNumber) return;

        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [end, duration, startCounting, isNumber]);

    return isNumber ? count : end;
};

const StatCard = ({ number, suffix = '', label, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const numericValue = typeof number === 'number' ? number : null;
    const displayCount = useCountUp(numericValue, 2000, isInView);

    const formattedCount = numericValue !== null
        ? displayCount.toLocaleString() + suffix
        : number;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="text-center p-8 border-r last:border-r-0 border-white/10"
        >
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2 stat-glow font-serif">
                {formattedCount}
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                {label}
            </div>
        </motion.div>
    );
};

const Stats = () => {
    return (
        <div className="bg-slate py-12 border-y border-white/5 relative z-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard number={10} suffix="+" label="Years Experience" index={0} />
                <StatCard number={532480} label="Cumulative Man Hours" index={1} />
                <StatCard number={98} suffix="%" label="Safety Rating" index={2} />
            </div>
        </div>
    );
};

export default Stats;

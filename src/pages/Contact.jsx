import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle2, Linkedin, Instagram, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const XIcon = ({ size = 18, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const inquiryTypes = [
    "EPCI Project Execution",
    "Subsea Engineering Services",
    "Pipeline Engineering",
    "Asset Integrity Management",
    "Oil & Gas Fabrication",
    "Procurement & Supply Chain",
    "Partnership / JV Opportunity",
    "General Inquiry"
];

const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mantle-gold.com/contact#localbusiness",
    "name": "Mantle-Gold Ltd",
    "alternateName": ["Mantle Gold Ltd", "Mantle-Gold Limited", "Mantle Gold Limited"],
    "url": "https://mantle-gold.com/contact",
    "telephone": ["+2348032368599", "+2349121557656"],
    "email": "info@mantle-gold.com",
    "priceRange": "$$$$",
    "image": "https://mantle-gold.com/images/og-mantle-gold.jpg",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "31 Discovery Gardens Estate",
        "addressLocality": "Lekki",
        "addressRegion": "Lagos",
        "postalCode": "105102",
        "addressCountry": "NG"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.4698,
        "longitude": 3.5852
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
        }
    ]
};

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 20) {
            newErrors.message = 'Please provide more detail (at least 20 characters)';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const subject = `[${formData.inquiryType}] New Inquiry from ${formData.firstName} ${formData.lastName}`;
        const body = [
            `Name: ${formData.firstName} ${formData.lastName}`,
            `Company: ${formData.company || 'Not provided'}`,
            `Email: ${formData.email}`,
            `Phone: ${formData.phone || 'Not provided'}`,
            `Inquiry Type: ${formData.inquiryType}`,
            '',
            'Message:',
            formData.message
        ].join('%0D%0A');

        window.location.href = `mailto:info@mantle-gold.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        setSubmitted(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const inputClasses = (field) => `w-full bg-black border ${errors[field] ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 focus:border-gold focus:outline-none transition-colors text-white placeholder-gray-600 text-sm`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans bg-black min-h-screen text-white"
        >
            <SEO
                title="Contact Mantle-Gold Ltd | Lekki, Lagos"
                description="Contact Mantle-Gold Ltd at 31 Discovery Gardens Estate, Lekki, Lagos. Call +234 803 236 8599 or email info@mantle-gold.com."
                canonical="https://mantle-gold.com/contact"
                type="website"
                schema={contactSchema}
            />

            {/* Breadcrumbs Navigation */}
            <div className="pt-24 sm:pt-28 pb-4 bg-black">
                <div className="container mx-auto px-4 sm:px-6">
                    <Breadcrumbs items={[{ name: 'Contact Mantle-Gold Ltd', url: '/contact' }]} />
                </div>
            </div>

            {/* Contact Hero */}
            <section className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-black/60 border border-gold/30 px-3.5 py-1.5 rounded-full text-gold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-bold mb-4 shadow-lg"
                    >
                        <Sparkles size={13} /> LAGOS HEADQUARTERS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 sm:mb-6 text-white"
                    >
                        Contact Mantle-Gold Ltd
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2"
                    >
                        For your official Mantle-Gold Ltd contact needs, project tender invitations, and technical consultations, reach our engineering and commercial teams at our Lekki, Lagos headquarters.
                    </motion.p>
                </div>
            </section>

            <section className="py-8 sm:py-12 bg-black" aria-label="Contact Information and Form">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Contact Info Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white">Lagos Headquarters</h2>
                            <div className="space-y-4">
                                <a
                                    href="https://maps.google.com/?q=Discovery+Gardens+Estate+Lekki+Lagos+Nigeria"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group block border border-white/5"
                                >
                                    <div className="text-gold mt-1 group-hover:scale-110 transition-transform"><MapPin /></div>
                                    <div>
                                        <h3 className="font-bold text-base text-white">Office Address</h3>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">31 Discovery Gardens Estate, Lekki, Lagos, Nigeria</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group border border-white/5">
                                    <div className="text-gold mt-1 group-hover:scale-110 transition-transform"><Phone /></div>
                                    <div>
                                        <h3 className="font-bold text-base text-white">Telephone Lines</h3>
                                        <div className="flex flex-col text-sm text-gray-400">
                                            <a href="tel:+2348032368599" className="hover:text-gold transition-colors">+234 803 236 8599</a>
                                            <a href="tel:+2349121557656" className="hover:text-gold transition-colors">+234 912 155 7656</a>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="mailto:info@mantle-gold.com"
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group block border border-white/5"
                                >
                                    <div className="text-gold mt-1 group-hover:scale-110 transition-transform"><Mail /></div>
                                    <div>
                                        <h3 className="font-bold text-base text-white">Email Address</h3>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">info@mantle-gold.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/2348032368599?text=Hello%20Mantle-Gold%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group block border border-white/5"
                                >
                                    <div className="text-gold mt-1 group-hover:scale-110 transition-transform"><MessageCircle /></div>
                                    <div>
                                        <h3 className="font-bold text-base text-white">Direct WhatsApp</h3>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">Instant technical response from our operations team</p>
                                    </div>
                                </a>
                            </div>

                            {/* Response time */}
                            <div className="mt-8 p-6 bg-slate rounded-xl border border-white/5">
                                <div className="flex items-center gap-3 mb-2">
                                    <Clock size={20} className="text-gold" />
                                    <h3 className="font-bold text-white text-base">Business Hours &amp; Response SLA</h3>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    Monday &ndash; Friday: 08:00 &ndash; 17:00 WAT. We acknowledge all project inquiries within <span className="text-gold font-semibold">24 business hours</span>. For offshore emergencies, our technical team is available 24/7.
                                </p>
                            </div>

                            {/* Official Social Media Channels */}
                            <div className="mt-6 p-5 sm:p-6 bg-slate rounded-xl border border-white/5">
                                <h3 className="font-bold text-white mb-2 text-base">Official Channels</h3>
                                <p className="text-gray-400 text-xs sm:text-sm mb-4">
                                    Follow Mantle-Gold Ltd across our verified corporate profiles:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                    <a
                                        href="https://www.linkedin.com/company/mantle-gold-ltd/?viewAsMember=true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 text-gray-300 hover:text-white transition-all group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] group-hover:scale-110 transition-transform flex-shrink-0">
                                            <Linkedin size={16} />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-xs font-bold truncate">LinkedIn</div>
                                            <div className="text-[10px] text-gray-400 truncate">Mantle-Gold Ltd</div>
                                        </div>
                                    </a>

                                    <a
                                        href="https://x.com/mantlegold"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/10 hover:border-white/40 hover:bg-white/10 text-gray-300 hover:text-white transition-all group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0">
                                            <XIcon size={14} />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-xs font-bold truncate">X (Twitter)</div>
                                            <div className="text-[10px] text-gray-400 truncate">@mantlegold</div>
                                        </div>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/mantle.gold/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/10 hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10 text-gray-300 hover:text-white transition-all group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-[#E4405F]/20 flex items-center justify-center text-[#E4405F] group-hover:scale-110 transition-transform flex-shrink-0">
                                            <Instagram size={16} />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-xs font-bold truncate">Instagram</div>
                                            <div className="text-[10px] text-gray-400 truncate">@mantle.gold</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="mt-8 rounded-xl overflow-hidden border border-white/10 map-container">
                                <iframe
                                    title="Mantle-Gold Ltd Office Location in Lekki Lagos"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.5!3d6.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDiscovery%20Garden%20Estate%20Lekki%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </motion.div>

                        {/* Contact Form Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-slate p-5 sm:p-8 rounded-2xl border border-white/5 h-fit"
                        >
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-16"
                                    >
                                        <CheckCircle2 size={64} className="text-gold mx-auto mb-6" />
                                        <h2 className="text-2xl font-bold mb-4 text-white">Inquiry Received</h2>
                                        <p className="text-gray-400 mb-8 text-sm">Thank you for reaching out. We will connect with you via email or phone shortly. You can also contact us directly at <a href="mailto:info@mantle-gold.com" className="text-gold hover:underline">info@mantle-gold.com</a>.</p>
                                        <button
                                            onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', company: '', email: '', phone: '', inquiryType: '', message: '' }); }}
                                            className="text-gold font-semibold hover:underline text-sm"
                                        >
                                            Send another inquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form">
                                        <h2 className="text-2xl font-bold mb-2 text-white">Send Mantle-Gold Ltd a Message</h2>
                                        <p className="text-gray-400 text-sm mb-6">Request project proposals, technical authority oversight, or tender responses.</p>
                                        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div>
                                                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-300">First Name *</label>
                                                    <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={inputClasses('firstName')} placeholder="John" />
                                                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                                                </div>
                                                <div>
                                                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-300">Last Name *</label>
                                                    <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={inputClasses('lastName')} placeholder="Doe" />
                                                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Business Email *</label>
                                                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses('email')} placeholder="john@company.com" />
                                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                                                    <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses('phone')} placeholder="+234 800 000 0000" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-300">Company / Organization</label>
                                                <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} className={inputClasses('company')} placeholder="Operator / Service Company Name" />
                                            </div>
                                            <div>
                                                <label htmlFor="inquiryType" className="block text-sm font-medium mb-2 text-gray-300">Service Division *</label>
                                                <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} className={inputClasses('inquiryType')}>
                                                    <option value="">Select service division...</option>
                                                    {inquiryTypes.map((type, i) => (
                                                        <option key={i} value={type}>{type}</option>
                                                    ))}
                                                </select>
                                                {errors.inquiryType && <p className="text-red-400 text-xs mt-1">{errors.inquiryType}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Scope Details *</label>
                                                <textarea
                                                    id="message"
                                                    rows="5"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className={inputClasses('message')}
                                                    placeholder="Describe your oil & gas project requirements, offshore location, timeline, or tender specs..."
                                                />
                                                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                                            </div>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                className="w-full bg-gold text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer shadow-[0_0_20px_rgba(232,141,20,0.3)] hover:shadow-[0_0_30px_rgba(232,141,20,0.5)] flex items-center justify-center gap-2 text-sm sm:text-base"
                                            >
                                                <Send size={18} />
                                                Submit Inquiry to Mantle-Gold Ltd
                                            </motion.button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const inquiryTypes = [
    "EPCI Project Inquiry",
    "Pipeline Engineering",
    "Asset Integrity",
    "Fabrication Services",
    "Procurement",
    "Facility Operations Support",
    "Investor Relations",
    "Partnership / JV Opportunity",
    "General Inquiry"
];

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
        // Clear error on change
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const inputClasses = (field) => `w-full bg-black border ${errors[field] ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 focus:border-gold focus:outline-none transition-colors text-white placeholder-gray-600`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans bg-black min-h-screen text-white"
        >
            <SEO
                title="Contact Us"
                description="Get in touch with Mantle-Gold Limited for EPCI project inquiries, pipeline engineering, asset integrity services, or investor relations. Office: 31 Discovery Garden Estate, Lekki, Lagos, Nigeria."
                keywords="contact Mantle-Gold, oil gas inquiry Nigeria, EPCI quote, Lekki Lagos engineering company"
            />

            <PageHero
                title="Let's Build"
                highlight="Together"
                subtitle="Whether you have a project inquiry, partnership proposal, or simply want to learn more — our team is ready to respond within 24 business hours."
            />

            <section className="py-8 sm:py-12 bg-black" aria-label="Contact Information and Form">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Contact Info Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Headquarters</h2>
                            <div className="space-y-4">
                                {[
                                    { icon: <MapPin />, title: "Office Address", content: "31 Discovery Garden Estate, Lekki Lagos Nigeria", href: "https://maps.google.com/?q=Discovery+Garden+Estate+Lekki+Lagos+Nigeria" },
                                    { icon: <Phone />, title: "Phone", content: "08032368599, 09121557656", href: "tel:+2348032368599" },
                                    { icon: <Mail />, title: "Email", content: "info@mantle-gold.com", href: "mailto:info@mantle-gold.com" },
                                    { icon: <MessageCircle />, title: "WhatsApp", content: "Chat with us instantly", href: "https://wa.me/2348032368599?text=Hello%20Mantle-Gold%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." }
                                ].map((item, i) => (
                                    <motion.a
                                        key={i}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        whileHover={{ x: 6 }}
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group block"
                                    >
                                        <div className="text-gold mt-1 group-hover:scale-110 transition-transform">{item.icon}</div>
                                        <div>
                                            <h3 className="font-bold text-lg text-white">{item.title}</h3>
                                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.content}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Response time */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="mt-8 p-6 bg-slate rounded-xl border border-white/5 cursor-pointer"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Clock size={20} className="text-gold" />
                                    <h3 className="font-bold text-white">Response Time</h3>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    We respond to all inquiries within <span className="text-gold font-semibold">24 business hours</span>. For urgent project matters, please reach us directly via phone or WhatsApp.
                                </p>
                            </motion.div>

                            {/* Map */}
                            <div className="mt-8 rounded-xl overflow-hidden border border-white/10 map-container">
                                <iframe
                                    title="Mantle-Gold Office Location"
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
                                        <h2 className="text-2xl font-bold mb-4">Message Prepared</h2>
                                        <p className="text-gray-400 mb-8">Your email client should have opened with the message pre-filled. If not, please email us directly at <a href="mailto:info@mantle-gold.com" className="text-gold hover:underline">info@mantle-gold.com</a>.</p>
                                        <button
                                            onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', company: '', email: '', phone: '', inquiryType: '', message: '' }); }}
                                            className="text-gold font-semibold hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form">
                                        <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                                        <p className="text-gray-400 text-sm mb-6">All fields marked with * are required.</p>
                                        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div>
                                                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-400">First Name *</label>
                                                    <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={inputClasses('firstName')} placeholder="John" />
                                                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                                                </div>
                                                <div>
                                                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-400">Last Name *</label>
                                                    <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={inputClasses('lastName')} placeholder="Doe" />
                                                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-400">Email Address *</label>
                                                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses('email')} placeholder="john@company.com" />
                                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-400">Phone Number</label>
                                                    <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses('phone')} placeholder="+234 800 000 0000" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-400">Company / Organization</label>
                                                <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} className={inputClasses('company')} placeholder="Your company name" />
                                            </div>
                                            <div>
                                                <label htmlFor="inquiryType" className="block text-sm font-medium mb-2 text-gray-400">Inquiry Type *</label>
                                                <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} className={inputClasses('inquiryType')}>
                                                    <option value="">Select inquiry type...</option>
                                                    {inquiryTypes.map((type, i) => (
                                                        <option key={i} value={type}>{type}</option>
                                                    ))}
                                                </select>
                                                {errors.inquiryType && <p className="text-red-400 text-xs mt-1">{errors.inquiryType}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-400">Message *</label>
                                                <textarea
                                                    id="message"
                                                    rows="5"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className={inputClasses('message')}
                                                    placeholder="Describe your project requirements, timeline, and any specific details..."
                                                />
                                                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                                            </div>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                className="w-full bg-gold text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer shadow-[0_0_20px_rgba(232,141,20,0.3)] hover:shadow-[0_0_30px_rgba(232,141,20,0.5)] flex items-center justify-center gap-2"
                                            >
                                                <Send size={18} />
                                                Send Message
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

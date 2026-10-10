import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `New Message from ${formData.firstName} ${formData.lastName}`;
        const body = `Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:info@mantlegold.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans bg-black min-h-screen text-white pt-20"
        >
            <SEO 
                title="Contact Us" 
                description="Get in touch with Mantle-Gold Limited for project inquiries, EPCI services, or investor relations."
            />
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Get in <span className="text-gold">Touch</span></h1>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Headquarters</h2>
                        <div className="space-y-6">
                            <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                                <MapPin className="text-gold mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">Office</h3>
                                    <p className="text-gray-400">31 Discovery Garden Estate, Lekki Lagos Nigeria</p>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                                <Phone className="text-gold mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">Phone</h3>
                                    <p className="text-gray-400">08032368599, 09121557656</p>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                                <Mail className="text-gold mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">Email</h3>
                                    <p className="text-gray-400">info@mantlegold.com</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="mt-12 p-6 bg-slate rounded-xl border border-white/5 cursor-pointer"
                        >
                            <h3 className="font-bold mb-2">Investor Relations</h3>
                            <p className="text-gray-400 text-sm">
                                For investor inquiries, please contact our dedicated team at <span className="text-gold">info@mantlegold.com</span>.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-slate p-8 rounded-2xl border border-white/5"
                    >
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-400">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-gold focus:outline-none transition-colors"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-400">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-gold focus:outline-none transition-colors"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-400">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-gold focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-400">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-gold focus:outline-none transition-colors"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" 
                                className="w-full bg-gold text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer shadow-[0_0_15px_rgba(232,141,20,0.3)] hover:shadow-[0_0_25px_rgba(232,141,20,0.5)]"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;

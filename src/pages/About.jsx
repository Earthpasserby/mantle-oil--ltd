import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Eye, Users, Award, Briefcase, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
    const clients = [
        { name: "Shell Nigeria", logo: "/logos/shel.png" },
        { name: "ExxonMobil", logo: "/logos/exx.png" },
        { name: "NNPC", logo: "/logos/nn.png" }, // NNPC often needs a specific URL
        { name: "Addax Petroleum", logo: "/logos/add.png" },
        { name: "WAEP", logo: "/logos/waep.png" }, // Placeholder/Text fallback
        { name: "DWC Engineering", logo: "/logos/dwc.png" } // Placeholder/Text fallback
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans bg-black min-h-screen text-white pt-20"
        >
            <SEO 
                title="About Us" 
                description="Learn about Mantle-Gold Limited's history, mission, vision, and leadership in the Engineering and Oil & Gas sector."
            />
            <div className="container mx-auto px-6 py-12">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About <span className="text-gold">MANTLE-GOLD LTD</span></h1>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Mantle-Gold Limited is a multi-disciplinary service provider in Engineering, Procurement, Installation and Construction Services.
                    </p>
                </motion.div>

                {/* Introductory Text */}
                <div className="mb-20 grid md:grid-cols-12 gap-12 items-center overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-8"
                    >
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                            Mantle-Gold Ltd was registered with the Corporate Affairs Commission in June 2014. She has grown to be a leading provider of expertise in Subsea Engineering in Nigeria.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                            She has completed Front End Engineering Design and Invitation for Tender for Deepwater Projects in SNEPCo and Shallow-water project in ADDAX. Mantle-Gold Limited recently relocated three umbilicals and flexible flowlines from donor to receiver wells in Okwori field for ADDAX.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="md:col-span-4 bg-slate p-8 rounded-2xl border border-white/10 relative overflow-hidden cursor-pointer"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Briefcase size={120} className="text-gold" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Registered</h3>
                        <p className="text-gold text-4xl font-bold mb-2">2014</p>
                        <p className="text-gray-400">Corporate Affairs Commission</p>
                    </motion.div>
                </div>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8 mb-24 overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                        className="bg-slate p-10 rounded-2xl border-l-4 border-gold transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-black rounded-lg text-gold">
                                <Eye size={32} />
                            </div>
                            <h2 className="text-3xl font-serif font-bold">Our Vision</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            To be the company of choice in the delivery of quality EPCI projects and providing logistics for brown and green fields development for both Oil and Gas and New Energies.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                        className="bg-slate p-10 rounded-2xl border-l-4 border-gold transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-black rounded-lg text-gold">
                                <Target size={32} />
                            </div>
                            <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            To deliver EPCI projects responsibly within statutory and regulatory requirements and to cost, quality and schedule while protecting the environment and our most valued asset – people.
                        </p>
                    </motion.div>
                </div>

                {/* Core Philosophy */}
                <div className="mb-24 overflow-hidden">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center"
                    >
                        Core <span className="text-gold">Philosophy</span>
                    </motion.h2>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            {
                                icon: <Award className="w-8 h-8 text-black" />,
                                text: "We strive to meet and exceed the goals and expectations of all our clients."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-black" />,
                                text: "We leverage on our Technical Expertise and Partnerships to deliver flawless project delivery."
                            },
                            {
                                icon: <CheckCircle className="w-8 h-8 text-black" />,
                                text: "We are passionate about our services with a mindset on safety, quality, minimal cost and timeliness."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-black" />,
                                text: "Our Company is staffed with experienced personnel to ensure successful execution of projects."
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-slate p-6 rounded-xl border border-white/5 flex flex-col items-center text-center hover:border-gold/30 transition-colors cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(232,141,20,0.4)]">
                                    {item.icon}
                                </div>
                                <p className="text-gray-300">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Leadership Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 bg-slate rounded-3xl p-8 md:p-12 border border-white/5"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our <span className="text-gold">Leadership</span></h2>
                    <h3 className="text-xl font-bold text-white mb-8">Engr. Ekere Afia - CEO/MD</h3>

                    <div className="grid md:grid-cols-12 gap-12">
                        <div className="md:col-span-12 lg:col-span-12">
                            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                                <p className="mb-4">
                                    The Chief Executive Officer and Managing Director of Mantle-Gold Limited is Engr. Ekere Afia. He has over thirty-one (31) years of experience in the Oil and Gas Industry. Most of the experience were in ExxonMobil, SHELL and ADDAX in Nigeria and United States of America.
                                </p>
                                <p className="mb-4">
                                    He has Civil Engineering and Project Management degrees and several Subsea Engineering Certifications in Nigeria and the United States of America. He is a SHELL certified Technical Authority (TA) in Subsea Systems. He specialises in the design, the manufacture, installation and commissioning of Subsea Umbilicals and Distribution Equipment.
                                </p>
                                <p className="mb-4">
                                    He has successfully completed several EPCI projects as listed in the experience section. He recently engineered and installed Flexible Pipelines and Subsea Umbilicals for Addax Petroleum in its Okwori field in Nigeria. He has also installed Subsea Umbilicals and Subsea Distribution Equipment for SHELL's Perdido Stage 2 Deepwater project in the Gulf of Mexico.
                                </p>
                                <p>
                                    Engr. Ekere Afia is passionate about the delivery of flawless EPCI projects and personal development of in-house personnel for the execution of EPCI projects. He has also been Package Lead (Manager) of Subsea Umbilicals and Distribution Hardware for SHELL's Bonga South West/ Aparo and Bonga North Deepwater projects and Upgrade of Bonga FPSO Subsea Production Control System (Medusa Head).
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Clients Section */}
                <div className="mb-12 overflow-hidden">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center"
                    >
                        Our <span className="text-gold">Clients</span>
                    </motion.h2>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
                    >
                        {clients.map((client, index) => (
                            <motion.div 
                                key={index} 
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white p-8 rounded-xl flex items-center justify-center h-40 shadow-lg group cursor-pointer"
                            >
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} Logo`}
                                        className="max-h-24 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <span
                                    className={`text-black font-bold text-xl text-center ${client.logo ? 'hidden' : 'block'}`}
                                >
                                    {client.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </motion.div>
    );
};

export default About;

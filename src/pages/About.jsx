import { Target, Eye, Users, Award, Briefcase, CheckCircle, Shield, Leaf, HardHat, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const clients = [
    { name: "Shell Nigeria", logo: "/logos/shel.png" },
    { name: "ExxonMobil", logo: "/logos/exx.png" },
    { name: "NNPC", logo: "/logos/nn.png" },
    { name: "Addax Petroleum", logo: "/logos/add.png" },
    { name: "WAEP", logo: "/logos/waep.png" },
    { name: "DWC Engineering", logo: "/logos/dwc.png" }
];

const milestones = [
    { year: "2014", title: "Company Founded", desc: "Registered with the Corporate Affairs Commission (CAC), Nigeria." },
    { year: "2015", title: "First Major Contract", desc: "Secured Front End Engineering Design (FEED) work for deepwater projects." },
    { year: "2017", title: "SNEPCo Partnership", desc: "Completed FEED and Invitation for Tender for Deepwater Projects in SNEPCo." },
    { year: "2019", title: "Addax Shallow-Water", desc: "Delivered shallow-water project execution for Addax Petroleum." },
    { year: "2021", title: "Okwori Field Project", desc: "Successfully relocated three umbilicals and flexible flowlines from donor to receiver wells in Okwori field for Addax." },
    { year: "2024", title: "10 Years of Excellence", desc: "Surpassed 532,480 cumulative man-hours with a 98% safety rating." }
];

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans bg-black min-h-screen text-white"
        >
            <SEO
                title="About Us"
                description="Learn about Mantle-Gold Limited — founded in 2014, a leading Nigerian provider of expertise in Subsea Engineering, EPCI project delivery, and energy solutions."
                keywords="Mantle-Gold about, Nigerian oil gas company, EPCI Nigeria, subsea engineering history, Engr Ekere Afia"
            />

            <PageHero
                title="About"
                highlight="MANTLE-GOLD LTD"
                subtitle="A multi-disciplinary service provider in Engineering, Procurement, Installation and Construction Services — proudly Nigerian, globally competent."
            />

            {/* Company Story */}
            <section className="py-20 bg-darker" aria-label="Company Story">
                <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-8"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Story</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">A Decade of Engineering <span className="text-gold">Excellence</span></h2>
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                            Mantle-Gold Ltd was registered with the Corporate Affairs Commission in June 2014. Since inception, she has grown to be a leading provider of expertise in Subsea Engineering in Nigeria.
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
                        whileHover={{ scale: 1.03 }}
                        className="md:col-span-4 bg-slate p-8 rounded-2xl border border-white/10 relative overflow-hidden cursor-pointer"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Briefcase size={120} className="text-gold" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Established</h3>
                        <p className="text-gold text-5xl font-bold font-serif mb-2">2014</p>
                        <p className="text-gray-400">Corporate Affairs Commission, Nigeria</p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-black" aria-label="Milestones">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Our Journey</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">Key <span className="text-gold">Milestones</span></h2>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 md:-translate-x-px" />

                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1.5 mt-2 shadow-[0_0_10px_rgba(232,141,20,0.5)] z-10" />

                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <div className="bg-slate p-6 rounded-xl border border-white/5 hover:border-gold/20 transition-colors">
                                        <div className="flex items-center gap-3 mb-2 justify-start">
                                            <Calendar size={16} className="text-gold" />
                                            <span className="text-gold font-bold text-lg">{milestone.year}</span>
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">{milestone.title}</h3>
                                        <p className="text-gray-400 text-sm">{milestone.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-darker" aria-label="Vision and Mission">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="bg-slate p-10 rounded-2xl border-l-4 border-gold transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-black rounded-lg text-gold"><Eye size={32} /></div>
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
                            transition={{ delay: 0.15 }}
                            whileHover={{ y: -8 }}
                            className="bg-slate p-10 rounded-2xl border-l-4 border-gold transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-black rounded-lg text-gold"><Target size={32} /></div>
                                <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                To deliver EPCI projects responsibly within statutory and regulatory requirements and to cost, quality and schedule while protecting the environment and our most valued asset – people.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Philosophy */}
            <section className="py-20 bg-black" aria-label="Core Philosophy">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">What Drives Us</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">Core <span className="text-gold">Philosophy</span></h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
                        }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { icon: <Award className="w-8 h-8 text-black" />, text: "We strive to meet and exceed the goals and expectations of all our clients." },
                            { icon: <Users className="w-8 h-8 text-black" />, text: "We leverage on our Technical Expertise and Partnerships to deliver flawless project delivery." },
                            { icon: <CheckCircle className="w-8 h-8 text-black" />, text: "We are passionate about our services with a mindset on safety, quality, minimal cost and timeliness." },
                            { icon: <Users className="w-8 h-8 text-black" />, text: "Our Company is staffed with experienced personnel to ensure successful execution of projects." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ scale: 1.04, y: -5 }}
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
            </section>

            {/* HSE Culture */}
            <section className="py-20 bg-darker" aria-label="HSE Culture">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Safety First</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">HSE & <span className="text-gold">Sustainability</span></h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Shield size={40} />, title: "Zero-Harm Philosophy", desc: "Every project begins and ends with safety. Our 98% safety rating reflects a deep-rooted culture of hazard prevention, rigorous risk assessment, and continuous training." },
                            { icon: <Leaf size={40} />, title: "Environmental Stewardship", desc: "We integrate environmental responsibility into every phase of operations — from design to decommissioning — minimising ecological impact across all project sites." },
                            { icon: <HardHat size={40} />, title: "Local Content Excellence", desc: "As a proudly Nigerian company, we champion local content development — training, employing, and empowering Nigerian engineers and technicians to deliver world-class EPCI projects." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -8 }}
                                className="bg-slate p-8 rounded-2xl border border-white/5 hover:border-gold/20 transition-all cursor-pointer"
                            >
                                <div className="text-gold mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 bg-black" aria-label="Leadership">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-slate rounded-3xl p-8 md:p-12 border border-white/5"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Leadership</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Engr. Ekere Afia</h2>
                        <p className="text-gold text-lg font-medium mb-8">CEO / Managing Director</p>

                        <div className="grid md:grid-cols-12 gap-12">
                            <div className="md:col-span-12">
                                <div className="prose prose-lg prose-invert max-w-none text-gray-300 space-y-4">
                                    <p>
                                        The Chief Executive Officer and Managing Director of Mantle-Gold Limited is Engr. Ekere Afia. He has over thirty-one (31) years of experience in the Oil and Gas Industry. Most of the experience were in ExxonMobil, SHELL and ADDAX in Nigeria and United States of America.
                                    </p>
                                    <p>
                                        He has Civil Engineering and Project Management degrees and several Subsea Engineering Certifications in Nigeria and the United States of America. He is a SHELL certified Technical Authority (TA) in Subsea Systems. He specialises in the design, the manufacture, installation and commissioning of Subsea Umbilicals and Distribution Equipment.
                                    </p>
                                    <p>
                                        He has successfully completed several EPCI projects. He recently engineered and installed Flexible Pipelines and Subsea Umbilicals for Addax Petroleum in its Okwori field in Nigeria. He has also installed Subsea Umbilicals and Subsea Distribution Equipment for SHELL's Perdido Stage 2 Deepwater project in the Gulf of Mexico.
                                    </p>
                                    <p>
                                        Engr. Ekere Afia is passionate about the delivery of flawless EPCI projects and personal development of in-house personnel for the execution of EPCI projects. He has also been Package Lead (Manager) of Subsea Umbilicals and Distribution Hardware for SHELL's Bonga South West/Aparo and Bonga North Deepwater projects and Upgrade of Bonga FPSO Subsea Production Control System (Medusa Head).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key credentials */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
                            {[
                                { stat: "31+", label: "Years Experience" },
                                { stat: "SHELL", label: "Certified TA" },
                                { stat: "3", label: "Major IOC Experience" },
                                { stat: "Global", label: "Nigeria & USA" }
                            ].map((cred, i) => (
                                <div key={i} className="text-center p-4">
                                    <div className="text-gold text-2xl font-bold font-serif">{cred.stat}</div>
                                    <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">{cred.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Clients */}
            <section className="py-20 bg-darker" aria-label="Our Clients">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold">Our <span className="text-gold">Clients</span></h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
                                        alt={`${client.name} logo`}
                                        className="max-h-24 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <span className={`text-black font-bold text-xl text-center ${client.logo ? 'hidden' : 'block'}`}>
                                    {client.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <CTABanner />
        </motion.div>
    );
};

export default About;

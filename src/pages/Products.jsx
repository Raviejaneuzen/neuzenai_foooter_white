import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Eye, Brain, ArrowRight, CheckCircle2, Shield, Zap, Globe, Sparkle, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import './Products.css';
import './ProductsMobile.css';
import '../styles/MobileResponsive.css';
import { updateMetaTags } from '../utils/seo';

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        updateMetaTags({
            title: "AI Products & Platforms",
            description: "Explore NeuzenAI's suite of AI products: FluxAI, LensAI, NvisionAI, and SwassAI. Innovative solutions for marketing modeling, computer vision, and data labeling.",
            url: "https://neuzenai.com/products",
        });
    }, []);

    const productsData = [
        {
            id: 1,
            name: "FluxAI",
            tagline: "Marketing Mix Modeling & Budget Optimization Platform",
            description: <>FluxAI is a <span style={{ color: '#ff4500' }}>marketing mix modeling (MMM)</span> platform that shows which channels and campaigns drive real <span style={{ color: '#ff4500' }}>revenue</span>, so marketing and finance teams can optimize spend with <span style={{ color: '#ff4500' }}>confidence</span>.</>,
            icon: <Zap className="w-8 h-8 text-white" />,
            image: "/fluxai.png",
            features: ["Incrementality Analysis", "Budget Attribution", "ROI Forecasting", "Performance Tracking"],
            capabilities: [
                { title: "Incrementality & attribution analysis", desc: "Measure the true impact of every channel beyond last‑click attribution." },
                { title: "Budget scenario planning", desc: "Run \"what‑if\" simulations to forecast ROI before reallocating spend." },
                { title: "Always‑on performance tracking", desc: "Monitor KPIs in real time and receive recommendations to maximize ROAS." }
            ],
            whoItIsFor: "Growth marketers, CMOs, and finance teams managing multi‑channel advertising budgets who need transparent, data‑driven allocation decisions.",
            link: "https://fluxai.neuzenai.com/login",
            isExternal: true
        },
        {
            id: 2,
            name: "LensAI",
            tagline: "AI‑Powered Recruiting & Resume Screening Platform",
            description: <>LensAI automates <span style={{ color: '#ff4500' }}>resume parsing</span>, candidate ranking, and outreach so recruiting teams cut manual screening time from <span style={{ color: '#ff4500' }}>50+ hours to minutes</span> per role.</>,
            icon: <Eye className="w-8 h-8 text-white" />,
            image: "/lensai.png",
            features: ["Intelligent Parsing", "Candidate Ranking", "Personalized Outreach", "Interview Scheduling"],
            capabilities: [
                { title: "Intelligent resume parsing", desc: "Extracts skills, experience, and education from hundreds of CVs automatically." },
                { title: "AI candidate ranking", desc: "Scores applicants against job requirements and surfaces the strongest fits first." },
                { title: "One‑click outreach & scheduling", desc: "Send personalized messages and book interviews without switching tools." }
            ],
            whoItIsFor: "Talent acquisition teams, HR departments, and recruitment agencies handling high‑volume hiring or hard‑to‑fill technical roles.",
            link: "https://lens.neuzenai.com/",
            isExternal: true
        },
        {
            id: 3,
            name: "NvisionAI",
            tagline: "Computer Vision for Defect Detection & Quality Inspection",
            description: <>NvisionAI uses <span style={{ color: '#ff4500' }}>deep‑learning computer vision</span> to detect manufacturing defects, product damage, and <span style={{ color: '#ff4500' }}>quality issues</span> in real time from images or video.</>,
            icon: <Brain className="w-8 h-8 text-white" />,
            image: "/nvisionai-img1.png",
            features: ["Defect Identification", "Visual Inspection", "Real-time Dashboards", "Cost Estimation"],
            capabilities: [
                { title: "Automated visual inspection", desc: "Identifies scratches, dents, misalignments, and other defects on production lines." },
                { title: "Real‑time alerts & dashboards", desc: "Flags issues as they occur so quality teams can intervene immediately." },
                { title: "Damage cost estimation", desc: "Assesses severity and provides repair or replacement cost guidance." }
            ],
            whoItIsFor: "Manufacturing quality control teams, insurance claims assessors, automotive inspectors, and logistics operators who need scalable, consistent defect detection.",
            link: "https://nvision.neuzenai.com/",
            isExternal: true
        },
        {
            id: 4,
            name: "SwassAI",
            tagline: "Medical Imaging AI for Diagnostic Support",
            description: <>SwassAI assists <span style={{ color: '#ff4500' }}>radiologists and clinicians</span> with AI‑powered screening for Tuberculosis, Breast Cancer, and other conditions using <span style={{ color: '#ff4500' }}>chest X‑rays and mammograms</span>.</>,
            icon: <BarChart className="w-8 h-8 text-white" />,
            image: "/swassai.png",
            features: ["Healthcare Insights", "Image Analysis", "Medical Accuracy", "Diagnostic Reporting"],
            capabilities: [
                { title: "Automated region‑of‑interest highlighting", desc: "Flags suspicious areas on medical images to reduce missed findings." },
                { title: "Structured diagnostic reports", desc: "Generates clinician‑ready reports with findings, suggested precautions, and next‑step recommendations." },
                { title: "Audit trail & clinician collaboration", desc: "Doctors can add observations, approve AI suggestions, and maintain full control over final diagnoses." }
            ],
            whoItIsFor: "Hospitals, diagnostic imaging centers, teleradiology providers, and public health screening programs aiming to increase throughput and diagnostic consistency.",
            link: "https://swass.neuzenai.com/",
            isExternal: true
        }
    ];

    return (
        <div className="products-page w-full bg-white overflow-x-hidden">

            {/* ------------------- HERO SECTION ------------------- */}
            <section className="products-hero-split">
                <div className="products-hero-left">
                    <div className="products-hero-content-left slide-up-animated">
                        <h1 className="products-hero-love-text">
                            Next-Gen <br></br>AI Products<br />
                            <span className="orange-bar"></span>
                        </h1>
                    </div>
                </div>
                <div className="products-hero-right">
                    <div className="products-hero-content-right slide-up-animated delay-2">
                        <h2 className="products-hero-title-right">Products</h2>
                        <p className="products-hero-subtitle-right">
                            At NeuZenAI, we develop products that redefine what's possible with cutting-edge intelligence.
                        </p>
                    </div>
                </div>

            </section>


            {/* ------------------- PRODUCTS ZIG-ZAG LIST ------------------- */}
            <section className="pt-24 pb-60 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-bold mb-6" style={{ color: '#ff4500' }}>Explore Our Products</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Browse through our innovative AI solutions tailored for modern enterprises.
                        </p>
                        <br></br>
                    </div>

                    <div className="flex flex-col gap-16"> {/* Reduced gap further to 16 */}
                        {productsData.map((product, index) => {
                            // Logic: Even index (0, 2, 4...) -> Image Left, Text Right
                            //        Odd index (1, 3, 5...)  -> Image Right, Text Left

                            const isEven = index % 2 === 0;

                            // Explicitly determining content order based on index
                            // This ensures the zig-zag layout is structurally enforced
                            return (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="flex flex-col md:flex-row gap-12 md:gap-20 items-center"
                                >
                                    {isEven ? (
                                        <>
                                            {/* Image Left */}
                                            <div className="w-full md:w-1/2 group perspective-1000">
                                                <div className="p-[2px] rounded-3xl overflow-hidden relative moving-border-container">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4500] to-transparent opacity-0 group-hover:opacity-100 moving-border-animation"></div>
                                                    <div className="aspect-video w-full flex items-center justify-center rounded-3xl overflow-hidden bg-white relative z-10">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className={`transition-all duration-300 ${product.name === 'SwassAI' ? 'swass-product-img' : 'product-img-standard'}`}
                                                        />
                                                    </div>
                                                </div>

                                                {product.whoItIsFor && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.5 }}
                                                        className="target-audience-banner mt-8"
                                                    >
                                                        <div className="target-icon-box">
                                                            <Users size={18} className="text-[#ff4500]" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[11px] uppercase tracking-widest font-bold text-[#ff4500] mb-1">Who it's for</p>
                                                            <p className="text-gray-700 text-sm font-medium leading-relaxed">{product.whoItIsFor}</p>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.6 }}
                                                    className="mt-10 pl-4"
                                                >
                                                    {product.isExternal ? (
                                                        <a
                                                            href={product.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link-glow inline-flex items-center text-[#ff4500] font-bold text-lg transition-all group hover:gap-3"
                                                        >
                                                            <span className="text-black">Learn more about {product.name.replace('AI', '')}<span style={{ color: '#ff4500' }}>AI</span></span>
                                                            <ArrowRight className="arrow-animate ml-2 w-5 h-5 transition-transform" />
                                                        </a>
                                                    ) : (
                                                        <Link to={product.link} className="link-glow inline-flex items-center text-[#ff4500] font-bold text-lg transition-all group hover:gap-3">
                                                            <span className="text-black">Learn more about {product.name.replace('AI', '')}<span style={{ color: '#ff4500' }}>AI</span></span>
                                                            <ArrowRight className="arrow-animate ml-2 w-5 h-5 transition-transform" />
                                                        </Link>
                                                    )}
                                                </motion.div>
                                            </div>

                                            {/* Text Right */}
                                            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                    className="mb-8"
                                                >
                                                    <div className="w-12 h-1 bg-[#ff4500] mb-6 rounded-full"></div>
                                                    <h3 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight" style={{ color: '#000000' }}>
                                                        {product.name.replace('AI', '')}<span style={{ color: '#ff4500' }}>AI</span>
                                                    </h3>
                                                    <p className="text-xl font-semibold text-[#133331] mb-6 opacity-80">{product.tagline}</p>
                                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                                        {product.description}
                                                    </p>

                                                    <div className="flex flex-wrap gap-3">
                                                        {product.features.map((feature, idx) => (
                                                            <span key={idx} className={`feature-item inline-flex items-center px-4 py-2 rounded-xl border text-sm font-medium shadow-sm transition-all hover:bg-white cursor-default ${idx % 2 === 0 ? 'orange' : 'green'}`}>
                                                                <CheckCircle2 className={`w-4 h-4 mr-2 ${idx % 2 === 0 ? 'text-[#ff4500]' : 'text-[#16a34a]'}`} />
                                                                {feature}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>

                                                {product.capabilities && (
                                                    <div className="w-full space-y-8 mb-10">
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.5, delay: 0.3 }}
                                                        >
                                                            <h4 className="text-lg font-bold mb-5 flex items-center gap-2" style={{ color: '#000000' }}>
                                                                <Sparkle size={20} className="text-[#ff4500]" />
                                                                Key Capabilities
                                                            </h4>
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                {product.capabilities.map((cap, idx) => (
                                                                    <div key={idx} className="capability-card-v3">
                                                                        <p className="font-bold text-gray-900 text-sm mb-1">{cap.title}</p>
                                                                        <p className="text-gray-600 text-[13px] leading-relaxed">{cap.desc}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                )}
                                            </div>


                                        </>
                                    ) : (
                                        <>
                                            {/* Text Left (Swapped for Odd Index) */}
                                            <div className="w-full md:w-1/2 flex flex-col items-start text-left order-2 md:order-1">
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                    className="mb-8"
                                                >
                                                    <div className="w-12 h-1 bg-[#ff4500] mb-6 rounded-full"></div>
                                                    <h3 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight" style={{ color: '#000000' }}>
                                                        {product.name.replace('AI', '')}<span style={{ color: '#ff4500' }}>AI</span>
                                                    </h3>
                                                    <p className="text-xl font-semibold text-[#133331] mb-6 opacity-80">{product.tagline}</p>
                                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                                        {product.description}
                                                    </p>

                                                    <div className="flex flex-wrap gap-3">
                                                        {product.features.map((feature, idx) => (
                                                            <span key={idx} className={`feature-item inline-flex items-center px-4 py-2 rounded-xl border text-sm font-medium shadow-sm transition-all hover:bg-white cursor-default ${idx % 2 === 0 ? 'orange' : 'green'}`}>
                                                                <CheckCircle2 className={`w-4 h-4 mr-2 ${idx % 2 === 0 ? 'text-[#ff4500]' : 'text-[#16a34a]'}`} />
                                                                {feature}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>

                                                {(product.capabilities || product.whoItIsFor) && (
                                                    <div className="w-full space-y-8 mb-10">
                                                        {product.capabilities && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 20 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.5, delay: 0.3 }}
                                                            >
                                                                <h4 className="text-lg font-bold mb-5 flex items-center gap-2" style={{ color: '#000000' }}>
                                                                    <Sparkle size={20} className="text-[#ff4500]" />
                                                                    Key Capabilities
                                                                </h4>
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                    {product.capabilities.map((cap, idx) => (
                                                                        <div key={idx} className="capability-card-v3">
                                                                            <p className="font-bold text-gray-900 text-sm mb-1">{cap.title}</p>
                                                                            <p className="text-gray-600 text-[13px] leading-relaxed">{cap.desc}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                )}


                                            </div>

                                            {/* Image Right (Swapped for Odd Index) */}
                                            <div className="w-full md:w-1/2 group perspective-1000 order-1 md:order-2">
                                                <div className="p-[2px] rounded-3xl overflow-hidden relative moving-border-container">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4500] to-transparent opacity-0 group-hover:opacity-100 moving-border-animation"></div>
                                                    <div className="aspect-video w-full flex items-center justify-center rounded-3xl overflow-hidden bg-white relative z-10">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className={`transition-all duration-300 ${product.name === 'SwassAI' ? 'swass-product-img' : 'product-img-standard'}`}
                                                        />
                                                    </div>
                                                </div>

                                                {product.whoItIsFor && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.5 }}
                                                        className="target-audience-banner mt-8"
                                                    >
                                                        <div className="target-icon-box">
                                                            <Users size={18} className="text-[#ff4500]" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[11px] uppercase tracking-widest font-bold text-[#ff4500] mb-1">Who it's for</p>
                                                            <p className="text-gray-700 text-sm font-medium leading-relaxed">{product.whoItIsFor}</p>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.6 }}
                                                    className="mt-10 pl-4"
                                                >
                                                    {product.isExternal ? (
                                                        <a
                                                            href={product.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link-glow inline-flex items-center text-[#ff4500] font-bold text-lg transition-all group hover:gap-3"
                                                        >
                                                            <span className="text-black">Learn more about {product.name.replace('AI', '')}<span style={{ color: '#ff4500' }}>AI</span></span>
                                                            <ArrowRight className="arrow-animate ml-2 w-5 h-5 transition-transform" />
                                                        </a>
                                                    ) : (
                                                        <Link to={product.link} className="link-glow inline-flex items-center text-[#ff4500] font-bold text-lg transition-all group hover:gap-3">
                                                            <span className="text-black">Learn more about {product.name.replace('AI', '')}<span style={{ color: '#ff4500' }}>AI</span></span>
                                                            <ArrowRight className="arrow-animate ml-2 w-5 h-5 transition-transform" />
                                                        </Link>
                                                    )}
                                                </motion.div>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <br></br>

            <br />
            {/* ------------------- WHY CHOOSE US ------------------- */}
            <section className="pt-20 pb-40 bg-[#f9fafb] relative overflow-hidden">
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#ff4500 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold" style={{ color: '#ff4500' }}>Why Choose NeuZen?</h2>
                    </div>
                    <br></br>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Enterprise Security */}
                        <div className="why-choose-card">
                            <div className="why-choose-card-content">
                                <div className="w-14 h-14 bg-[#ff4500]/10 rounded-2xl flex items-center justify-center mb-6 text-[#ff4500]">
                                    <Shield className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#ff4500] mb-6">Enterprise Security</h3>
                                <p className="text-gray-600 text-md">Built with the highest standards of data protection and privacy compliance for peace of mind.</p>
                            </div>
                        </div>

                        {/* Card 2: High Performance */}
                        <div className="why-choose-card">
                            <div className="why-choose-card-content">
                                <div className="w-14 h-14 bg-[#ff4500]/10 rounded-2xl flex items-center justify-center mb-6 text-[#ff4500]">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#ff4500] mb-6">High Performance</h3>
                                <p className="text-gray-600 text-md">Lightning-fast processing ensuring real-time insights when you need them most.</p>
                            </div>
                        </div>

                        {/* Card 3: Global Scale */}
                        <div className="why-choose-card">
                            <div className="why-choose-card-content">
                                <div className="w-14 h-14 bg-[#ff4500]/10 rounded-2xl flex items-center justify-center mb-6 text-[#ff4500]">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#ff4500] mb-6">Global Scale</h3>
                                <p className="text-gray-600 text-md">Infrastructure designed to scale effortlessly with your growing business demands.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get in Touch Section */}
            <section className="careers-final-cta">
                <div className="cta-overlay-gradient"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <h2 className="cta-heading-large text-[#ffffff]">
                            Know More About Our  <br className="hidden md:block" />Products
                        </h2>
                        <Link to="/contact" className="cta-contact-btn">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Products;

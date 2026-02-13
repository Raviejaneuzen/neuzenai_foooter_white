import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Phone, ArrowRight, Facebook, Instagram } from 'lucide-react';
import footerMap from '../assets/footer_map.png';
import './Footer.css'; // Import the new CSS file

const Footer = () => {
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);
    const location = useLocation();

    const handleLinkClick = (path) => {
        if (location.pathname === path) {
            window.scrollTo(0, 0);
        }
    };

    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');

    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setShowModal(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const v1 = videoRef1.current;
        const v2 = videoRef2.current;
        const v3 = videoRef3.current;

        const setRate = (v) => {
            if (v) v.playbackRate = 2.5;
        };

        [v1, v2, v3].forEach(setRate);
    }, []);

    // Close modal and scroll to top on route change
    useEffect(() => {
        setShowModal(false);
        document.body.style.overflow = 'unset';
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <footer className="footer-container">
            <div className="footer-inner">
                <div className="footer-brand-wrapper">
                    <Link to="/" className="footer-brand-logo" onClick={() => handleLinkClick('/')}>
                        {/* Segment 1: Neu */}
                        <div className="logo-mask logo-mask-neu">
                            <span className="logo-sizer" aria-hidden="true">Neu</span>
                            <video
                                ref={videoRef1}
                                className="masked-video"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                            >
                                <source src="/sp-logo-footer-bg.mp4?v=1" type="video/mp4" />
                            </video>
                            <span className="logo-fallback">Neu</span>
                        </div>

                        {/* Segment 2: Zen */}
                        <div className="logo-mask logo-mask-zen">
                            <span className="logo-sizer" aria-hidden="true">Zen</span>
                            <video
                                ref={videoRef2}
                                className="masked-video"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                            >
                                <source src="/sp-logo-footer-bg.mp4?v=2" type="video/mp4" />
                            </video>
                            <span className="logo-fallback">Zen</span>
                        </div>

                        {/* Segment 3: AI */}
                        <div className="logo-mask logo-mask-ai">
                            <span className="logo-sizer" aria-hidden="true">AI</span>
                            <video
                                ref={videoRef3}
                                className="masked-video"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                            >
                                <source src="/sp-logo-footer-bg.mp4?v=3" type="video/mp4" />
                            </video>
                            <span className="logo-fallback">AI</span>
                        </div>
                    </Link>
                </div>
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-col-brand">
                        <p className="footer-brand-desc">
                            Accelerate your digital transformation with NeuZenAI’s custom machine learning models, proprietary AI platforms, and data-driven product engineering. From concept to scale, we build the intelligent systems that power your future.
                        </p>
                        <div className="footer-social-links">
                            <a href="https://x.com/Neuzenai23" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/neuzenai/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.facebook.com/people/Neuzenai/61554736760102/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/neuzenai/?igsh=MWIya2FuZWphdHkzcw%3D%3D" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col-links">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about" className="footer-link-item" onClick={() => handleLinkClick('/about')}><ArrowRight size={16} />About Us</Link></li>
                            <li><Link to="/careers" className="footer-link-item" onClick={() => handleLinkClick('/careers')}><ArrowRight size={16} />Careers</Link></li>
                            <li><Link to="/capabilities" className="footer-link-item" onClick={() => handleLinkClick('/capabilities')}><ArrowRight size={16} />Capabilities</Link></li>
                            <li><Link to="/industries" className="footer-link-item" onClick={() => handleLinkClick('/industries')}><ArrowRight size={16} />Industries</Link></li>
                        </ul>
                    </div>



                    {/* Products */}
                    <div className="footer-col-links">
                        <h4 className="footer-heading">Products</h4>
                        <ul className="footer-links">
                            <li><a href="https://fluxai.neuzenai.com/login" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />FluxAI</a></li>
                            <li><a href="https://lens.neuzenai.com/" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />LensAI</a></li>
                            <li><a href="https://nvision.neuzenai.com/" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />NvisionAI</a></li>
                            <li><a href="https://swass.neuzenai.com/" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />SwassAI</a></li>

                        </ul>
                    </div>

                    {/* Contact Info & Locations */}
                    <div className="footer-col-contact">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="footer-links">
                            <li className="footer-contact-item">
                                <Mail size={20} className="footer-brand-highlight" />
                                <a href="mailto:contact@neuzenai.com" className="footer-link-item" style={{ display: 'inline', padding: 0 }}>contact@neuzenai.com</a>
                            </li>
                            <li className="footer-contact-item">
                                <Phone size={20} className="footer-brand-highlight" />
                                <div>

                                    <div>USA: +1 972 372 9983</div>
                                    <div className="mb-1">India: +91 88852 57422</div>
                                </div>
                            </li>
                        </ul>

                        {/* Office Locations Map */}
                        <div className="footer-locations">
                            <h5 className="footer-heading" style={{ marginBottom: '12px' }}>Our Locations</h5>
                            <div className="footer-locations-card">
                                {/* World Map Image with Interactive Markers */}
                                <div className="footer-map-container">
                                    <img
                                        src={footerMap}
                                        alt="World Map showing Dallas and Hyderabad"
                                        className="footer-map-img"
                                    />

                                    {/* Dallas Interactive Marker */}
                                    <div className="footer-map-marker" style={{ left: '22%', top: '38%' }}>
                                        <div className="footer-marker-dot"></div>
                                        {/* Tooltip */}
                                        <div className="footer-tooltip">
                                            Dallas, USA
                                        </div>
                                    </div>

                                    {/* Hyderabad Interactive Marker */}
                                    <div className="footer-map-marker" style={{ left: '69%', top: '50%' }}>
                                        <div className="footer-marker-dot"></div>
                                        {/* Tooltip */}
                                        <div className="footer-tooltip" style={{ left: 'auto', right: '0', transform: 'none' }}>
                                            T Hub Phase 2, Hyderabad
                                        </div>
                                    </div>
                                </div>

                                {/* Location Details List */}
                                <div className="footer-locations-list">
                                    {/* Dallas Location */}
                                    <div className="footer-location-item">
                                        <div className="footer-location-dot"></div>
                                        <div>
                                            <h6 className="footer-location-name">Dallas,U.S.A</h6>
                                            <p className="footer-location-address">
                                                702 S Denton Tap Rd, Suite # 110, Coppell, 75019</p>
                                        </div>
                                    </div>

                                    {/* Hyderabad Location */}
                                    <div className="footer-location-item">
                                        <div className="footer-location-dot"></div>
                                        <div>
                                            <h6 className="footer-location-name">Hyderabad, India</h6>
                                            <p className="footer-location-address">
                                                T Hub Phase 2,
                                                <br></br>In orbit Mall Rd, Madhapur, 500032<br />


                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © 2023 NeuZenAI. All rights reserved.
                    </div>
                    <div className="footer-bottom-links">
                        <button onClick={() => openModal('Privacy Policy', privacyContent)} className="footer-bottom-link-btn">Privacy Policy</button>
                        <button onClick={() => openModal('Terms of Service', termsContent)} className="footer-bottom-link-btn">Terms & Conditions</button>
                        <button onClick={() => openModal('Cookie Policy', cookieContent)} className="footer-bottom-link-btn">Cookie Policy</button>
                    </div>
                </div>
            </div>

            {/* Modal Implementation */}
            {showModal && (
                <div className="policy-modal-overlay" onClick={closeModal}>
                    <div className="policy-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="policy-modal-close" onClick={closeModal}>×</button>
                        <h2 className="policy-modal-title">{modalTitle}</h2>
                        <div className="policy-modal-body">
                            {modalContent.split('\n').map((paragraph, idx) => (
                                <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

// Content Data
const privacyContent = `At NeuzenAI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.

We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.

We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below: to facilitate account creation and logon process, to send you marketing and promotional communications, to send administrative information to you, and to post testimonials.`;

const termsContent = `Welcome to NeuzenAI. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.

All content, trademarks, service marks, logos, and other intellectual property displayed on our website are the property of NeuzenAI or their respective owners. You may not use, reproduce, modify, or distribute any content from our website without our prior written consent.

You agree to use our website and services only for lawful purposes and in accordance with these Terms. You may not use our website in any manner that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of our website.

We reserve the right to modify or terminate our website and services at any time, without notice. We also reserve the right to update these Terms from time to time. Your continued use of our website after any changes to these Terms constitutes your acceptance of such changes.`;

const cookieContent = `Our website uses cookies to enhance your browsing experience and provide personalized content. Cookies are small text files that are stored on your device when you visit a website. They help us analyze website traffic, remember your preferences, and improve site performance.

We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until you delete them). We also use third-party cookies from service providers such as Google Analytics to understand how users interact with our website.

By using our website, you consent to the use of cookies in accordance with this Cookie Policy. You can control and manage cookies through your browser settings. However, please note that disabling cookies may affect the functionality of our website.

If you have any questions about our Cookie Policy, please contact us at contact@neuzenai.com.`;

export default Footer;

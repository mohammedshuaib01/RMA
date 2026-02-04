import React from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const [pastHero, setPastHero] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const heroHeight = window.innerHeight / 2;

            if (scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            if (scrollY > heroHeight) {
                setPastHero(true);
            } else {
                setPastHero(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} ${pastHero ? 'past-hero' : ''} ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="header-pill">
                <nav className={`header-nav ${mobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home <span className="arrow">▾</span></a></li>
                        <li className="nav-item"><a href="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About <span className="arrow">▾</span></a></li>
                        <li className="nav-item"><a href="/countries" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Countries <span className="arrow">▾</span></a></li>
                        <li className="nav-item"><a href="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services <span className="arrow">▾</span></a></li>
                        <li className="nav-item"><a href="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>

                <div className="header-logo">
                    <img src="RMA logo.png" alt="RMA Logo" />
                </div>

                <div className="header-actions">
                    <button className="btn btn-get-started">Get Started</button>
                    <div className="hamburger" onClick={toggleMobileMenu}>
                        <div className={`bar ${mobileMenuOpen ? 'animate' : ''}`}></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

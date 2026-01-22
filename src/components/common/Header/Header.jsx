import React from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const [pastHero, setPastHero] = React.useState(false);

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

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} ${pastHero ? 'past-hero' : ''}`}>
            <div className="header-pill">
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home" className="nav-link">Home <span className="arrow">▾</span></a></li>
                        <li className="nav-item"><a href="#pages" className="nav-link">Pages <span className="arrow">▾</span></a></li>
                        <li className="nav-item"><a href="#courses" className="nav-link">Courses <span className="arrow">▾</span></a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>

                <div className="header-logo">
                    
                    
                    <img src="RMA logo.png" alt="" />
                </div>

                <div className="header-actions">
                    <button className="btn btn-get-started">Get Started</button>
                    <div className="search-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

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
                    <div className="logo-icon">
                        <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                            <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5Z" />
                            <path d="M12,12L12,12C12,12 12,12 12,12L12,12C12,12 12,12 12,12L12,12C12,12 12,12 12,12L12,12C12,12 12,12 12,12L12,12L12,12Z" fill="none" stroke="white" strokeWidth="2" />
                            <path d="M12,6L17,11L12,16L7,11L12,6Z" fill="white" />
                        </svg>
                    </div>
                    <span className="logo-text">RMA</span>
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

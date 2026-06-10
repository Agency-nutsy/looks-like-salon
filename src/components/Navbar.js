'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Our Team', href: '/team' },
  { label: 'Offers', href: '/offers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // 1. Force scroll to top on page refresh
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 2. Handle sticky navbar styling
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavClick = (e, href) => {
    if (pathname === href) {
      e.preventDefault();
      setMenuOpen(false);
      setIsTransitioning(true);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
    }
  };

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="The Looks Like Home">
          <img src="/salon/looks-like-logo.png" alt="The Looks Like Logo" style={{ height: '70px', width: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className={styles.actions}>
          <Link href="/contact" className={styles.bookBtn}>
            Book Now
          </Link>

          {/* Mobile Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Gold bottom line */}
      <div className={styles.goldLine}></div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayActive : ''}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${isActive(link.href) ? styles.mobileLinkActive : ''}`}
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.mobileBookBtn}>
            Book Now
          </Link>
        </nav>
      </div>
      {/* Transition Overlay */}
      {isTransitioning && (
        <div className={styles.transitionWrap}>
          <div className={styles.transitionCircle}></div>
        </div>
      )}
    </header>
  );
}

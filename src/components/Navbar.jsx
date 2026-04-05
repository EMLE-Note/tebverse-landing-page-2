import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
          boxShadow: '0 4px 24px rgba(15, 23, 42, 0.02)',
          padding: '0.9rem 0',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="container navbar-inner"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          {/* RIGHT (Arabic): Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Logo height="34px" />
          </div>

          {/* CENTER: Nav Links (hidden on mobile) */}
          <div className="nav-links-desktop" style={{
            display: 'flex',
            gap: '2.5rem',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {[
              { href: '#problems', label: 'المشاكل' },
              { href: '#security', label: 'الأمان' },
              { href: '#pricing', label: 'الباقات' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  padding: '0.4rem 0',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--text)'
                  e.target.style.textShadow = '0 0 1px rgba(15,23,42,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-muted)'
                  e.target.style.textShadow = 'none'
                }}
              >
                {link.label}
                <div 
                  className="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0, height: '2px',
                    background: 'var(--primary)',
                    borderRadius: '2px',
                    opacity: 0, transform: 'scaleX(0.5)',
                    transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                    transformOrigin: 'center'
                  }}
                />
              </a>
            ))}
          </div>

          {/* LEFT (Arabic): CTA Button */}
          <div className="nav-cta-desktop" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a
              href="https://wa.me/message/AORIBIAVKSD7A1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.65rem 1.75rem',
                fontSize: '0.925rem',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%)',
                borderRadius: '24px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(156,0,240,0.2), inset 0 1px 1px rgba(255,255,255,0.2)',
                transition: 'all 0.25s ease',
                border: '1px solid rgba(156,0,240,0.1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 6px 20px rgba(156,0,240,0.25), inset 0 1px 1px rgba(255,255,255,0.2)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 14px rgba(156,0,240,0.2), inset 0 1px 1px rgba(255,255,255,0.2)'
              }}
            >
              واتساب الآن
            </a>
          </div>
        </div>
      </nav>

      <style>{`
        /* Minimal hover animation logic for navbar links */
        nav a:hover .nav-underline {
          opacity: 1 !important;
          transform: scaleX(1) !important;
        }
        
        /* Mobile navbar — simplified */
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-cta-desktop {
            display: none !important;
          }
          .navbar-inner {
            grid-template-columns: 1fr !important;
            justify-items: center;
            padding: 0 1rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar

import React from 'react'
import { motion } from 'framer-motion'
import {
  Smartphone, MonitorOff, UserCheck,
  Fingerprint, Scan, Lock, DownloadCloud
} from 'lucide-react'

const levels = [
  {
    icon: Smartphone,
    title: 'ربط الحساب بجهاز واحد',
    desc: 'كل طالب بيتربط بجهاز واحد فقط — مفيش مشاركة.',
  },
  {
    icon: MonitorOff,
    title: 'منع Screenshot & Screen Recording',
    desc: 'حماية كاملة من التسجيل بأي أداة.',
  },
  {
    icon: UserCheck,
    title: 'اسم ورقم الطالب داخل الفيديو',
    desc: 'Watermark مخصص لكل طالب داخل المحتوى.',
  },
  {
    icon: Fingerprint,
    title: 'تحقق بالبصمة أثناء المشاهدة',
    desc: 'تأكد إن الطالب هو اللي بيشوف.',
  },
  {
    icon: Scan,
    title: 'Face Recognition',
    desc: 'التعرف على الوجه للتحقق من الحضور الفعلي.',
  },
  {
    icon: Lock,
    title: 'Anti-Sharing & Anti-Download',
    desc: 'منع المشاركة والتنزيل المباشر من جذوره.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Security = () => {
  return (
    <>
      <section
        id="security"
        style={{
          padding: '7rem 0',
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(156,0,240,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 100% 100%, rgba(100,0,200,0.12) 0%, transparent 60%),
            linear-gradient(160deg, #12002a 0%, #1a0535 40%, #0d001f 100%)
          `,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient light blobs */}
        <div style={{
          position: 'absolute', top: '-120px', right: '-120px',
          width: '480px', height: '480px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,0,240,0.14) 0%, transparent 65%)',
          pointerEvents: 'none', filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '360px', height: '360px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,0,200,0.12) 0%, transparent 65%)',
          pointerEvents: 'none', filter: 'blur(40px)',
        }} />

        <div className="container" style={{ position: 'relative' }}>

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '4.5rem' }}
          >
            <span className="sec-badge-dark" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.45rem 1.1rem',
              background: 'rgba(156,0,240,0.2)',
              border: '1px solid rgba(156,0,240,0.35)',
              borderRadius: '999px',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--primary-light)',
              marginBottom: '1.4rem',
            }}>
              🔒 الأمان والحماية
            </span>

            <h2 className="sec-title" style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.85rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              maxWidth: '680px',
              margin: '0 auto 1.1rem',
            }}>
              5 مستويات حماية{' '}
              <span style={{
                background: 'linear-gradient(135deg, #d580ff 0%, #a020f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                تمنع تسريب الكورس فعليًا
              </span>
            </h2>

            <p className="sec-subtitle" style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.75,
              fontWeight: 500,
            }}>
              أكتر من مستوى حماية — مش إضافة، ده الأساس.
            </p>
          </motion.div>

          {/* ── Cards Grid ── */}
          <div className="sec-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}>
            {levels.map((l, i) => {
              const Icon = l.icon
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    boxShadow: '0 0 0 1px rgba(156,0,240,0.35), 0 20px 48px rgba(156,0,240,0.18)',
                  }}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(156,0,240,0.15)',
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                    cursor: 'default',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(156,0,240,0.4) 0%, rgba(100,0,180,0.4) 100%)',
                    border: '1px solid rgba(156,0,240,0.3)',
                    boxShadow: '0 0 16px rgba(156,0,240,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={24} color="#d580ff" strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 style={{
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      margin: '0 0 0.4rem',
                      lineHeight: 1.4,
                    }}>
                      {l.title}
                    </h4>
                    <p style={{
                      margin: 0,
                      color: 'rgba(255,255,255,0.45)',
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                    }}>
                      {l.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* ── Bottom CTA Bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sec-cta-bar"
            style={{
              marginTop: '6rem',
              padding: '1.75rem 2.25rem',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, var(--primary) 0%, #6800a6 100%)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 24px 60px rgba(100,0,160,0.25), inset 0 2px 20px rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.75rem',
              flexWrap: 'wrap',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle light leak effect */}
            <div style={{
              position: 'absolute', top: 0, right: '20%',
              width: '200px', height: '100%',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
              transform: 'skewX(-20deg)',
              pointerEvents: 'none',
            }} />

            {/* Premium Icon Container */}
            <div className="sec-cta-icon" style={{
              width: '64px', height: '64px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.15)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              position: 'relative',
              zIndex: 1,
            }}>
              <DownloadCloud size={30} color="#ffffff" strokeWidth={2} />
            </div>

            {/* Text Content */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              textAlign: 'right',
              position: 'relative',
              zIndex: 1,
              flex: 1,
              minWidth: 0,
            }}>
              <p className="sec-cta-title" style={{
                margin: 0,
                fontWeight: 800,
                fontSize: '1.35rem',
                color: '#ffffff',
                letterSpacing: '-0.01em',
              }}>
                Offline Download مشفّر داخل التطبيق فقط
              </p>
              <p className="sec-cta-desc" style={{
                margin: 0,
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1.05rem',
                fontWeight: 500,
                lineHeight: 1.5,
              }}>
                وتقدر تختار مستوى الحماية المناسب لكل كورس حسب قيمته.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <style>{`
        @media (max-width: 430px) {
          #security {
            padding: 3rem 0 !important;
          }
          
          .sec-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          .sec-grid > div {
            padding: 1.25rem !important;
            border-radius: 14px !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 0.85rem !important;
          }
          
          .sec-grid > div > div:first-child {
            width: 44px !important;
            height: 44px !important;
            min-width: 44px !important;
            border-radius: 12px !important;
          }
          
          .sec-grid > div h4 {
            font-size: 0.9rem !important;
          }
          
          .sec-grid > div p {
            font-size: 0.8rem !important;
          }
          
          .sec-title {
            font-size: 1.45rem !important;
          }
          
          .sec-subtitle {
            font-size: 0.9rem !important;
          }
          
          .sec-cta-bar {
            margin-top: 2rem !important;
            padding: 1.25rem !important;
            border-radius: 14px !important;
            flex-direction: column !important;
            text-align: center !important;
            gap: 1rem !important;
          }
          
          .sec-cta-icon {
            width: 48px !important;
            height: 48px !important;
            border-radius: 12px !important;
          }
          
          .sec-cta-bar > div:last-child {
            text-align: center !important;
          }
          
          .sec-cta-title {
            font-size: 1rem !important;
          }
          
          .sec-cta-desc {
            font-size: 0.85rem !important;
          }
          
          .sec-badge-dark {
            font-size: 0.8rem !important;
            padding: 0.35rem 0.85rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Security

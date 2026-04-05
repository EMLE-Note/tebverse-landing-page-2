import React from 'react'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const points = [
  'إدارة الطلبة',
  'حماية المحتوى',
  'تنظيم الكورس',
  'الجدولة',
  'التحصيل',
  'المتابعة',
  'التقارير',
  'الدعم الفني',
]

const stats = [
  { emoji: '🛡️', label: 'حماية المحتوى',      pct: 99,  display: '99%'  },
  { emoji: '📊', label: 'تقارير الطلبة',       pct: 95,  display: '95%'  },
  { emoji: '💳', label: 'تحصيل المستحقات',    pct: 100, display: '100%' },
  { emoji: '💡', label: 'الدعم الفني',         pct: 100, display: '24/7' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
}

const ValueProposal = () => {
  return (
    <>
      <section
        className="section"
        style={{
          background: 'linear-gradient(160deg, #ffffff 0%, var(--primary-lightest) 50%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}
      >
        {/* Soft background ambient blob */}
        <div style={{
          position: 'absolute', top: '40%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '650px', height: '650px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,0,240,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div
          className="container"
          style={{
            maxWidth: '1150px',
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '4.5rem' }}
          >
            <span className="section-badge">🏗️ البنية التحتية</span>
            <h2 className="vp-title" style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              fontWeight: 900,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              margin: '0 auto 1rem',
              maxWidth: '680px',
            }}>
              Teb Verse = البنية التحتية{' '}
              <span style={{ color: 'var(--primary)' }}>لكورسك</span>
            </h2>
            <p className="vp-subtitle" style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              fontWeight: 600,
              margin: '0 auto',
              lineHeight: 1.8,
              maxWidth: '650px',
            }}>
              مش منصة… ده نظام متكامل بيدير كل جوانب التشغيل والدعم الفني، عشان تركز بالكامل على التدريس.
            </p>
          </motion.div>

          {/* ── Two Column Layout (Centered Content Width) ── */}
          <div className="vp-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            width: '100%',
            alignItems: 'center',
            marginBottom: '3rem',
          }}>

            {/* ── LEFT: Checklist Features ── */}
            <div className="vp-checklist" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    background: '#ffffff',
                    padding: '1rem 1.25rem',
                    borderRadius: '16px',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.03)',
                    transition: 'all 0.25s ease',
                  }}
                  whileHover={{
                    y: -2,
                    boxShadow: '0 8px 20px rgba(156,0,240,0.06)',
                    borderColor: 'rgba(156,0,240,0.15)',
                  }}
                >
                  <div style={{
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CheckCircle size={14} color="var(--primary)" strokeWidth={3} />
                  </div>
                  <span style={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.4,
                  }}>
                    {p}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ── RIGHT: Premium Stats Card ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="vp-stats-card"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #faf5ff 100%)',
                borderRadius: '24px',
                padding: '2.5rem',
                border: '1px solid rgba(156,0,240,0.12)',
                boxShadow: '0 24px 60px rgba(15,23,42,0.06), 0 0 0 1px rgba(156,0,240,0.03)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              {/* Soft inner glow */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                background: 'linear-gradient(90deg, var(--primary) 0%, #e879f9 100%)',
                opacity: 0.8
              }} />

              {stats.map((item, i) => (
                <div key={i}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div style={{
                        width: '32px', height: '32px', borderRadius: '10px',
                        background: 'rgba(255,255,255,0.7)',
                        boxShadow: '0 2px 8px rgba(156,0,240,0.06)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.1rem'
                      }}>
                        {item.emoji}
                      </div>
                      <span style={{
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                      }}>
                        {item.label}
                      </span>
                    </div>
                    <span style={{
                      fontWeight: 900,
                      fontSize: '1rem',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-latin)',
                    }}>
                      {item.display}
                    </span>
                  </div>
                  <div style={{
                    height: '8px',
                    borderRadius: '999px',
                    background: 'var(--border-light)',
                    overflow: 'hidden',
                    width: '100%',
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        height: '100%',
                        borderRadius: '999px',
                        background: 'linear-gradient(90deg, var(--primary) 0%, #e879f9 100%)',
                        boxShadow: '0 0 10px rgba(156,0,240,0.3)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── Bottom Highlight Callout ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            style={{ width: '100%' }}
          >
            <div className="vp-callout" style={{
              maxWidth: '100%',
              padding: '1.75rem 2.5rem',
              background: 'linear-gradient(135deg, rgba(156,0,240,0.04) 0%, rgba(156,0,240,0.08) 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(156,0,240,0.15)',
              boxShadow: '0 12px 32px rgba(156,0,240,0.06), inset 0 2px 10px rgba(255,255,255,0.5)',
              position: 'relative',
              overflow: 'hidden',
            }}>
               {/* decorative gradient dot */}
               <div style={{
                 position: 'absolute', right: -20, bottom: -20, width: 120, height: 120,
                 background: 'var(--primary)', filter: 'blur(60px)', opacity: 0.15, borderRadius: '50%'
               }} />

              <p style={{
                margin: 0,
                fontWeight: 800,
                fontSize: '1.25rem',
                color: 'var(--primary-dark)',
                lineHeight: 1.6,
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                علشان تركز في التدريس فقط… وإحنا نشيل كل أعباء التشغيل. 🎯
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .vp-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 430px) {
          .vp-title {
            font-size: 1.5rem !important;
          }
          
          .vp-subtitle {
            font-size: 0.95rem !important;
            line-height: 1.65 !important;
          }
          
          .vp-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          .vp-checklist {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.6rem !important;
          }
          
          .vp-checklist > div {
            padding: 0.75rem 0.85rem !important;
            border-radius: 12px !important;
            gap: 0.5rem !important;
          }
          
          .vp-checklist span {
            font-size: 0.82rem !important;
          }
          
          .vp-stats-card {
            padding: 1.5rem !important;
            border-radius: 18px !important;
            gap: 1.5rem !important;
          }
          
          .vp-stats-card span {
            font-size: 0.85rem !important;
          }
          
          .vp-callout {
            padding: 1.25rem 1rem !important;
            border-radius: 14px !important;
          }
          
          .vp-callout p {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default ValueProposal

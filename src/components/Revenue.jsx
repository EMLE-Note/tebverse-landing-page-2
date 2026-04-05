import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, FileText, DollarSign, Headphones, Server, Cpu } from 'lucide-react'

const items = [
  { icon: TrendingUp,  label: 'نظام بيع متكامل' },
  { icon: FileText,    label: 'تقارير مالية واضحة' },
  { icon: DollarSign,  label: 'مستحقات دقيقة' },
  { icon: Headphones,  label: 'دعم فني 24/7' },
  { icon: Server,      label: 'استضافة وتحديثات' },
  { icon: Cpu,         label: 'AI Add-ons' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Revenue() {
  return (
    <>
      <section
        className="section"
        style={{
          background: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}
      >
        {/* Absolute Ambient Soft Glow */}
        <div style={{
          position: 'absolute', top: '10%', right: '-15%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,0,240,0.035) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div
          className="container"
          style={{ maxWidth: '1150px', margin: '0 auto', position: 'relative' }}
        >
          {/* ── Centered Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4.5rem' }}
          >
            <span className="section-badge" style={{ marginBottom: '1rem' }}>💸 الفلوس والمستحقات</span>
            <h2 className="rev-title" style={{
              fontSize: 'clamp(2.1rem, 3.5vw, 3rem)',
              fontWeight: 900,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              maxWidth: '700px',
              margin: '0 auto 1.25rem',
            }}>
              10%{' '}
              <span style={{ color: 'var(--primary)' }}>عمولة</span>{' '}
              مقابل شراكة تشغيل كاملة
            </h2>
            <p className="rev-subtitle" style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: 1.8,
              fontWeight: 600,
            }}>
              إنت مش بتاخد مجرد مكان ترفع عليه فيديو — إنت بتاخد نظام بيع متكامل،
              تقارير ذكية، حماية قوية، ودعم فني ورا ظهرك طول الوقت.
            </p>
          </motion.div>

          {/* ── Two Column Luxury Layout ── */}
          <div className="rev-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4.5rem',
            alignItems: 'start',
          }}>

            {/* ── RIGHT (in DOM, visually LEFT in RTL): Callout & CTA ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              {/* Value Prominent Callout */}
              <div className="rev-callout" style={{
                padding: '2.5rem 2.25rem',
                background: 'linear-gradient(145deg, var(--primary-lightest) 0%, #f7effe 100%)',
                borderRadius: '24px',
                border: '1px solid rgba(156,0,240,0.1)',
                borderRight: '5px solid var(--primary)',
                boxShadow: '0 12px 32px rgba(15,23,42,0.03), inset 0 2px 20px rgba(255,255,255,0.7)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', left: '-20px', top: '-20px',
                  width: '100px', height: '100px',
                  background: 'var(--primary)', opacity: 0.04, borderRadius: '50%', filter: 'blur(20px)'
                }} />

                <h3 className="rev-callout-title" style={{
                  margin: '0 0 0.85rem',
                  fontWeight: 900,
                  fontSize: '1.5rem',
                  color: 'var(--primary-dark)',
                  lineHeight: 1.4,
                }}>
                  شريك تشغيل… مش مجرد مزوّد خدمة 🤝
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  fontWeight: 600,
                }}>
                  معاك من أول ما تبدأ لحد ما تكبّر — بنضمنلك بيانات واضحة، دعم حقيقي لطلابك، وأرباح شفافة توصلك في وقتها.
                </p>
              </div>

              {/* Premium Stats Row */}
              <div className="rev-stats-row" style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}>
                {[
                  { value: '24/7', label: 'دعم فني جاهز' },
                  { value: '100%', label: 'شفافية مالية' },
                  { value: '10%', label: 'فقط عمولة' },
                ].map((s, i) => (
                  <div key={i} style={{
                    flex: '1 1 110px',
                    background: '#ffffff',
                    borderRadius: '16px',
                    padding: '1.25rem 1rem',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 4px 14px rgba(15,23,42,0.02)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    transition: 'transform 0.25s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 900,
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-latin)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hero CTA Button */}
              <a
                href="https://wa.me/message/AORIBIAVKSD7A1"
                target="_blank"
                rel="noopener noreferrer"
                className="rev-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.2rem 2.5rem',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%)',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(156,0,240,0.25), inset 0 1px 1px rgba(255,255,255,0.2)',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  border: '1px solid rgba(156,0,240,0.1)',
                  width: '100%',
                  marginTop: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(156,0,240,0.35), inset 0 1px 1px rgba(255,255,255,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(156,0,240,0.25), inset 0 1px 1px rgba(255,255,255,0.2)'
                }}
              >
                احجز مكالمة تعارف مجانية
              </a>
            </motion.div>

            {/* ── LEFT (in DOM, visually RIGHT in RTL): Feature Cards Grid ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rev-features-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
              }}>
                {items.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={cardVariants}
                      style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '1.35rem 1.5rem',
                        border: '1px solid rgba(156,0,240,0.06)',
                        boxShadow: '0 8px 30px rgba(15,23,42,0.03)',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        textAlign: 'right',
                        gap: '1.25rem',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'default',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      whileHover={{
                        y: -4,
                        boxShadow: '0 16px 40px rgba(156,0,240,0.06), 0 4px 12px rgba(15,23,42,0.03)',
                        borderColor: 'rgba(156,0,240,0.15)',
                      }}
                    >
                      {/* Subtle side glare */}
                      <div style={{
                        position: 'absolute', top: '10%', bottom: '10%', right: 0, width: '2px',
                        background: 'linear-gradient(180deg, transparent, rgba(156,0,240,0.15), transparent)',
                      }} />

                      {/* Icon container */}
                      <div style={{
                        width: '48px', height: '48px',
                        borderRadius: '14px',
                        background: 'rgba(156,0,240,0.04)',
                        border: '1px solid rgba(156,0,240,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.6)',
                        color: 'var(--primary)',
                        flexShrink: 0,
                      }}>
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      
                      <span style={{
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        color: 'var(--text)',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.4,
                        flexGrow: 1,
                      }}>
                        {item.label}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .rev-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 430px) {
          .rev-title {
            font-size: 1.5rem !important;
          }
          
          .rev-subtitle {
            font-size: 0.9rem !important;
            line-height: 1.65 !important;
          }
          
          .rev-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .rev-callout {
            padding: 1.5rem 1.25rem !important;
            border-radius: 16px !important;
          }
          
          .rev-callout-title {
            font-size: 1.15rem !important;
          }
          
          .rev-callout p {
            font-size: 0.9rem !important;
          }
          
          .rev-stats-row {
            gap: 0.6rem !important;
          }
          
          .rev-stats-row > div {
            padding: 0.85rem 0.5rem !important;
            border-radius: 12px !important;
            flex: 1 1 80px !important;
          }
          
          .rev-stats-row > div > div:first-child {
            font-size: 1.2rem !important;
          }
          
          .rev-stats-row > div > div:last-child {
            font-size: 0.75rem !important;
          }
          
          .rev-cta-btn {
            padding: 0.95rem 1.5rem !important;
            font-size: 0.95rem !important;
            border-radius: 12px !important;
            min-height: 48px;
          }
          
          .rev-features-grid {
            grid-template-columns: 1fr !important;
            gap: 0.6rem !important;
          }
          
          .rev-features-grid > div {
            padding: 1rem 1.15rem !important;
            border-radius: 12px !important;
            gap: 0.85rem !important;
          }
          
          .rev-features-grid > div > div {
            width: 40px !important;
            height: 40px !important;
            min-width: 40px !important;
          }
          
          .rev-features-grid span {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Revenue
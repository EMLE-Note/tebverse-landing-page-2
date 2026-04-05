import React from 'react'
import { motion } from 'framer-motion'
import {
  Users, Share2, ShieldOff, Headphones,
  Layers, CreditCard
} from 'lucide-react'

const problems = [
  { icon: Users,       title: 'مفيش تحكم حقيقي في دخول وخروج الطلاب' },
  { icon: Share2,      title: 'الحسابات بتتشارك بين أكتر من شخص' },
  { icon: ShieldOff,   title: 'الكورس بيتسرّب بعد أول دفعة' },
  { icon: Headphones,  title: 'دعم فني ضعيف بيأثر على تجربة الطلبة' },
  { icon: Layers,      title: 'المحتوى غير منظم وصعب المتابعة' },
  { icon: CreditCard,  title: 'التحصيل المالي غير واضح أو غير دقيق' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Problems = () => {
  return (
    <>
      <section
        id="problems"
        style={{
          padding: '7rem 0',
          background:
            'linear-gradient(160deg, var(--primary-lightest) 0%, #ffffff 55%, var(--primary-lightest) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: '-100px', left: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,0,240,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', right: '-80px',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,0,240,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative' }}>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span className="section-badge" style={{ marginBottom: '1.25rem' }}>
              ⚠️ المشاكل الشائعة
            </span>
            <h2 className="problems-title" style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
              fontWeight: 900,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              maxWidth: '640px',
              margin: '0 auto 1rem',
            }}>
              المشاكل الحقيقية اللي بتواجه{' '}
              <span style={{ color: 'var(--primary)' }}>صناع الكورسات</span>
            </h2>
            <p className="problems-subtitle" style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.75,
              fontWeight: 500,
            }}>
              لو بتحس بواحدة منهم، إنت في المكان الصح.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="problems-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem',
          }}>
            {problems.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 20px 48px rgba(156,0,240,0.12), 0 8px 16px rgba(15,23,42,0.06)',
                  }}
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '1.75rem 2rem',
                    border: '1px solid rgba(156,0,240,0.1)',
                    boxShadow: '0 4px 20px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.1rem',
                    cursor: 'default',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  }}
                >
                  <div style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, var(--primary-light) 0%, #ede0ff 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(156,0,240,0.12)',
                  }}>
                    <Icon size={22} color="var(--primary)" strokeWidth={2} />
                  </div>
                  <p style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    {p.title}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Transition Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="problems-banner"
            style={{
              padding: '2.75rem 3rem',
              background: 'linear-gradient(135deg, var(--text) 0%, #1e293b 100%)',
              borderRadius: '24px',
              textAlign: 'center',
              boxShadow: '0 24px 64px rgba(15,23,42,0.18)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <p style={{ margin: '0 0 0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '1rem', fontWeight: 600 }}>
              علشان كده
            </p>
            <h3 className="banner-title" style={{
              fontSize: 'clamp(1.35rem, 2.5vw, 2rem)',
              fontWeight: 900,
              color: '#fff',
              margin: '0 0 0.75rem',
              letterSpacing: '-0.01em',
            }}>
              Teb Verse اتبنت من الأساس كنظام متكامل
            </h3>
            <p className="banner-highlight" style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
              fontWeight: 800,
              color: 'var(--primary-light)',
              margin: '0 0 0.75rem',
            }}>
              إدارة تعليم + أمان + تحصيل + تشغيل
            </p>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem' }}>
              مش مجرد مكان ترفع عليه فيديو.
            </p>
          </motion.div>

        </div>
      </section>

      <style>{`
        @media (max-width: 430px) {
          #problems {
            padding: 3rem 0 !important;
          }
          
          .problems-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
            margin-bottom: 2rem !important;
          }
          
          .problems-grid > div {
            padding: 1.15rem 1rem !important;
            border-radius: 14px !important;
            gap: 0.85rem !important;
          }
          
          .problems-grid > div > div:first-child {
            width: 40px !important;
            height: 40px !important;
            border-radius: 12px !important;
          }
          
          .problems-grid > div p {
            font-size: 0.9rem !important;
          }
          
          .problems-banner {
            padding: 1.5rem 1.25rem !important;
            border-radius: 16px !important;
          }
          
          .banner-title {
            font-size: 1.15rem !important;
          }
          
          .banner-highlight {
            font-size: 0.95rem !important;
          }
          
          .problems-subtitle {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Problems

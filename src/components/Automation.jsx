import React from 'react'
import { motion } from 'framer-motion'
import { Upload, FolderTree, Clock, CheckSquare, Zap, LayoutGrid } from 'lucide-react'

const features = [
  {
    icon: Upload,
    title: 'رفع فيديوهات، PDF، Audio، Quiz',
    desc: 'دعم كامل لجميع أنواع المحتوى التعليمي.',
  },
  {
    icon: FolderTree,
    title: 'تقسيم الكورس بفولدرات ومستويات',
    desc: 'نظّم محتواك بشكل احترافي وسهّل متابعة الطلبة.',
  },
  {
    icon: Clock,
    title: 'جدولة نزول المحاضرات تلقائيًا',
    desc: 'حدّد موعد نزول كل محاضرة وسيب السيستم يشتغل.',
  },
  {
    icon: CheckSquare,
    title: 'التزام ثابت قدّام الطلبة',
    desc: 'تحكّم في تقدم الطالب وضمان المتابعة الصحيحة.',
  },
  {
    icon: Zap,
    title: 'كورس منظم مش فوضى',
    desc: 'بنية واضحة وتجربة تعليمية سلسة من أول يوم.',
  },
  {
    icon: LayoutGrid,
    title: 'لوحة تحكم شاملة ومبسطة',
    desc: 'إدارة كل حاجة من مكان واحد بدون تعقيد.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Automation = () => {
  return (
    <>
      <section
        className="section"
        style={{
          background: 'linear-gradient(160deg, var(--surface) 0%, #ffffff 50%, var(--surface) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Soft ambient blob */}
        <div style={{
          position: 'absolute', top: '-100px', right: '20%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,0,240,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div
          className="container"
          style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}
        >
          {/* ── Centered Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '3.75rem' }}
          >
            <span className="section-badge">⚡ إمكانيات النظام</span>

            <h2 className="auto-title" style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
              fontWeight: 900,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              maxWidth: '640px',
              margin: '0 auto 1rem',
            }}>
              ارفع مرة…{' '}
              <span style={{ color: 'var(--primary)' }}>والسيستم يشتغل لوحده</span>
            </h2>

            <p className="auto-subtitle" style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.75,
              fontWeight: 500,
            }}>
              اسمك يستاهل منصة قوية… مش جروب واتساب.
            </p>
          </motion.div>

          {/* ── Cards Grid — 3 columns, centered ── */}
          <div className="auto-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 16px 40px rgba(156,0,240,0.12), 0 4px 12px rgba(15,23,42,0.08)',
                    borderColor: 'rgba(156,0,240,0.22)',
                  }}
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '2rem',
                    border: '1px solid rgba(156,0,240,0.1)',
                    boxShadow: '0 4px 16px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)',
                    textAlign: 'center',
                    transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                    cursor: 'default',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  {/* Icon container */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, var(--primary-light) 0%, #ede0ff 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(156,0,240,0.14)',
                    flexShrink: 0,
                  }}>
                    <Icon size={26} color="var(--primary)" strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 style={{
                      fontWeight: 800,
                      fontSize: '1rem',
                      color: 'var(--text)',
                      margin: '0 0 0.4rem',
                      lineHeight: 1.45,
                    }}>
                      {f.title}
                    </h4>
                    <p style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.65,
                    }}>
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .auto-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 430px) {
          .auto-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          
          .auto-grid > div {
            padding: 1.25rem !important;
            border-radius: 14px !important;
            flex-direction: row !important;
            text-align: right !important;
            gap: 0.85rem !important;
          }
          
          .auto-grid > div > div:first-child {
            width: 46px !important;
            height: 46px !important;
            min-width: 46px !important;
            border-radius: 12px !important;
          }
          
          .auto-grid > div > div:last-child {
            text-align: right !important;
          }
          
          .auto-grid > div h4 {
            font-size: 0.9rem !important;
          }
          
          .auto-grid > div p {
            font-size: 0.8rem !important;
          }
          
          .auto-title {
            font-size: 1.45rem !important;
          }
          
          .auto-subtitle {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Automation

import React from 'react'
import { motion } from 'framer-motion'
import {
  UserPlus, Calendar, RefreshCcw,
  Eye, BarChart2, Settings2
} from 'lucide-react'

const features = [
  { icon: UserPlus,    title: 'إضافة أو إيقاف أي طالب في أي وقت',       desc: 'تحكم فوري بدون تعقيد.' },
  { icon: Calendar,   title: 'تحديد مدة الاشتراك بسهولة',                desc: 'اضبط الوصول بدقة لكل طالب.' },
  { icon: RefreshCcw, title: 'سحب المحتوى تلقائيًا بعد انتهاء المدة',   desc: 'أتمتة كاملة بدون تدخل يدوي.' },
  { icon: Eye,        title: 'Watching History لكل طالب',                desc: 'شوف مين بيشوف وإيه.' },
  { icon: BarChart2,  title: 'تقارير التفاعل والالتزام للطلبة',          desc: 'بيانات واضحة تساعدك تتخذ قرارات.' },
  { icon: Settings2,  title: 'إدارة أكثر دقة بدون تعقيد',               desc: 'واجهة بسيطة وقرارات احترافية.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Control() {
  return (
    <section
      className="section"
      style={{
        background: 'linear-gradient(160deg, #ffffff 0%, var(--primary-lightest) 50%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient blob */}
      <div style={{
        position: 'absolute', bottom: '-100px', left: '15%',
        width: '420px', height: '420px', borderRadius: '50%',
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
          <span className="section-badge">🎛️ التحكم في الطلبة</span>

          <h2 style={{
            fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
            fontWeight: 900,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            maxWidth: '620px',
            margin: '0 auto 1rem',
          }}>
            إنت صاحب القرار…{' '}
            <span style={{ color: 'var(--primary)' }}>مش المنصة</span>
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.75,
            fontWeight: 500,
          }}>
            تحكم كامل في وصول الطلبة للمحتوى، مدة الاشتراك، وسجل المشاهدة
            مع رؤية أوضح للتفاعل والالتزام.
          </p>
        </motion.div>

        {/* ── 3-Column Cards Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}>
          {features.map((item, i) => {
            const Icon = item.icon
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
                  padding: '1.85rem',
                  border: '1px solid rgba(156,0,240,0.1)',
                  boxShadow: '0 4px 16px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                  cursor: 'default',
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, var(--primary-light) 0%, #ede0ff 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 3px 10px rgba(156,0,240,0.13)',
                  flexShrink: 0,
                }}>
                  <Icon size={23} color="var(--primary)" strokeWidth={1.9} />
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
                    {item.title}
                  </h4>
                  <p style={{
                    margin: 0,
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .control-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .control-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Control
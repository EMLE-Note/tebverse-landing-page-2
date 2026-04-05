import React from 'react'
import { motion } from 'framer-motion'
import { Video, Clock, Calendar, UserCheck, Monitor, BarChart2 } from 'lucide-react'

const primaryFeature = {
  icon: Video,
  title: 'محاضرات أونلاين مجدولة عبر',
  highlight: 'Zoom Integration',
  desc: 'مش هتحتاج تبعت لينكات يدوية. السيستم بيكريت اللينك وبيفتح المحاضرة في ميعادها وتأخذ الغياب تلقائي.',
}

const secondaryFeatures = [
  { icon: Clock,      title: 'فتح تلقائي في موعد المحاضرة' },
  { icon: UserCheck,  title: 'تسجيل حضور وغياب دقيق' },
  { icon: Monitor,    title: 'تنظيم محاضرات السناتر (أوفلاين)' },
  { icon: BarChart2,  title: 'Attendance Reports تفصيلية' },
]

const schedule = [
  { time: '09:00 AM', title: 'محاضرة الفيزياء - الفصل الثالث', type: 'online', typeLabel: 'Zoom', color: 'var(--primary)', status: 'past' },
  { time: '11:30 AM', title: 'مراجعة الكيمياء العضوية',         type: 'offline', typeLabel: 'سنتر', color: '#0ea5e9', status: 'active' },
  { time: '02:00 PM', title: 'جلسة حل أسئلة (Q&A)',              type: 'online', typeLabel: 'Zoom', color: 'var(--primary)', status: 'upcoming' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Sessions() {
  return (
    <>
      <section
        className="section"
        style={{
          background: 'linear-gradient(160deg, #ffffff 0%, var(--primary-lightest) 50%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Soft Ambient Glow */}
        <div style={{
          position: 'absolute', top: '10%', right: '-150px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,0,240,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div
          className="container"
          style={{ maxWidth: '1150px', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '4.5rem' }}
          >
            <span className="section-badge">🎥 الأونلاين والأوفلاين</span>
            <h2 className="sess-title" style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              fontWeight: 900,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              maxWidth: '680px',
              margin: '0 auto 1rem',
            }}>
              إدارة كل محاضراتك{' '}
              <span style={{ color: 'var(--primary)' }}>بدون مجهود</span>
            </h2>
            <p className="sess-subtitle" style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.75,
              fontWeight: 500,
            }}>
              نظم حصص السناتر ومحاضرات الأونلاين من مكان واحد. السيستم بيفهم جدولك وبينفذه.
            </p>
          </motion.div>

          {/* ── 2-Column Split Layout ── */}
          <div className="sess-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>

            {/* ── LEFT: Feature Architecture ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* HERO Feature Card (Zoom) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="sess-hero-card"
                style={{
                  background: 'linear-gradient(145deg, #ffffff 0%, var(--primary-lightest) 100%)',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  border: '1px solid rgba(156,0,240,0.15)',
                  boxShadow: '0 12px 40px rgba(156,0,240,0.08), 0 2px 10px rgba(15,23,42,0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(156,0,240,0.25)',
                  marginBottom: '1.5rem',
                }}>
                  <primaryFeature.icon size={28} color="#ffffff" strokeWidth={1.8} />
                </div>
                <h3 className="sess-hero-title" style={{
                  fontWeight: 900, fontSize: '1.35rem', color: 'var(--text)',
                  margin: '0 0 0.75rem', lineHeight: 1.4,
                }}>
                  {primaryFeature.title}{' '}
                  <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-latin)' }}>
                    {primaryFeature.highlight}
                  </span>
                </h3>
                <p style={{
                  margin: 0, fontSize: '1rem', color: 'var(--text-secondary)',
                  lineHeight: 1.7, fontWeight: 500,
                }}>
                  {primaryFeature.desc}
                </p>
              </motion.div>

              {/* Secondary Features Grid (2x2) */}
              <div className="sess-secondary-grid" style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem',
              }}>
                {secondaryFeatures.map((f, i) => {
                  const Icon = f.icon;
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
                        padding: '1.25rem',
                        border: '1px solid var(--border-light)',
                        boxShadow: '0 2px 8px rgba(15,23,42,0.03)',
                        display: 'flex', alignItems: 'center', gap: '0.85rem',
                        transition: 'all 0.25s ease',
                      }}
                      whileHover={{
                        y: -2,
                        boxShadow: '0 8px 20px rgba(156,0,240,0.06)',
                        borderColor: 'rgba(156,0,240,0.15)',
                      }}
                    >
                      <div style={{
                        width: '38px', height: '38px', borderRadius: '10px',
                        background: 'var(--primary-light)', color: 'var(--primary)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={18} strokeWidth={2.2} />
                      </div>
                      <p style={{
                        margin: 0, fontWeight: 700, fontSize: '0.9rem',
                        color: 'var(--text-secondary)', lineHeight: 1.4,
                      }}>
                        {f.title}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>


            {/* ── RIGHT: Premium Dashboard Mockup ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ position: 'relative' }}
            >
              {/* The Dashboard Window */}
              <div className="sess-dashboard" style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(15,23,42,0.06)',
                boxShadow: '0 20px 60px rgba(15,23,42,0.08), 0 0 0 1px rgba(156,0,240,0.03)',
                overflow: 'hidden',
              }}>
                {/* Window Header */}
                <div style={{
                  background: '#f8fafc',
                  padding: '1rem 1.5rem',
                  borderBottom: '1px solid var(--border-light)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#eab308' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22c55e' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                     <Calendar size={16} color="var(--text-muted)" />
                     <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                       جدول اليوم
                     </span>
                  </div>
                </div>

                {/* Schedule List */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {schedule.map((s, i) => (
                    <div
                      key={i}
                      className="sess-schedule-item"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '1.25rem',
                        padding: '1.25rem',
                        borderRadius: '16px',
                        background: s.status === 'active' ? 'rgba(156,0,240,0.03)' : '#ffffff',
                        border: s.status === 'active' ? '1px solid rgba(156,0,240,0.2)' : '1px solid var(--border-light)',
                        position: 'relative',
                      }}
                    >
                      {/* Active Indicator Line */}
                      {s.status === 'active' && (
                        <div style={{
                          position: 'absolute', right: -1, top: '20%', bottom: '20%', width: 3,
                          background: 'var(--primary)', borderRadius: '4px 0 0 4px',
                        }} />
                      )}

                      {/* Time */}
                      <div style={{
                        minWidth: '75px',
                        textAlign: 'center',
                      }}>
                        <span style={{
                          display: 'block',
                          fontFamily: 'var(--font-latin)',
                          fontWeight: 800,
                          fontSize: '1rem',
                          color: s.status === 'active' ? 'var(--primary)' : 'var(--text)',
                        }}>
                          {s.time.split(' ')[0]}
                        </span>
                        <span style={{
                           fontFamily: 'var(--font-latin)',
                           fontWeight: 600, fontSize: '0.8rem', color: 'var(--text-muted)'
                        }}>
                          {s.time.split(' ')[1]}
                        </span>
                      </div>

                      {/* Meta Data */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p className="sess-item-title" style={{
                          margin: '0 0 0.35rem',
                          fontWeight: 700,
                          fontSize: '1.05rem',
                          color: 'var(--text)',
                        }}>
                          {s.title}
                        </p>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          background: s.type === 'online' ? 'var(--primary-light)' : '#e0f2fe',
                          color: s.type === 'online' ? 'var(--primary)' : '#0ea5e9',
                          fontSize: '0.75rem', fontWeight: 800, fontFamily: 'var(--font-latin)'
                        }}>
                          {s.type === 'online' ? <Video size={12} /> : <Monitor size={12} />}
                          {s.typeLabel}
                        </span>
                      </div>

                      {/* Status Dot */}
                      <div style={{
                        width: 10, height: 10, borderRadius: '50%',
                        background: s.status === 'active' ? '#22c55e' : 'var(--border-light)',
                        boxShadow: s.status === 'active' ? '0 0 8px rgba(34,197,94,0.4)' : 'none',
                        flexShrink: 0,
                      }} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative dots pattern behind window */}
              <div style={{
                position: 'absolute', bottom: -20, left: -20, width: 100, height: 100,
                backgroundImage: 'radial-gradient(rgba(156,0,240,0.2) 2px, transparent 2px)',
                backgroundSize: '16px 16px',
                zIndex: -1,
              }} />
            </motion.div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sess-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 430px) {
          .sess-title {
            font-size: 1.45rem !important;
          }
          
          .sess-subtitle {
            font-size: 0.9rem !important;
          }
          
          .sess-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .sess-hero-card {
            padding: 1.5rem !important;
            border-radius: 16px !important;
          }
          
          .sess-hero-card > div:first-child {
            width: 46px !important;
            height: 46px !important;
            border-radius: 12px !important;
            margin-bottom: 1rem !important;
          }
          
          .sess-hero-title {
            font-size: 1.1rem !important;
          }
          
          .sess-hero-card p {
            font-size: 0.85rem !important;
          }
          
          .sess-secondary-grid {
            grid-template-columns: 1fr !important;
            gap: 0.6rem !important;
          }
          
          .sess-secondary-grid > div {
            padding: 0.85rem !important;
            border-radius: 12px !important;
            gap: 0.65rem !important;
          }
          
          .sess-secondary-grid > div > div:first-child {
            width: 34px !important;
            height: 34px !important;
            min-width: 34px !important;
          }
          
          .sess-secondary-grid p {
            font-size: 0.82rem !important;
          }
          
          .sess-dashboard {
            border-radius: 16px !important;
          }
          
          .sess-dashboard > div:first-child {
            padding: 0.75rem 1rem !important;
          }
          
          .sess-dashboard > div:last-child {
            padding: 0.85rem !important;
            gap: 0.6rem !important;
          }
          
          .sess-schedule-item {
            padding: 0.85rem !important;
            border-radius: 12px !important;
            gap: 0.75rem !important;
          }
          
          .sess-schedule-item > div:first-of-type {
            min-width: 55px !important;
          }
          
          .sess-schedule-item > div:first-of-type span:first-child {
            font-size: 0.85rem !important;
          }
          
          .sess-item-title {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Sessions
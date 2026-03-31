import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, PhoneCall, ArrowLeft } from 'lucide-react'

const Hero = () => {
  return (
    <section
      className="section hero"
      style={{
        paddingTop: '7rem',
        paddingBottom: '6rem',
        background: 'linear-gradient(160deg, var(--primary-lightest) 0%, #ffffff 50%, var(--primary-lightest) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '360px', height: '360px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(156,0,240,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '280px', height: '280px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(156,0,240,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="section-badge" style={{ fontSize: '0.9rem' }}>
            🚀 منصة Teb Verse — نظام التعليم الآمن
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
            fontWeight: 900,
            color: 'var(--text)',
            lineHeight: 1.15,
            maxWidth: '720px',
            margin: '0 auto 1.25rem',
            letterSpacing: '-0.02em',
          }}
        >
          حوّل كورسك لمنظومة تعليمية{' '}
          <span style={{
            color: 'var(--primary)',
            position: 'relative',
            display: 'inline-block',
          }}>
            آمنة وذكية
          </span>
        </motion.h1>

        {/* Sub-headline highlight */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            fontWeight: 700,
            color: 'var(--primary)',
            marginBottom: '1.25rem',
            letterSpacing: '-0.01em',
          }}
        >
          مش مجرد فيديوهات مرفوعة
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
            color: 'var(--text-muted)',
            maxWidth: '580px',
            margin: '0 auto 2.75rem',
            lineHeight: 1.85,
            fontWeight: 500,
          }}
        >
          منصة Teb Verse بتديك تحكم كامل في{' '}
          <strong style={{ color: 'var(--text-secondary)', fontWeight: 700 }}>محتواك – طلبتك – فلوسك</strong>
          {' '}مع أعلى مستوى أمان ضد تسريب الكورسات في السوق.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '5rem' }}
        >
          <a
            href="#booking"
            className="btn btn-primary btn-lg"
            style={{ gap: '0.6rem' }}
          >
            <PhoneCall size={20} />
            احجز مكالمة تعارف 10 دقائق
          </a>
          <a
            href="https://wa.me/message/AORIBIAVKSD7A1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg"
            style={{ gap: '0.6rem' }}
          >
            <MessageCircle size={20} />
            كلّمنا واتساب الآن
          </a>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          style={{
            display: 'inline-flex',
            gap: '0',
            justifyContent: 'center',
            flexWrap: 'wrap',
            background: '#fff',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow)',
            padding: '0',
            overflow: 'hidden',
          }}
        >
          {[
            { value: '7+', label: 'سنين خبرة' },
            { value: '30,000+', label: 'متعلم' },
            { value: '1M+', label: 'ساعة مشاهدة' },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: '1.5rem 2.5rem',
              textAlign: 'center',
              borderLeft: i < 2 ? '1px solid var(--border)' : 'none',
              minWidth: '140px',
            }}>
              <div style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                fontWeight: 900,
                color: 'var(--primary)',
                lineHeight: 1,
                marginBottom: '0.35rem',
                fontFamily: 'var(--font-latin)',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                fontWeight: 600,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

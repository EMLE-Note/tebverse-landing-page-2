import React from 'react'
import { MessageCircle, PhoneCall } from 'lucide-react'

const FinalCTA = () => {
  return (
    <>
      <section 
        id="booking" 
        className="section final-cta" 
        style={{ 
          textAlign: 'center', 
          padding: '10rem 0', 
          backgroundColor: 'var(--primary-light)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle ambient glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,0,240,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative' }}>
          <h2 className="final-cta-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
            خلينا نوريك المنصة عمليًا في 10 دقائق
          </h2>
          <div className="final-cta-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/message/AORIBIAVKSD7A1" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg" 
              style={{ padding: '1.25rem 2.5rem', fontSize: '1.2rem', boxShadow: 'var(--shadow-lg)' }}
            >
              <PhoneCall size={24} />
              احجز مكالمة الآن
            </a>
            <a 
              href="https://wa.me/message/AORIBIAVKSD7A1" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg" 
              style={{ padding: '1.25rem 2.5rem', fontSize: '1.2rem', boxShadow: 'var(--shadow-lg)' }}
            >
              <MessageCircle size={24} />
              كلّمنا واتساب الآن
            </a>
          </div>
          <p className="final-cta-note" style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>
            مكالمة 10 دقائق وابدا وانت مطمن علي محتواك
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 430px) {
          .final-cta {
            padding: 4rem 0 5rem !important;
          }
          
          .final-cta-title {
            font-size: 1.5rem !important;
            line-height: 1.35 !important;
            margin-bottom: 1.5rem !important;
          }
          
          .final-cta-buttons {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          
          .final-cta-buttons .btn {
            width: 100% !important;
            padding: 0.95rem 1.5rem !important;
            font-size: 0.95rem !important;
          }
          
          .final-cta-note {
            font-size: 0.85rem !important;
            margin-top: 1.25rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default FinalCTA

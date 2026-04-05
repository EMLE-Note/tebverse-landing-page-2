import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const faqs = [
    { 
      q: "هل فيه تطبيق موبايل؟", 
      a: "نعم، Android وiOS." 
    },
    { 
      q: "هل موجود على Google Play؟", 
      a: "التطبيق متاح عبر APK وHuawei Store وXiaomi Store وTestFlight. اخترنا بنية أمان أعلى من قيود المتاجر التقليدية لحماية المحتوى بشكل أقوى." 
    }
  ]

  const [open, setOpen] = useState(null)

  return (
    <>
      <section id="faq" className="section faq">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="faq-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>الأسئلة الشائعة</h2>
          <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((f, i) => (
              <div key={i} className="card faq-card" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => setOpen(open === i ? null : i)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <h4 className="faq-q-text" style={{ margin: 0, lineHeight: '1.4' }}>{f.q}</h4>
                  <div className="faq-icon-wrapper" style={{ flexShrink: 0 }}>
                    {open === i ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
                  </div>
                </div>
                {open === i && (
                  <div className="faq-a-text" style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 430px) {
          .faq {
             padding: 3rem 0 !important;
          }
          .faq-title {
             font-size: 1.75rem !important;
             margin-bottom: 1.5rem !important;
          }
          .faq-card {
             padding: 1.2rem !important;
             border-radius: 14px !important;
          }
          .faq-q-text {
             font-size: 1.05rem !important;
          }
          .faq-a-text {
             font-size: 0.95rem !important;
             margin-top: 0.8rem !important;
          }
          .faq-icon-wrapper {
             width: 20px;
             height: 20px;
             display: flex;
             align-items: center;
             justify-content: center;
          }
          .faq-icon {
             width: 20px !important;
             height: 20px !important;
          }
        }
      `}</style>
    </>
  )
}

export default FAQ

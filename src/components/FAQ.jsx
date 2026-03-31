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
    <section id="faq" className="section faq">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>الأسئلة الشائعة</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((f, i) => (
            <div key={i} className="card" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => setOpen(open === i ? null : i)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0 }}>{f.q}</h4>
                {open === i ? <ChevronUp /> : <ChevronDown />}
              </div>
              {open === i && (
                <div style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

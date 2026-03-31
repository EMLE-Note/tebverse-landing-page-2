import React from 'react'
import { MessageCircle, PhoneCall } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section id="booking" className="section final-cta" style={{ textAlign: 'center', padding: '10rem 0', backgroundColor: 'var(--primary-light)' }}>
      <div className="container">
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>خلينا نوريك المنصة عمليًا في 10 دقائق</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://yourbookinglink.com" className="btn btn-primary btn-lg" style={{ padding: '1.25rem 2.5rem', fontSize: '1.2rem', boxShadow: 'var(--shadow-lg)' }}>
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
        <p style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>
          مكالمة 10 دقائق وابدا وانت مطمن علي محتواك
        </p>
      </div>
    </section>
  )
}

export default FinalCTA

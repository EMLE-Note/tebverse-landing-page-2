import React from 'react'
import { ShieldAlert, Download, AppWindow, Apple } from 'lucide-react'

const Objection = () => {
  return (
    <section className="section objection" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#ef4444', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
             <ShieldAlert size={60} />
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
            ليه مش موجودين على Google Play؟ لأننا اخترنا أمانك قبل أي حاجة.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textAlign: 'justify', lineHeight: '1.8' }}>
            بعض مستويات الحماية المتقدمة اللي بنوفرها لمنع نسخ وتصوير ومشاركة الكورسات غير مسموح بها داخل سياسات Google Play. 
            كان عندنا خيارين: نضعف الأمان علشان نكون على المتجر، أو نحافظ على أقصى حماية لمحتوى الدكاترة. 
            <strong> اخترنا الأمان.</strong>
          </p>
          
          <div style={{ marginTop: '3rem' }}>
             <p style={{ fontWeight: 700, marginBottom: '2rem' }}>التطبيق متاح عبر:</p>
             <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                 <div className="card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white' }}>
                    <Download size={24} /> <span>APK Secure</span>
                 </div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                 <div className="card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white' }}>
                    <AppWindow size={24} /> <span>Huawei / Xiaomi</span>
                 </div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                 <div className="card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white' }}>
                    <Apple size={24} /> <span>TestFlight (iOS)</span>
                 </div>
               </div>
             </div>
          </div>
          
          <div style={{ marginTop: '3rem', fontWeight: 800, color: 'var(--primary)' }}>
            Teb Verse منصة Security-First قبل ما تكون App.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Objection

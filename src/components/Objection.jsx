import React from 'react'
import { ShieldAlert, Download, AppWindow, Apple } from 'lucide-react'

const Objection = () => {
  return (
    <>
      <section className="section objection" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ color: '#ef4444', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
               <ShieldAlert className="obj-icon-main" size={60} />
            </div>
            <h2 className="obj-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
              ليه مش موجودين على Google Play؟ لأننا اخترنا أمانك قبل أي حاجة.
            </h2>
            <p className="obj-desc" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textAlign: 'justify', lineHeight: '1.8' }}>
              بعض مستويات الحماية المتقدمة اللي بنوفرها لمنع نسخ وتصوير ومشاركة الكورسات غير مسموح بها داخل سياسات Google Play. 
              كان عندنا خيارين: نضعف الأمان علشان نكون على المتجر، أو نحافظ على أقصى حماية لمحتوى الدكاترة. 
              <strong> اخترنا الأمان.</strong>
            </p>
            
            <div style={{ marginTop: '3rem' }}>
               <p className="obj-subtitle" style={{ fontWeight: 700, marginBottom: '2rem' }}>التطبيق متاح عبر:</p>
               <div className="obj-grid" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                 <div className="obj-item-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                   <div className="card obj-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white' }}>
                      <Download className="obj-icon" size={24} /> <span>APK Secure</span>
                   </div>
                 </div>
                 <div className="obj-item-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                   <div className="card obj-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white' }}>
                      <AppWindow className="obj-icon" size={24} /> <span>Huawei / Xiaomi</span>
                   </div>
                 </div>
                 <div className="obj-item-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                   <div className="card obj-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white' }}>
                      <Apple className="obj-icon" size={24} /> <span>TestFlight (iOS)</span>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="obj-footer" style={{ marginTop: '3rem', fontWeight: 800, color: 'var(--primary)' }}>
              Teb Verse منصة Security-First قبل ما تكون App.
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 430px) {
          .objection {
             padding: 4rem 0 !important;
          }
          .obj-title {
             font-size: 1.45rem !important;
             line-height: 1.4 !important;
          }
          .obj-icon-main {
             width: 48px !important;
             height: 48px !important;
          }
          .obj-desc {
             font-size: 0.95rem !important;
             text-align: right !important; /* Better for arabic readability on small screens */
          }
          .obj-grid {
             flex-direction: column !important;
             gap: 1rem !important;
             align-items: stretch !important;
          }
          .obj-item-wrap {
            width: 100% !important;
          }
          .obj-card {
             width: 100% !important;
             justify-content: center !important;
             padding: 1.2rem !important;
             border-radius: 16px !important;
          }
          .obj-icon {
             width: 20px !important;
             height: 20px !important;
          }
          .obj-card span {
             font-size: 1rem !important;
             font-weight: 600 !important;
          }
          .obj-subtitle {
             font-size: 1.1rem !important;
             margin-bottom: 1.5rem !important;
          }
          .obj-footer {
             font-size: 1.1rem !important;
             marginTop: 2rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Objection

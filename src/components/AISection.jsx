import React from 'react'
import { Brain, Sparkles, Database, BarChart } from 'lucide-react'

const AISection = () => {
  const features = [
    { icon: <Sparkles />, text: "إنشاء أسئلة بالذكاء الاصطناعي" },
    { icon: <Database />, text: "شروحات تلقائية" },
    { icon: <Database />, text: "إدارة Q-Bank" },
    { icon: <BarChart />, text: "تحليل أداء الطلبة" },
  ]

  return (
    <>
      <section className="section ai-section" style={{ backgroundColor: 'var(--text)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="ai-header-wrapper">
            <div className="ai-badge" style={{ display: 'inline-flex', padding: '0.5rem 1rem', borderRadius: '2rem', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '1rem', alignItems: 'center' }}>
              <Brain className="ai-badge-icon" size={20} style={{ color: 'var(--accent)' }} />
              <span style={{ marginRight: '0.5rem', fontWeight: 600 }}>إضافة اختيارية ذكية</span>
            </div>
            <h2 className="ai-title" style={{ color: 'white', fontSize: '2.5rem' }}>حوّل الكورس لبنك أسئلة ذكي ( Q-Bank )</h2>
          </div>
          
          <div className="ai-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {features.map((f, i) => (
              <div key={i} className="ai-card" style={{ 
                padding: '2rem', 
                borderRadius: '1rem', 
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <div className="ai-icon-wrapper" style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {React.cloneElement(f.icon, { size: 40, className: "ai-feature-icon" })}
                </div>
                <h4 className="ai-card-title" style={{ color: 'white', margin: 0 }}>{f.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 430px) {
          .ai-section {
             padding: 3rem 0 !important;
          }
          .ai-header-wrapper {
             margin-bottom: 2.5rem !important;
          }
          .ai-badge {
             padding: 0.4rem 0.8rem !important;
             font-size: 0.85rem !important;
             margin-bottom: 0.8rem !important;
          }
          .ai-badge-icon {
             width: 18px !important;
             height: 18px !important;
          }
          .ai-title {
             font-size: 1.6rem !important;
             line-height: 1.3 !important;
          }
          .ai-grid {
             grid-template-columns: 1fr 1fr !important; /* Use 2x2 grid on mobile */
             gap: 1rem !important;
          }
          .ai-card {
             padding: 1.5rem 1rem !important;
             border-radius: 14px !important;
          }
          .ai-icon-wrapper {
             margin-bottom: 0.8rem !important;
          }
          .ai-feature-icon {
             width: 32px !important;
             height: 32px !important;
          }
          .ai-card-title {
             font-size: 0.95rem !important;
             line-height: 1.4 !important;
          }
        }
        @media (max-width: 350px) {
           .ai-grid {
              grid-template-columns: 1fr !important;
           }
        }
      `}</style>
    </>
  )
}

export default AISection

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
    <section className="section ai-section" style={{ backgroundColor: 'var(--text)', color: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', padding: '0.5rem 1rem', borderRadius: '2rem', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '1rem' }}>
            <Brain size={20} style={{ color: 'var(--accent)' }} />
            <span style={{ marginRight: '0.5rem', fontWeight: 600 }}>إضافة اختيارية ذكية</span>
          </div>
          <h2 style={{ color: 'white', fontSize: '2.5rem' }}>حوّل الكورس لبنك أسئلة ذكي ( Q-Bank )</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {features.map((f, i) => (
            <div key={i} style={{ 
              padding: '2rem', 
              borderRadius: '1rem', 
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                {React.cloneElement(f.icon, { size: 40 })}
              </div>
              <h4 style={{ color: 'white', margin: 0 }}>{f.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AISection

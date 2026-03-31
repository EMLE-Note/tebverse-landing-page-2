import React from 'react'
import { Check } from 'lucide-react'

const PackageTeaser = () => {
  const packages = [
    { name: "Starter", desc: "للي بيبدأوا", highlights: ["إدارة أساسية", "حماية أولية"] },
    { name: "Pro", desc: "للكورسات الكبيرة والبراندات", highlights: ["تحكم كامل", "أعلى أمان", "تقارير متقدمة"] },
    { name: "Enterprise", desc: "للبرامج والسناتر", highlights: ["حلول مخصصة", "دعم مخصص", "شراكة كاملة"] }
  ]

  return (
    <section id="pricing" className="section pricing" style={{ backgroundColor: 'var(--primary-light)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>الباقات</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>تفاصيل الباقات في المكالمة</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {packages.map((p, i) => (
            <div key={i} className="card" style={{ backgroundColor: 'white', padding: '3rem 2rem', border: p.name === 'Pro' ? '2px solid var(--primary)' : '1px solid var(--border)', position: 'relative' }}>
              {p.name === 'Pro' && (
                <div style={{ position: 'absolute', top: '-12px', right: '50%', transform: 'translateX(50%)', backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 700 }}>الأكثر طلبًا</div>
              )}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{p.name}</h3>
              <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: '2rem' }}>{p.desc}</p>
              
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'right' }}>
                {p.highlights.map((h, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Check size={18} color="var(--primary)" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackageTeaser

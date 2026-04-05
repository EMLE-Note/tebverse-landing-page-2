import React from 'react'
import { Check } from 'lucide-react'

const PackageTeaser = () => {
  const packages = [
    { name: "Starter", desc: "للي بيبدأوا", highlights: ["إدارة أساسية", "حماية أولية"] },
    { name: "Pro", desc: "للكورسات الكبيرة والبراندات", highlights: ["تحكم كامل", "أعلى أمان", "تقارير متقدمة"] },
    { name: "Enterprise", desc: "للبرامج والسناتر", highlights: ["حلول مخصصة", "دعم مخصص", "شراكة كاملة"] }
  ]

  return (
    <>
      <section id="pricing" className="section pricing" style={{ backgroundColor: 'var(--primary-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="pkg-title" style={{ marginBottom: '1rem' }}>الباقات</h2>
          <p className="pkg-subtitle" style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>تفاصيل الباقات في المكالمة</p>
          
          <div className="pkg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {packages.map((p, i) => (
              <div key={i} className="card pkg-card" style={{ backgroundColor: 'white', padding: '3rem 2rem', border: p.name === 'Pro' ? '2px solid var(--primary)' : '1px solid var(--border)', position: 'relative' }}>
                {p.name === 'Pro' && (
                  <div className="pkg-badge" style={{ position: 'absolute', top: '-12px', right: '50%', transform: 'translateX(50%)', backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 700 }}>الأكثر طلبًا</div>
                )}
                <h3 className="pkg-card-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{p.name}</h3>
                <p className="pkg-card-desc" style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: '2rem' }}>{p.desc}</p>
                
                <ul className="pkg-list" style={{ listStyle: 'none', padding: 0, textAlign: 'right' }}>
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
      <style>{`
        @media (max-width: 430px) {
          .pricing {
             padding: 3rem 0 !important;
          }
          .pkg-grid {
             grid-template-columns: 1fr !important;
             gap: 1.5rem !important;
          }
          .pkg-card {
             padding: 2rem 1.5rem !important;
             border-radius: 16px !important;
          }
          .pkg-title {
             font-size: 1.75rem !important;
          }
          .pkg-subtitle {
             font-size: 1rem !important;
             margin-bottom: 2rem !important;
          }
          .pkg-card-title {
            font-size: 1.25rem !important;
          }
          .pkg-card-desc {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
          }
          .pkg-list li span {
            font-size: 0.95rem !important;
          }
          .pkg-badge {
            font-size: 0.75rem !important;
            padding: 0.2rem 0.8rem !important;
            white-space: nowrap !important;
          }
        }
      `}</style>
    </>
  )
}

export default PackageTeaser

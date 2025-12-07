import React from "react";

export default function Specialization() {
  const items = [
    {title:"Custom Design", desc:"Bespoke patterns, brand identity & logos."},
    {title:"Bulk Manufacturing", desc:"Competitive pricing for large orders."},
    {title:"Fast Turnaround", desc:"Efficient production and delivery."},
  ];
  return (
    <section className="geb-container" style={{padding:'24px 16px'}}>
      <h3 style={{color:'#fff', textAlign:'center', marginBottom:18}}>What sets us apart</h3>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))', gap:16}}>
        {items.map((it,idx)=>(
          <div className="geb-card" key={idx}>
            <h4 style={{margin:0, color:'#fff'}}>{it.title}</h4>
            <p style={{color:'rgba(255,255,255,0.8)', marginTop:8}}>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

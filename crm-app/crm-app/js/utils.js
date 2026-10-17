const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const STATES=['Nuevo','Contactado','Interesado','Propuesta enviada','Negociación','Cliente','No interesado'];
const SOURCES=['WhatsApp','Instagram','Facebook','Google','Referido','Llamada','Página web','Otro'];
const PH=/^[+\d\s()-]{6,20}$/,EM=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ymd=(d=new Date())=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const addDays=n=>{const d=new Date();d.setDate(d.getDate()+n);return ymd(d)};
const fmt=s=>s?s.split('-').reverse().join('/'):'—';
const money=n=>new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(n||0);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const digits=s=>String(s||'').replace(/\D/g,'');
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('show'),2500)}
function download(name,text,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function followOf(c){const closed=['Cliente','No interesado'].includes(c.state);if(!c.nextContact||closed)return{k:'none',cls:'',txt:'⚪ Sin seguimiento programado'};const t=ymd();
if(c.nextContact<t)return{k:'over',cls:'over',txt:'🔴 Contacto atrasado · '+fmt(c.nextContact)};if(c.nextContact===t)return{k:'today',cls:'today',txt:'🟡 Contactar hoy'};return{k:'future',cls:'future',txt:'🟢 Próximo contacto · '+fmt(c.nextContact)}}

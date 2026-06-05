// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px'});
function animateRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animateRing)}animateRing();
document.querySelectorAll('a,button,.service-card,.why-card,.tech-item,.nav-cta').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.classList.add('expand');cursor.style.width='6px';cursor.style.height='6px'});
  el.addEventListener('mouseleave',()=>{ring.classList.remove('expand');cursor.style.width='12px';cursor.style.height='12px'});
});

// Navbar scroll
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('navbar');
  nav.classList.toggle('scrolled',window.scrollY>50);
  updatePageDots();
});

// Mobile menu
function toggleMenu(){
  const m=document.getElementById('mobileMenu');
  m.classList.toggle('open');
  m.style.display=m.classList.contains('open')?'flex':'none';
}

// Scroll reveal
const revealObserver=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>revealObserver.observe(el));

// Page dots
function updatePageDots(){
  const sections=['hero','services','about','why','process','tech','contact'];
  const dots=document.querySelectorAll('.page-dot');
  let active=0;
  sections.forEach((id,i)=>{
    const el=document.getElementById(id);
    if(el&&el.getBoundingClientRect().top<=window.innerHeight/2)active=i;
  });
  dots.forEach((d,i)=>d.classList.toggle('active',i===active));
}
document.querySelectorAll('.page-dot').forEach((dot,i)=>{
  const sections=['hero','services','about','why','process','tech','contact'];
  dot.addEventListener('click',()=>{
    const el=document.getElementById(sections[i]);
    if(el)el.scrollIntoView({behavior:'smooth'});
  });
});

// Counter animation
function animateCounter(el){
  const target=parseInt(el.dataset.count);
  const suffix=el.textContent.includes('+')?'+':'';
  let current=0;
  const step=target/60;
  const t=setInterval(()=>{
    current=Math.min(current+step,target);
    el.textContent=Math.floor(current)+suffix;
    if(current>=target)clearInterval(t);
  },25);
}
const counterObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){animateCounter(e.target);counterObserver.unobserve(e.target)}});
},{threshold:0.5});
document.querySelectorAll('[data-count]').forEach(el=>counterObserver.observe(el));

// Form submission
function submitForm(){
  const name=document.getElementById('fname').value;
  const email=document.getElementById('femail').value;
  const service=document.getElementById('fservice').value;
  const msg=document.getElementById('fmessage').value;
  if(!name||!email||!service||!msg){
    showToast('Please fill in all required fields.','⚠️');return;
  }
  showToast("Message sent! We'll be in touch within 24 hours.",'✅');
  document.getElementById('fname').value='';
  document.getElementById('femail').value='';
  document.getElementById('fphone').value='';
  document.getElementById('fcompany').value='';
  document.getElementById('fservice').value='';
  document.getElementById('fmessage').value='';
}
function showToast(msg,icon){
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  t.querySelector('.toast-icon').textContent=icon||'✅';
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),4000);
}

// Smooth scroll for all nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const target=document.querySelector(a.getAttribute('href'));
    if(target)target.scrollIntoView({behavior:'smooth'});
  });
});
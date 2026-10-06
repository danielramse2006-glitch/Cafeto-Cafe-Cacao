const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
menuBtn?.addEventListener('click',()=>navLinks?.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const revealEls=[...document.querySelectorAll('.reveal')];
revealEls.forEach(el=>el.classList.add('show'));

// Animaciones opcionales: la página nunca depende de ellas para mostrarse.
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}
  }),{threshold:.08});
  revealEls.forEach(el=>io.observe(el));
}

window.addEventListener('scroll',()=>{
  const img=document.querySelector('.hero-main img');
  if(img&&window.innerWidth>800){
    img.style.transform=`scale(1.04) translateY(${Math.min(window.scrollY*.035,18)}px)`;
  }
},{passive:true});

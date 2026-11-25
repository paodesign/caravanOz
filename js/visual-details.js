/* Shared, dependency-free icon and motion layer. Content works without it. */
(() => {
  'use strict';
  const paths = {
    arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
    diagonal:'<path d="M6 18 18 6M6 6h12v12"/>',
    down:'<path d="M12 4v16m-6-6 6 6 6-6"/>',
    plane:'<path d="m22 12-8-3-3-7H8l2 8-5-1-2-3H1l2 6-2 6h2l2-3 5-1-2 8h3l3-7 8-3Z"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',
    map:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5ZM9 3v16m6-14v16"/>',
    chat:'<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2v-9.5A8.5 8.5 0 0 1 10.5 4h2A8.5 8.5 0 0 1 21 11.5Z"/><path d="M7 11h9m-9 4h6"/>',
    cup:'<path d="M4 8h12v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8Zm12 1h2a3 3 0 0 1 0 6h-2M7 3v2m4-2v2"/>',
    caravan:'<path d="M3 16V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8H3Zm16 0h3v3M3 19h2m4 0h10"/><circle cx="7" cy="18" r="2"/><path d="M6 8h4v4H6V8Zm8 8V9h3v7"/>',
    paw:'<ellipse cx="7" cy="7" rx="2" ry="2.6"/><ellipse cx="17" cy="7" rx="2" ry="2.6"/><ellipse cx="3.5" cy="12" rx="1.8" ry="2.2"/><ellipse cx="20.5" cy="12" rx="1.8" ry="2.2"/><path d="M7 19c-1-2 1-5 3-6a4 4 0 0 1 4 0c2 1 4 4 3 6-1 2-3 0-5 0s-4 2-5 0Z"/>',
    passport:'<rect x="5" y="2" width="15" height="20" rx="2"/><path d="M5 6H3m2 6H3m2 6H3m6 1h7"/><circle cx="12.5" cy="10" r="4"/><path d="M8.5 10h8m-4-4c-2 2-2 6 0 8 2-2 2-6 0-8Z"/>',
    play:'<path d="m9 5 11 7-11 7V5Z"/>',
    pin:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    wallet:'<path d="M20 7H5a2 2 0 0 1 0-4h13v4M3 5v14a2 2 0 0 0 2 2h15V7m0 5h-5v5h5"/><path d="M16.5 14.5h.1"/>',
    book:'<path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    print:'<path d="M7 8V3h10v5M7 17H4V8h16v9h-3M7 14h10v7H7v-7Z"/><path d="M16 11h1"/>',
    headphones:'<path d="M3 13v-1a9 9 0 0 1 18 0v1M3 13h4v8H5a2 2 0 0 1-2-2v-6Zm18 0h-4v8h2a2 2 0 0 0 2-2v-6Z"/>',
    shield:'<path d="m12 2 8 3v6c0 5-8 11-8 11S4 16 4 11V5l8-3Z"/><path d="m8 11 3 3 5-5"/>'
  };
  const icon = name => `<svg class="modern-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name] || paths.compass}</svg>`;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const seen = new WeakSet();
  let observer;
  const sectionIcons = {antes:'passport','primer-dia':'sun','primera-semana':'map','primer-mes':'compass',checklist:'check',presupuesto:'wallet',emergencias:'shield',palabras:'book',fuentes:'book'};
  function enhance() {
    document.querySelectorAll('.start-grid>a').forEach((a,i) => {
      if(a.querySelector('.step-icon')) return;
      a.insertAdjacentHTML('afterbegin', `<span class="step-icon">${icon(['passport','compass','chat'][i])}</span>`);
    });
    document.querySelectorAll('.m-plan-card .p-icon').forEach((el,i) => {if(!el.dataset.modern){el.innerHTML=icon(el.dataset.icon || ['cup','caravan','paw'][i]);el.dataset.modern='true';}});
    document.querySelectorAll('.gcard').forEach(el => {
      if(el.querySelector('.topic-icon'))return;
      const id=el.id;
      const name=id.includes('arrival')||id.includes('visas')?'passport':id.includes('budget')||id.includes('costo')?'wallet':id.includes('camping')?'sun':id.includes('por-que')?'compass':'book';
      el.insertAdjacentHTML('afterbegin',`<span class="topic-icon">${icon(name)}</span>`);
    });
    document.querySelectorAll('.ytplay').forEach(el=>{if(!el.dataset.modern){el.innerHTML=icon('play');el.dataset.modern='true';}});
    document.querySelectorAll('.ticket-plane,.flight-path').forEach(el=>{if(!el.dataset.modern){el.innerHTML=icon('plane');el.dataset.modern='true';}});
    const guideMark=document.querySelector('.guide-mark');
    if(guideMark&&!guideMark.dataset.modern){guideMark.innerHTML=icon('passport')+'<span>GUÍA DE<br>LLEGADA</span>';guideMark.dataset.modern='true';}
    document.querySelectorAll('.contents nav a').forEach(a=>{if(!a.querySelector('svg'))a.insertAdjacentHTML('afterbegin',icon(sectionIcons[a.hash.slice(1)]));});
    document.querySelectorAll('.guide-body>section>.stage').forEach(el=>{if(!el.querySelector('svg'))el.insertAdjacentHTML('afterbegin',icon(sectionIcons[el.parentElement.id]));});
    const print=document.querySelector('#printGuide');
    if(print&&!print.querySelector('svg'))print.insertAdjacentHTML('afterbegin',icon('print'));
    // Replace inconsistent text arrows only in interface labels, never article copy.
    document.querySelectorAll('.btn,.hero-text-link,.photo-stamp,.start-grid strong,.gcard .more,.guide-hero .button,.closing .button').forEach(el => {
      const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);
      const texts=[];while(walker.nextNode())if(/[↗→↓]/.test(walker.currentNode.textContent))texts.push(walker.currentNode);
      texts.forEach(node=>{const parts=node.textContent.split(/([↗→↓])/);const frag=document.createDocumentFragment();parts.forEach(part=>{if(/[↗→↓]/.test(part)){const wrapper=document.createElement('span');wrapper.className='link-icon';wrapper.innerHTML=icon(part==='↗'?'diagonal':part==='↓'?'down':'arrow');frag.append(wrapper);}else frag.append(document.createTextNode(part));});node.replaceWith(frag);});
    });
    document.querySelectorAll('.hero-note>span').forEach(el=>{if(!el.dataset.modern){el.innerHTML=icon('pin');el.dataset.modern='true';}});
    document.querySelectorAll('.wave').forEach(el=>{el.innerHTML=icon('sun');});
    document.querySelectorAll('.section-head,.start-grid>a,.gcard,.m-plan-card,.about-media,.guide-body>section,.closing,.free-guide-inner').forEach(el=>{
      if(seen.has(el))return;seen.add(el);if(observer)observer.observe(el);
    });
  }
  document.addEventListener('DOMContentLoaded',()=>{
    if('IntersectionObserver' in window) observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      observer.unobserve(entry.target);
      if(reduced.matches||typeof entry.target.animate!=='function')return;
      entry.target.animate([{opacity:.45,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.16,1,.3,1)'});
    }),{threshold:.08});
    enhance();
    // Only content containers refresh after data.json arrives.
    ['carousel','guidesGrid','diarySlider'].forEach(id=>{const el=document.getElementById(id);if(el)new MutationObserver(enhance).observe(el,{childList:true});});
    const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
    let pending=false;
    function update(){const length=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${length>0?Math.min(1,scrollY/length):0})`;pending=false;}
    addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update);}},{passive:true});addEventListener('resize',update);update();
    if('IntersectionObserver' in window&&document.querySelector('.contents')){
      const links=[...document.querySelectorAll('.contents nav a')];
      const active=new IntersectionObserver(entries=>{entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top).slice(0,1).forEach(e=>links.forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}));},{rootMargin:'-15% 0px -65% 0px',threshold:0});
      document.querySelectorAll('.guide-body>section[id]').forEach(el=>active.observe(el));
    }
    reduced.addEventListener('change',()=>{if(reduced.matches)document.getAnimations().forEach(animation=>animation.cancel());});
  });
})();

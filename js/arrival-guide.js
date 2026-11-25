(() => {
  'use strict';
  const storageKey = 'caravanoz-arrival-checklist-v1';
  const boxes = [...document.querySelectorAll('[data-step]')];
  let saved = {};
  try {saved = JSON.parse(localStorage.getItem(storageKey) || '{}') || {};} catch {}
  boxes.forEach(box => {box.checked = saved[box.dataset.step] === true;});
  function update(save) {
    const done = boxes.filter(box => box.checked).length;
    document.getElementById('guideProgress').value = done;
    document.getElementById('progressText').textContent = `${done} de ${boxes.length} pasos completados`;
    if (save) try {localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(boxes.map(box => [box.dataset.step, box.checked]))));} catch {}
  }
  boxes.forEach(box => box.addEventListener('change', () => update(true)));
  document.getElementById('resetChecklist').addEventListener('click', () => {boxes.forEach(box => {box.checked = false;});update(true);});
  document.getElementById('printGuide').addEventListener('click', () => window.print());
  update(false);
})();

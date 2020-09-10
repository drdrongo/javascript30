panels = document.querySelectorAll('.panel');

function addOpenClass() {
  panels.forEach(panel => panel.classList.remove('open'));
  this.classList.add('open');
}

function addActiveClass() {
  const x = this;
  panels.forEach(panel => panel.classList.remove('open-active'));
  setTimeout(function() { x.classList.add('open-active'); }, 400);
}


panels.forEach(panel => { panel.addEventListener('click', addOpenClass) });
panels.forEach(panel => { panel.addEventListener('click', addActiveClass) });

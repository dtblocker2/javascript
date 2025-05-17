function navigateDOM() {
  const target = document.getElementById('target');

  // 🔼 Parent node
  const parent = target.parentElement;
  parent.style.border = '2px dashed blue';

  // 🔽 First child of parent
  const firstChild = parent.firstElementChild;
  firstChild.classList.add('highlight');

  const lastChild = parent.lastElementChild;
  lastChild.classList.add('highlight2');

  // ➡️ Next sibling
  const next = target.nextElementSibling;
  if (next) {
    next.style.color = 'red';
  }

  // ⬅️ Previous sibling
  const prev = target.previousElementSibling;
  if (prev) {
    prev.style.fontWeight = 'bold';
  }

  // 🔝 Root container
  const container = target.closest('#container');
  container.style.padding = '10px';
}

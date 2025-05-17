function changeHTML() {
  // Change existing content using innerHTML
  const header = document.getElementById('header');
  header.innerHTML = '🔄 Header Changed with JavaScript';

  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '<p>📝 This content was changed completely.</p>';
}

function addHTML() {
  // Create and add new elements using createElement
  const contentDiv = document.getElementById('content');

  const newPara = document.createElement('p');
  newPara.className = 'new-item';
  newPara.textContent = '✅ New paragraph added dynamically.';
  
  contentDiv.appendChild(newPara);
}

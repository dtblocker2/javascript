const box = document.getElementById('myBox');

function hideBox() {
  box.style.display = 'none';
}

function showBox() {
  box.style.display = 'block';
}

function toggleBox() {
  if (box.style.display === 'none' || getComputedStyle(box).display === 'none') {
    showBox();
  } else {
    hideBox();
  }
}

/**
 * | Property             | Element Visible? | Space Reserved? |
| -------------------- | ---------------- | --------------- |
| `display: none`      | ❌ No             | ❌ No            |
| `visibility: hidden` | ❌ No             | ✅ Yes           |

 */
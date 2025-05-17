/**
 * | Event        | Description                                      |
| ------------ | ------------------------------------------------ |
| `mousemove`  | Fires when the mouse moves over an element       |
| `mouseenter` | Fires once when the mouse enters an element      |
| `mouseleave` | Fires once when the mouse leaves an element      |
| `mouseover`  | Fires when the mouse enters an element (bubbles) |
| `mouseout`   | Fires when the mouse leaves an element (bubbles) |

 */

/**
 * | Event       | Description                         |
| ----------- | ----------------------------------- |
| `click`     | Fires on a left mouse button click  |
| `dblclick`  | Fires on a double-click             |
| `mousedown` | Fires when mouse button is pressed  |
| `mouseup`   | Fires when mouse button is released |

 */

const box = document.getElementById('box');
const log = document.getElementById('log');

function logEvent(eventName, e) {
  const msg = `[${new Date().toLocaleTimeString()}] ${eventName} @ (${e.clientX}, ${e.clientY})`;
  const line = document.createElement('div');
  line.textContent = msg;
  log.prepend(line);
}

// Mouse movement events
box.addEventListener('mousemove', e => logEvent('mousemove', e));
box.addEventListener('mouseenter', e => logEvent('mouseenter', e));
box.addEventListener('mouseleave', e => logEvent('mouseleave', e));
box.addEventListener('mouseover', e => logEvent('mouseover', e));
box.addEventListener('mouseout', e => logEvent('mouseout', e));

// Mouse click events
box.addEventListener('click', e => logEvent('click', e));
box.addEventListener('dblclick', e => logEvent('dblclick', e));
box.addEventListener('mousedown', e => logEvent('mousedown', e));
box.addEventListener('mouseup', e => logEvent('mouseup', e));

box.addEventListener('click', () => {
  box.style.backgroundColor = '#cceeff';
  setTimeout(() => box.style.backgroundColor = '#f0f0f0', 300);
});

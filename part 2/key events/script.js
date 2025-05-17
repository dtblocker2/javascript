/**
 * | Event      | Description                                               |
| ---------- | --------------------------------------------------------- |
| `keydown`  | Fires when a key is pressed down                          |
| `keyup`    | Fires when a key is released                              |
| `keypress` | (Deprecated) Fires when a key is pressed (for characters) |

 */

const input = document.getElementById('inputBox');
const log = document.getElementById('log');

function logEvent(eventName, e) {
  const modifiers = [
    e.ctrlKey ? 'Ctrl' : '',
    e.altKey ? 'Alt' : '',
    e.shiftKey ? 'Shift' : '',
    e.metaKey ? 'Meta' : ''
  ].filter(Boolean).join('+');

  const msg = `[${new Date().toLocaleTimeString()}] ${eventName}: "${e.key}" (code: ${e.code})` +
              (modifiers ? ` with ${modifiers}` : '');
  const line = document.createElement('div');
  line.textContent = msg;
  log.prepend(line);
}

// Block Enter key
input.addEventListener('keydown', e => {
  logEvent('keydown', e);

  if (e.key === 'Enter') {
    e.preventDefault();
    alert('❌ Enter key is blocked!');
  }

  // Ctrl + S shortcut (e.g., Save)
  if (e.ctrlKey && e.key.toLowerCase() === 's') {
    e.preventDefault();
    alert('💾 Ctrl + S shortcut triggered!');
  }

  // Arrow keys handling
  if (e.key.startsWith('Arrow')) {
    e.preventDefault();
    alert(`➡️ You pressed ${e.key}`);
  }
});

input.addEventListener('keyup', e => logEvent('keyup', e));

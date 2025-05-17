/**
 * | Type             | Source                                           | Array-like? | `forEach()`? | Live?       |
| ---------------- | ------------------------------------------------ | ----------- | ------------ | ----------- |
| `NodeList`       | `querySelectorAll`, `childNodes`                 | ✅ Yes       | ✅ Mostly\*   | ❌ (usually) |
| `HTMLCollection` | `getElementsByTagName`, `getElementsByClassName` | ✅ Yes       | ❌ No         | ✅ Yes       |
| `Array`          | Manual creation or `Array.from()`                | ✅ Yes       | ✅ Yes        | ❌ No        |

 */

//🔁 Converting NodeList to Array
const items = document.querySelectorAll('li');
const arrayItems = Array.from(items);

// Now you can use array methods like map, filter, etc.
const texts = arrayItems.map(item => item.textContent);
console.log(texts);

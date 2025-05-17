function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(`Count is ${count}`);
    };
}

const counter = outer(); // outer() runs and returns inner()

counter(); // Count is 1
counter(); // Count is 2
counter(); // Count is 3

function createSecret(secret) {
    return function revealSecret() {
        console.log(`The secret is: ${secret}`);
    };
}

const getSecret = createSecret("I love JavaScript");
getSecret(); // The secret is: I love JavaScript

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // ?
    }, 1000);
}
// Output: 3, 3, 3 (not 0, 1, 2)

for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // 0, 1, 2
        }, 1000);
    })(i);
}

/**
 * | Concept   | Explanation                                 |
| --------- | ------------------------------------------- |
| Closure   | A function that remembers its outer scope   |
| Use case  | Private variables, function factories, more |
| Key point | Inner function **closes over** variables    |

 */

for (var i = 0; i < 3; i++) {
    const btn = document.createElement('button');
    btn.textContent = `Option ${i}`;
    btn.addEventListener('click', function () {
        console.log(`You clicked option ${i}`); // ❌ always prints 3
    });
    document.body.appendChild(btn);
}


for (var i = 0; i < 3; i++) {
    const btn = document.createElement('button');
    btn.textContent = `Option ${i}`;

    (function(index) {
        btn.addEventListener('click', function () {
            console.log(`You clicked option ${index}`);
        });
    })(i); // Pass current i to IIFE (closure)

    document.body.appendChild(btn);
}

function createScoreTracker() {
    let score = 0;

    return function addPoint() {
        score++;
        console.log(`Score: ${score}`);
    };
}

const updateScore = createScoreTracker();

updateScore(); // Score: 1
updateScore(); // Score: 2
updateScore(); // Score: 3

function createResponder() {
    let responseCount = 0;

    return function newResponse(answer) {
        responseCount++;
        console.log(`Response #${responseCount}: ${answer}`);
    };
}

const respond = createResponder();
respond("24"); // Response #1: 24
respond("51"); // Response #2: 51


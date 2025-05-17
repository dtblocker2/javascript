try {
    // Code that might throw an error
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    // Code that runs if there's an error
    console.error("Something went wrong:", error.message);
}

try {
    let value = JSON.parse("invalid JSON");
} catch (e) {
    console.error("Error parsing JSON:", e.message);
} finally {
    console.log("This always runs");
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (err) {
    console.error(err.message); // "Cannot divide by zero"
}


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function registerUser(username) {
    if (!username) {
        throw new ValidationError("Username is required");
    }
    console.log("User registered");
}

try {
    registerUser("");
} catch (e) {
    if (e instanceof ValidationError) {
        console.error("Validation failed:", e.message);
    } else {
        throw e;
    }
}


async function fetchData() {
    try {
        const res = await fetch("https://api.example.com/data");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error("Fetch failed:", err.message);
    }
}

/**
 * | Syntax         | Purpose                               |
| -------------- | ------------------------------------- |
| `try {}`       | Code you want to attempt              |
| `catch (e) {}` | Handle the error                      |
| `finally {}`   | Always runs (clean-up, logging, etc.) |
| `throw`        | Manually create an error              |

 */
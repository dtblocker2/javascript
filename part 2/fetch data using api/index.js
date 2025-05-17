fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(response => {
    if (response.status === 200) {
      return response.json(); // parse and return JSON data
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  })
  .then(data => console.log(data.name))  // access parsed JSON
  .catch(error => console.error("Error:", error));

const form = document.querySelector(".search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // The text value of form -> elements (the collection) -> query (the name of the input) -> value (text)
  const searchTerm = form.elements.query.value;

  // axios.get
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );

  createImages(res.data);
  form.elements.query.value = "";
});

// This displays the other images
function createImages(show) {
  // res.data is an array so we use 'for of'
  for (const result of show) {
    // some images doenst have a image so we use a conditional statement
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium; //code that displays only one: res.data[0].show.image.medium
      document.body.append(img);
    }
  }
}

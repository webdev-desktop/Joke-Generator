document.addEventListener("DOMContentLoaded", () => {
  const apiBody = document.querySelector(".api_body");
  const btn = document.getElementById("fetchJoke");
  const apiUrl = "https://icanhazdadjoke.com/";

  const fetchData = async () => {
    try {
      apiBody.innerHTML = "⏳ Loading...";
      const res = await fetch(apiUrl, {
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      apiBody.innerHTML = `<p>${data.joke}</p>`;
    } catch (error) {
      apiBody.innerHTML = "❌ Failed to load joke";
      console.log(error);
    }
  };

  fetchData();
  btn.addEventListener("click", fetchData);
});

console.clear();

const url = "https://swapi.dev/api/people";
try {
  async function fetchData() {
    const reponse = await fetch(url);
    console.log("Response :", reponse);
    const data = await reponse.json();
    console.log("Data", data);

    data.results.forEach((element) => {
      console.log("Name", element.name);
    });
    //   const eyeColor = data.results[2].eye_color;
    const r2d2 = data.results.find((item) => item.name === "R2-D2");
    const eyeColor = r2d2.eye_color;
    console.log("EyeColor Of R2-D2 :", eyeColor);
  }

  fetchData();
} catch (e) {
  console.log("Error", e);
}

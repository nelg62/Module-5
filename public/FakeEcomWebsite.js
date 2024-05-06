// class creator for products
class Items {
  constructor(category, description, id, image, price, rating, title) {
    this.category = category;
    this.description = description;
    this.id = id;
    this.image = image;
    this.price = price;
    this.rating = rating;
    this.title = title;
  }
}

// array to store products to update and display
const newItem = [];

// array to store categories for dropdown sort
const tempCategorys = [];
const tempCategorys2 = [];

document.addEventListener("DOMContentLoaded", async () => {
  // Wait for the fetch to finish
  try {
    const response = await fetch(`/renderData`);
    const data = await response.json();
    // Process the fetched data
    data.result.forEach((item) => {
      newItem.push(
        new Items(
          item.category,
          item.description,
          item.id,
          item.image,
          item.price,
          item.rating,
          item.title
        )
      );
      // Rest of your code for appending items to the DOM
      const template = document
        .getElementById("list-template")
        .content.cloneNode(true);
      template.querySelector(".card-img-top").src = item.image;
      template.querySelector(".card-title").innerHTML = item.title;
      template.querySelector(".card-text").innerHTML = item.description;
      template.querySelector(
        ".categorycard"
      ).innerHTML = `Category: ${item.category}`;
      template.querySelector(".cardid").innerHTML = item.id;
      template.querySelector(".cardprice").innerHTML = `$${item.price}`;
      template.querySelector(
        ".cardratingCount"
      ).innerHTML = `Number of Ratings: ${item.rating.count}`;
      template.querySelector(".cardratingRate").innerHTML = item.rating.rate;
      document.querySelector("#main").appendChild(template);
      tempCategorys.push(item.category);
    });
    // After processing data, create dropdown options and add event listener
    const template2 = document
      .getElementById("dropsort")
      .content.cloneNode(true);
    console.log("tempcartegory1", tempCategorys);
    const setArray = new Set(tempCategorys);
    console.log("...setarray", ...setArray);
    tempCategorys2.push(...setArray);
    console.log("tempcategory2", tempCategorys2);

    tempCategorys2.forEach((item) => {
      const option = document.createElement("option");
      option.text = item;
      option.value = item;
      template2.querySelector(".dropdownOption").appendChild(option);
    });
    document.querySelector("#sortmenu").appendChild(template2);

    // Add event listener for dropdown change
    document
      .querySelector(".dropdownOption")
      .addEventListener("change", function (event) {
        const selectedCategory = event.target.value;
        console.log(selectedCategory);

        document.getElementById("main").innerHTML = "";

        const filterItems =
          selectedCategory === "all"
            ? newItem
            : newItem.filter((item) => item.category === selectedCategory);

        filterItems.forEach((item) => {
          const template = document
            .getElementById("list-template")
            .content.cloneNode(true);
          template.querySelector(".card-img-top").src = item.image;
          template.querySelector(".card-title").innerHTML = item.title;
          template.querySelector(".card-text").innerHTML = item.description;
          template.querySelector(
            ".categorycard"
          ).innerHTML = `Category: ${item.category}`;
          template.querySelector(".cardid").innerHTML = item.id;
          template.querySelector(".cardprice").innerHTML = `$${item.price}`;
          template.querySelector(
            ".cardratingCount"
          ).innerHTML = `Number of Ratings: ${item.rating.count}`;
          template.querySelector(".cardratingRate").innerHTML =
            item.rating.rate;

          document.getElementById("main").appendChild(template);
        });
      });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

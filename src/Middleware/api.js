const axios = require("axios");

async function getApiData() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log("trying to get api");
    return response.data;
  } catch (error) {
    console.log("failed to get api");
    throw new Error("Error fetching data");
  }
}

module.exports = { getApiData };

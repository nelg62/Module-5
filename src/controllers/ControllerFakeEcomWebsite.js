const { getApiData } = require("../Middleware/api");

async function getWebsiteData(req, res) {
  try {
    const data = await getApiData();
    console.log("trying to render data");
    res.json({ result: data });
  } catch (error) {
    console.log("failed to render data", error);
    res.status(500).send("Server Error");
  }
}

module.exports = { getWebsiteData };

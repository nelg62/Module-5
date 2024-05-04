const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const url = 'https://fakestoreapi.com/products'


function getWebsiteData(url) {
    return axios.get(url).then(response => {
        return response.data
    }).catch(error => {
        console.error('Error fetch data: ', error)
        throw error
    })
}


module.exports = router;
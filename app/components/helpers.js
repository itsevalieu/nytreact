// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var nytAPI = "93b50169b9fa4bdcac180583d1198542";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(topic, beginDate, endDate) {

    console.log(topic, beginDate, endDate);

    // Figure out the geolocation
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&page=1&begin_date=" + beginDate + "&end_date=" + endDate + "&sort=newest&api-key=" + nytAPI;
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      // if (response.data.results[0]) {
        return response;
      // }
      // // If we don't get any results, return an empty string
      // return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getArticle: function() {
    return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postArticle: function(title, url) {
    return axios.post("/api/saved", { title: title, url: url });
  }
};

// We export the API helper
module.exports = helper;

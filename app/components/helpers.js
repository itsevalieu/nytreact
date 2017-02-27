// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var nytAPI = "93b50169b9fa4bdcac180583d1198542";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(topic, beginDate, endDate) {

    console.log("Helper: get", topic, beginDate, endDate);

    // Figure out the geolocation
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&page=1&begin_date=" + beginDate + "0101&end_date=" + endDate + "0101&sort=newest&api-key=" + nytAPI;
    return axios.get(queryURL).then(function(results) {
      // If get get a result, return that result's formatted address property
      	var queryResults = results.data.response.docs;
      	// console.log(queryResults);

      	var articles = [];
      
      	for(var i = 0; i < queryResults.length; i++) {
      		var object = {
      			title: queryResults[i].headline.main,
      			url: queryResults[i].web_url
      		};
      		articles.push(object);
      	}

      	// console.log(articles);

        return articles;
    });

  },

  // This function hits our own server to retrieve the record of query results
  getArticle: function() {
    return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postArticle: function(saveArticle) {
    return axios.post("/api/saved", { 
      title: saveArticle.title, 
      url: saveArticle.url 
    });
  },

  deleteArticle: function(id) {
    return axios.delete("/api/delete/" + id);
  }

};

// We export the API helper
module.exports = helper;

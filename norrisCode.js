// var request = new XMLHttpRequest();

// request.open(
//   "GET",
//   "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=dev",
//   true
// );

// request.onload = function() {
//   var data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(joke => {
//       console.log(joke.value);
//     });
//   } else {
//     console.log("error");
//   }
// };

// request.send();



// var unirest = require("unirest");

// var req = unirest(
//   "GET",
//   "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random"
// );

// unirest
//   .post(API - URL)
//   .header("X-RapidAPI-Key", e5f3570bc3msh738c83fa3672340p160361jsn284e8cef2481);

// req.headers({
//   "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
//   "x-rapidapi-key": "e5f3570bc3msh738c83fa3672340p160361jsn284e8cef2481",
//   accept: "application/json"
// });

// req.end(function(res) {
//   if (res.error) throw new Error(res.error);

//   console.log(res.body);
// });

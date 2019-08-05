(function(window) {
  // You can enable the strict mode by commenting the following line
  // 'use strict';

  function norrisCode() {
    var _norrisObj = {
      test: "someValue"
    };

    const onGlobalSuccess = response => {
      return response.data;
    };

    const onGlobalError = err => {
      return Promise.reject(err);
    };
    _norrisObj.getJoke = () => {
      return axios
        .get(
          "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=dev",
          {
            headers: {
              "X-RapidAPI-Key":
                "e5f3570bc3msh738c83fa3672340p160361jsn284e8cef2481"
            }
          }
        )
        .then(onGlobalSuccess)
        .catch(onGlobalError);
    };

    return _norrisObj;
  }

if (typeof window.norris === "undefined") {
    window.norris = norrisCode();
  }
})(window);

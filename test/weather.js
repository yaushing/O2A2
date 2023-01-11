const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        let text = this.responseText;
		console.log(text);
	}
});

xhr.open("GET", "https://open-weather13.p.rapidapi.com/city/singapore");
xhr.setRequestHeader("X-RapidAPI-Key", "650ff29df4mshb8270126c9f007dp1b158fjsncc6ba32066e7");
xhr.setRequestHeader("X-RapidAPI-Host", "open-weather13.p.rapidapi.com");

xhr.send(data);

const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
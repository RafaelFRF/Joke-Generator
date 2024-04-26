// UI elements
const jokesBtn = document.querySelector("#joke-btn");
const joke = document.querySelector("#joke");

// Request
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    joke.textContent = data.value;
  } else if(this.status && this.status !== 200) {
    joke.textContent = "Something went wrong, please try again later.";
  }
  jokesBtn.disabled = false;
};
const jokesURL = "https://api.chucknorris.io/jokes/random";

// Functions
const getNewJoke = () => {
  joke.textContent = "Loading...";
  jokesBtn.disabled = true;
  xhr.open("GET", jokesURL);

  xhr.send();
};

// EventListeners
jokesBtn.addEventListener("click", getNewJoke);

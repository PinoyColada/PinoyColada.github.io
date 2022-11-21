const myAvatar = document.getElementById("github_profile");
const bio = document.getElementById("intro");

function render(response) {
  const foundAvatar = response.avatar_url;
  myAvatar.src = foundAvatar;

  const foundBio = response.bio;
  bio.innerText = foundBio;
}

fetch("https://api.github.com/users/PinoyColada")
  .then((response) => response.json())
  .then((response) => render(response));

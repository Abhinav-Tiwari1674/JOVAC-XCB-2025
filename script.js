
fetch("https://api.github.com/users/Abhinav-Tiwari1674") 
.then(function(res) {
  return res.json(); 
})
.then(function(data) {
  
  let box = document.getElementById("info-box");

  box.innerHTML = `
    <img src="${data.avatar_url}" />
    <h3>${data.name}</h3>
    <p>${data.bio}</p>
    <a href="${data.html_url}" target="_blank">GitHub Profile</a>
  `;
})
.catch(function(err) {
  console.log("Something went wrong:", err);
});
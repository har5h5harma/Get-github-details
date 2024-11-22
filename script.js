let name;
function f1(){
  name= document.querySelector(".inpt").value;
  //console.log(name);
  getdetails(name);
}

function getdetails(name){
  let object1={};
  fetch('https://api.github.com/users/'+name)
  .then(response => response.json())
  .then(data => {
    //console.log(data); 
    object1=data;
    const vari=document.querySelector(".main");
    vari.innerHTML=`<h1>User Details</h1>
  <img src="${data.avatar_url}" alt="User Avatar" class="photo"">
  <p><strong>Name:</strong> ${object1.name}</p>
  <p><strong>Email:</strong> ${object1.email}</p>
  <p><strong>followers:</strong> ${object1.followers}</p>
  <p><strong>following:</strong> ${object1.following}</p>
  <p><strong>location:</strong> ${object1.location}</p>
  <p><strong>Repositories:</strong> ${object1.public_repos}</p>
  <strong>Github:</strong> <a href="${object1.html_url}">${object1.html_url}</a>`
  })
  .catch(error => console.error('Error:', error));
}
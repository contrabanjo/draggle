console.log("javascript loaded");

const num = Math.floor(Math.random() * 166)

fetch("http://www.nokeynoshade.party/api/queens/" + num)
  .then(response => response.json())
  .then(data => {
     console.log(data)
     const pic = document.getElementById("pic")
     pic.src = data.image_url
  });

function updatePicture(){
  const pic = document.getElementById("pic")
  console.log("class", pic.className, "split", pic.className.split())
  const num = pic.className.split("")[3];
  console.log(num);
  if (num < 4){
  	pic.className = "pic" + (Number(num) + 1);
  }
}

document.getElementById("button").addEventListener("click", updatePicture);
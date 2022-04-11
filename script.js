console.log("javascript loaded");

const guesses = [];
let answer = {};

const num = Math.floor(Math.random() * 166)

fetch("https://www.nokeynoshade.party/api/queens/" + num)
  .then(response => response.json())
  .then(data => {
     console.log(data)
     const pic = document.getElementById("pic")
     pic.src = data.image_url
     answer = data
});

fetch("https://www.nokeynoshade.party/api/queens/all")
  .then(response => response.json())
  .then(data => {
     console.log(data);
     const list = document.getElementById("queens")
     data.forEach(q => {
       const option = document.createElement("option")
       option.value = q.name;
       list.append(option);
  })
});

function updatePicture(){
  const pic = document.getElementById("pic")
  const num = pic.className.split("")[3];
  if (num < 4){
  	pic.className = "pic" + (Number(num) + 1);
  }
}

<<<<<<< HEAD
function displayGuess(g, isCorrect){
   const container = document.getElementById("guessContainer");
   const newGuess = document.createElement("div");
   newGuess.textContent = g;
   newGuess.className = isCorrect ? "correct" : "incorrect";
   container.append(newGuess);
}

function guessIsCorrect(guess, answer){
   console.log("guess", guess, "answer", answer);
   return (guess.toUpperCase().trim() === answer.toUpperCase().trim())
}

document.getElementById("guess").addEventListener("keyup", (e)=>{
  if (e.key === "Enter"){
    const guess = document.getElementById("guess")
    guesses.push(guess.value);
    displayGuess(guess.value, guessIsCorrect(guess.value, answer.name));
    if (guessIsCorrect(guess.value, answer.name)){
	console.log("wow, correct")      
    } else {
    	console.log("incorrect, wow");
    }
    guess.value = ""
    updatePicture();
  }
})
=======
document.getElementById("button").addEventListener("click", updatePicture);
>>>>>>> 130d5b47775459638739a3d260a325a84d50cab5

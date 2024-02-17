setInterval(()=>{  
   fetch("https://icanhazdadjoke.com/slack")
  .then( data => data.json())
   .then(jokedata =>{
      const Joke = jokedata.attachments[0].text;
      const jokeElement = document.getElementById("jokeElements");
      jokeElement.innerHTML = Joke;
   })
},5000)

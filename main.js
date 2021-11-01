const demo = document.getElementById("demo"); 
const show = document.getElementById("name")
demo.addEventListener('click', getAnime); 

function getAnime (){
  fetch('https://animechan.vercel.app/api/available/anime')
      .then(response => response.json())
      .then(anime => {
    const random = Math.random() * anime.length
    const ran = Math.floor(random)
    const name = anime[ran];
    console.log(name);
    show.innerHTML = name
  })
}  

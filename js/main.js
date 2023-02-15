import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
  } from './api.js'



const MovieImg = document.getElementById('movieImg');
const MovieTitle= document.getElementById('movieTitle');
const movieSinopse= document.getElementById('movieSinopse'); 
const FindMovie = document.querySelector(".findMovie");
FindMovie.addEventListener('click', MovieFindFunc);


function MovieFindFunc() {
    let movieId = Math.floor(Math.random() * 1000 + 1)
    let url= `${BASE_URL}${movieId}?${API_KEY}&${language}`
    axios.get(url)
    .then(response => {
    const data= response.data
     console.log(`${IMG_URL}${data.poster_path}`)
        MovieImg.src= `${IMG_URL}${data.poster_path}`
      
        MovieTitle.innerHTML=`${data.title}`
        movieSinopse.innerHTML= `${data.overview}`
    })
    .catch(error => {
        MovieTitle.textContent = `Bora codar!!`
        movieSinopse.textContent = `Ops, hoje não é dia de assistir filme.`
        MovieImg.src = `../images/codar.svg`
        MovieImg.alt = `Imagem de erro`
     
      })
}
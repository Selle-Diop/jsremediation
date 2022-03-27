const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const containFilm = document.querySelector('#containFilm')
// const movie = document.querySelector('#movie')
const input = document.querySelector('input')
const form = document.querySelector('form')
const search = document.getElementById('search')
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";

 

 

fetch(APIURL).then(res => res.json()).then(data => {
    console.log(data.results)
    data.results.forEach(movieEL => {
        img_src = IMGPATH + movieEL.poster_path;
        const image = document.createElement('img')
        const divinfo = document.createElement('div')
        divinfo.setAttribute('class','movie-info')
        const h3= document.createElement('h3')
        const titre = movieEL.title
        h3.innerHTML = titre
        const span = document.createElement('span')
        // span.setAttribute('class', 'green','red')
        const note = movieEL.vote_average
        span.innerHTML = note
        const divover = document.createElement('div')
        divover.setAttribute('class', 'overview')
        const h3v = document.createElement('h3')
        h3v.innerText='Overview'
        const over = movieEL.overview
        divover.innerHTML = over
        divover.appendChild(h3v)
        divinfo.append(h3, span)
        const divmovie=document.createElement('div')
        divmovie.append(image, divinfo, divover)
        containFilm.appendChild(divmovie)



       
        image.src = img_src
    });
})
form.addEventListener('submit',(e)=> {
    e.preventDefault()
    chercher = search.value
    if (chercher) {
        SEARCHAPI
    }
})
// function getColor (vote) {
//     if (vote>=8) {
//         return 'green';
//     } elseif(vote>=5){
//         return 'orange';
//     }else {
//          return 'red';
//     }
   
// }
   

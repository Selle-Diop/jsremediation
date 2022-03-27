const jours = document.getElementById('jours')
const heures = document.getElementById('heures')
const minutes = document.getElementById('minutes')
const secondes = document.getElementById('secondes')


const dateCourante = new Date().getFullYear();
const nouvelleDate = new Date(`January 01 ${dateCourante + 1} 00:00:00`);

function CountRebours() {
    const heureActuelle = new Date();
    const diff = nouvelleDate - heureActuelle;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    jours.innerHTML = -d;
    heures.innerHTML = -h < 10 ? 'O-' + h : h;
    minutes.innerHTML = -m < 10 ? 'O-' + m : m;
    secondes.innerHTML = -s < 10 ? 'O-' + s : s;

 



    //  console.log(diff);
}
setInterval(CountRebours, 1000)
// CountRebours();
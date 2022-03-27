const container = document.getElementById('container');
const g = document.getElementById('g');
const d = document.getElementById('dr');
// const tofs = document.getElementById('tofs');



// -------------------------Functions-----------------------
let obTtof=[
    '../img/im1.jpg',
    '../img/im2.jpg',
    '../img/im3.jpg',
]

var i =0
getImage()
function getImage() {
    document.tofs.src = obTtof[i]
    if (i < obTtof.length - 1) {
        i++
    } else { 
        i=0
    }
    setTimeout(getImage,4000)
}

d.addEventListener('click', () => {
    i++
    
    if (i >= obTtof.length) {
        i=0
    }
    getImage()
       

    
})
g.addEventListener('click', () => {

     i--

    if (i<0) {
        i = obTtof.length - 1
    }
    getImage()

})









// function masquer() {
//     if (pos == -nbr + 1)
//         g.style.visibility = "hidden";
//     else
//         g.style.visibility = "visible";

    
//     if (pos == 0)
//         droi.style.visibility = 'hidden';

//     else
//         droi.style.visibility = 'visible';


    
// }









// // ------------------------------EVENTS----------------
// document.body.onload = function () {
//     nbr = 3
//     pos = 0
//     container.style.width =  (800 * nbr) + "px";
//     for (i = 1; i <= nbr; i++){
//         div = document.createElement('div');
//         div.className = 'tof';
//         div.style.backgroundImage = "url('../img/im"+i+".jpg')"
//         container.appendChild(div);
//     }
//     masquer();
    
 
// }
// g.onclick = function () {
//     if(pos>-nbr+1)
//     pos--;
//     container.style.transform = "translate(" + pos * 800 + "px)";
//     container.style.transition = "all 0.5s ease";
//     masquer();
    

    
// }
// droi.onclick = function () {
//     if (pos < 0)
//         pos++;
//     container.style.transform = "translate(" + pos * 800 + "px)";
//     container.style.transition = "all 0.5s ease";
//     masquer();
    

// }
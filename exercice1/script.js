const btn = document.querySelectorAll('button');
const monProjet = document.getElementById('monProjet');



btn.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        const newdiv = document.createElement('div');
        const p = document.createElement('p');
         p.innerHTML = e.target.innerHTML;
        
        
        newdiv.appendChild(p)
        newdiv.className = el.className
    

         newdiv.classList.add(el.className, "newdivClass");

        monProjet.appendChild(newdiv)
         setInterval(() => {
            newdiv.remove()
         },4000)



    })

});
function message(p) {
    p.innerHTML = e.target.innerHTML;
}










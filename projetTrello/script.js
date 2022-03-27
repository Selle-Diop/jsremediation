const colstaches = document.getElementById('colstaches')
const cols=document.getElementById('cols')




let i=1
cols.addEventListener('click', (e) => {
const divheadbody = document.createElement('div')
divheadbody.className ='headbody '
const input = document.createElement('input')
input.value = 'colonne' +i
    input.className = 'head'
    input.style.backgroundColor = colorRandom()  
    const divbody = document.createElement('div')
    const image = document.createElement('img')
    image.src = '../img/ambulant-removebg-preview.png'
    
    divbody.className = 'body'
    divbody.appendChild(image)
    divbody.style.backgroundColor = colorRandom()
    if (i <= 5) {
        divheadbody.append(input, divbody)
        colstaches.appendChild(divheadbody)
    }
    i++   
     
  input.addEventListener('dblclick', () => {
    const newInput = document.createElement('input')
    newInput.value = input.innerHTML
    input.innerHTML = ''
        input.appendChild(newInput)
        newInput.addEventListener('blur', () => {
            input.innerHTML = newInput.value
    
        })
        newInput.focus();

    })
    
})

function colorRandom () {
    var colorHexa = '0123456789ABCDEF';
    var indenfi = '#';
    for (let i = 0; i < 6; i++) {
        indenfi+=colorHexa[Math.floor(Math.random()*16)]   
    }
    return indenfi;

}





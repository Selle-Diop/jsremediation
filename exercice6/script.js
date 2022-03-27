const heart = document.getElementById('heart')
const modal = document.getElementById('modal')
const croix = document.getElementById('croix')
const generandom = document.getElementById('generandom')
const randomRecette = 'https://www.themealdb.com/api/json/v1/1/random.php'







generandom.addEventListener('click', (e) => {
    fetch(randomRecette).then(res => res.json()).then(data => {
        console.log(data.meals)
        data.meals.forEach(element => {
        const { strMeal, strMealThumb}=element
        
    });
    })
})
heart.addEventListener('click', (e) => {
    modal.classList.add('show-modal')
})
croix.addEventListener('click', () => modal.classList.remove('show-modal'))


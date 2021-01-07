

const navBurger = document.querySelector('.nav-burger')
const navContent = document.querySelector('header nav ul')
const navLinks = document.querySelectorAll('header nav ul li')

navBurger.addEventListener('click', () => {
    navContent.classList.toggle('active')

})

navLinks.forEach(li => {
    li.addEventListener('click', () => {
        navContent.classList.toggle('active')
    })
})

const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
    tab.addEventListener('click', e =>{               
       tabs.forEach(tab => {
           tab.classList.remove('active')
       })
       tab.classList.add('active')    
    }) 
})

const btn1 = document.querySelector('#button1')
const btn2 = document.querySelector('#button2')
const content1 = document.querySelector('#content1')
const content2 = document.querySelector('#content2')

btn1.addEventListener('click', function(){
    content1.classList.toggle("hidden")
})

btn2.addEventListener('click', function(){
    content2.classList.toggle("hidden")
})
// Your code goes here
const nav=document.querySelectorAll('.nav a')
const logo=document.querySelector('.logo-heading')
const welcome=document.querySelector('.intro h2')
const introText=document.querySelector('.intro p')
const heading=document.querySelector('.content-section h2')
const head=document.getElementsByTagName('h4')
const heads=document.getElementsByTagName('h2')
const text=document.getElementsByTagName('p')
// const lets=document.querySelector('')

// const letsImg=document.querySelector('.content-section .img-content')
const load=function(event){
    document.body.style.color="purple"
}
window.addEventListener('load', load)

logo.addEventListener('dblclick', function(event){
    logo.style.color='blue'
})
// nav.addEventListener('mouseover', function(event){
//     nav.style.backgroundColor='red'
//     nav.style.color='blue'
//        // elem.style.backgroundColor='red'
//        window.prompt("Great Choice!!!!!  \n\nEnter your Email")
// })
nav.forEach(elem => {
    elem.addEventListener('click', function (event) {
        elem.style.color='blue'
        elem.style.backgroundColor='pink'
       window.prompt("Great Choice!!!!!  \n\nEnter your Email")
    })
})
welcome.addEventListener('wheel', function(event){
    welcome.style.color='green'
    welcome.style.fontSize='5em'
})
introText.addEventListener('mouseover', function(event){
    introText.style.color='teal'
})
    heading.onclick=function(event){
        heading.style.color='green'
    }
    const letse=document.querySelectorAll('.content-section .text-content p')
    Array.from(letse).forEach(elem => {
        elem.addEventListener('click', function (event) {
            elem.style.color='teal'
        })
    })
    Array.from(head).forEach(elem => {
        elem.addEventListener('click', function (event) {
            elem.style.color='green'
        })
    })
    Array.from(heads).forEach(elem => {
        elem.addEventListener('click', function (event) {
            elem.style.color='green'
        })
    })
    Array.from(text).forEach(elem => {
        elem.addEventListener('click', function (event) {
            elem.style.color='teal'
        })
    })
// // })
// heading.addEventListener('click', function(event){
//     // heading.style.color='green'
// })
// lets.addEventListener('click', function(event){
//     lets.style.color='purple'
//     // lets.style.backgroundColor='teal'
// })
// letse.addEventListener('mouseover', function(event){
//     letse.style.color='teal'
//     // lets.style.backgroundColor='teal'
// })
const bottom=document.querySelectorAll('.content-pick .btn')
Array.from(bottom).forEach(elem => {
    elem.addEventListener('click', function (event) {
        elem.style.color='orange'
       window.prompt("Great Choice!!!!!  \n\nEnter your Email")
    })
})




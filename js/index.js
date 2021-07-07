// Your code goes here
const nav=document.querySelector('.nav')
const logo=document.querySelector('.logo-heading')
const welcome=document.querySelector('.intro h2')
const introText=document.querySelector('.intro p')
const heading=document.querySelector('.content-section h2')
const head=document.getElementsByTagName('h4')
// const lets=document.querySelector('h2,h4')
// const letse=document.querySelector('.content-section .text-content')
// const letsImg=document.querySelector('.content-section .img-content')
const load=function(event){
    document.body.style.color="purple"
}
window.addEventListener('load', load)

logo.addEventListener('dblclick', function(event){
    logo.style.color='blue'
})
nav.addEventListener('mouseover', function(event){
    nav.style.backgroundColor='red'
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
    head.onclick=function(event){
        head.style.color='teal'
    }
    // head.addEventListener('mouseover', function(event){
    //     head.style.color='teal'

    // })
// })
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




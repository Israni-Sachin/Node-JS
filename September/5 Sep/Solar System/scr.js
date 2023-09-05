// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello World!');
// }).listen(4800);

// const express = require('express');
// const EventEmitter = require('events');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/search', (req, res) => {
//     res.send('Api searched!');
// });
// app.listen(3000, () => {
//     console.log('Example app listening on port 3000!');
// });


// console.log('Hello World!')

// document.body.addEventListener('click', (e) => {
//     console.log(e.clientX);// 0-1033
//     console.log(e.clientY);// 0-1033
//     let x = e.clientX
//     let y = e.clientY
//     let div = document.createElement('div')
//     div.setAttribute('class', 'stars');
//     // div.style.position = 'relative';
//     div.style.left = x + "px"
//     div.style.top = y + "px"
//     // left = x + "px"
//     // top = y + "px"
//     let solar = document.getElementsByClassName('solarSystem')[0]
//     // solar.append(div)
//     document.body.append(div)
//     // solar.innerHTML += `<div class="stars" style="left: ${left};;top: ${top};"></div>`

// })

let ripple = document.getElementsByTagName('body')[0]
// DOMContentLoaded
count = 0;
// ripple.addEventListener('mouseenter', () => {
//     demo.style.top = '2%'
//     demo.innerText = "Click on empty sky to see the stars..."
// })

ripple.addEventListener('click', star)
function star(e) {

    demo.style.top = '-10%'
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 10; j++) {
            let span = document.createElement('span')
            span.style.left = Math.round(Math.random(e.clientX) * 1600) + 'px'
            span.style.top = Math.round(Math.random(e.clientY) * 1000) + 'px'
            ripple.append(span)
        }
        
    }
    count++
    if (count == 6) {
        demo.style.top = '2%'
        ripple.removeEventListener('click', star)
        demo.innerText = "The Sky is full of stars"
        setTimeout(()=>{
            demo.style.top = '-10%'
            demo.innerText=''
        },2000)
    }
    // let x = e.clientX
    // let y = e.clientY
    // let span = document.createElement('span')
    // span.style.left = x + 'px'
    // span.style.top = y + 'px'
    // ripple.append(span)
    // console.log(Math.round(Math.random(e.clientX) * 200));
}
let rings = document.getElementsByClassName('r')

width = 500;
for (let i = 0; i < rings.length; i++) {
    rings[i].style.width = width + 'px'
    rings[i].style.height = width + 'px'
    width += 220;
}
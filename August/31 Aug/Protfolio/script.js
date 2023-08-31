// -------- For hiding the code from any user

document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
  // console.log(e.keyCode);
};

// document.onmousedown = function (e) {
//     if (e.which == 3) {
//       alert("Right mouse button clicked is not allowed");
//       console.log(e.value);
//     }
// };

//   if (e.which == 1) {
//     console.log(e.value);
//     alert("You cannot open the inspect button");
//   }

// ----------------------------------------------------------------

let ripple = document.getElementById('ripple')

ripple.addEventListener('mousemove', function (e) {
  let x = e.clientX
  let y = e.clientY
  let span = document.createElement('span')
  span.style.left = x + 'px'
  span.style.top = y + 'px'
  let div = document.createElement('div')
  div.style.left = x + 'px'
  div.style.top = y + 'px'
  // console.log(x); //565 to 595 
  // console.log(y); // 285 to 305
  ripple.append(span)
  ripple.append(div)
  // if (document.getElementsByTagName('div')) {x
  //   // document.getElementsByTagName('div').length - 1
  //   console.log('askjba');
  // }
  // else {
  // }
  setTimeout(() => {
    div.remove()
  }, 10);
  // console.log(document.getElementsByTagName('div').length < 2);
  setTimeout(() => {
    span.remove()
  }, 100)
  // if (document.getElementsByTagName('div')) {
  //   ripple.addEventListener('mouseover', (e) => {
  //     let x = e.clientX
  //     let y = e.clientY
  //     let div = document.createElement('div')
  //     div.style.left = x + 'px'
  //     div.style.top = y + 'px'
  //     ripple.append(div)
  //   })
  // }
})


// let x = document.clientX
// let y = document.clientY
// let div = document.createElement('div')
// div.style.left = x + 'px'
// div.style.top = y + 'px'

let h1 = document.getElementsByTagName('h1')[0]

function randomString(length = 0) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
let arr = ['SOFTWARE DEVELOPER', 'SOFTWARE ENGINEER', 'FRONT END DEVELOPER', 'PHOTOGRAPHER']

// let random = Math.floor(Math.random() * arr.length)

// h1.innerHTML = arr[random]
// for (let i = 0; i < arr.length; i++) {
// let a = setInterval(function () {
//   h1.innerHTML = arr[0]
// }, 1000)

// setInterval(function () {
//   h1.innerHTML = arr[1]
//   clearInterval(a)
// }, 2000)
// setInterval(function () {
//   h1.innerHTML = arr[2]
// }, 3000)
// setInterval(function () {
//   h1.innerHTML = arr[3]
// }, 4000)
// }

// setInterval(() => {
//   h1.innerText = arr[0]
//   arr.push(h1.innerText)
//   arr.shift()
// }, 2000)

// console.log(arr[i]);
// for (var i = 0; i < arr.length; i++) {
// setTimeout(() => {
// for (var j = 0; j < arr[i].length; j++) {
// h1.innerText += arr[i][j]
// }
// }, 2000);
// }

let a = 'sachin'
for (let i = 0; i < a.length; i++) {
  setTimeout(() => {
    h1.innerText += a[i]
  }, 2000);
}
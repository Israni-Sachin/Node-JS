let li = document.getElementsByTagName("a");
console.log(li[0].lastElementChild.lastElementChild);

Array.from(li).forEach(ele => {
    ele.addEventListener("mouseenter", () => {
        ele.lastElementChild.lastElementChild.style.visibility = "visible";
        ele.lastElementChild.lastElementChild.style.position = "relative";

    })
})

Array.from(li).forEach(ele => {
    ele.addEventListener("mouseleave", () => {
        ele.lastElementChild.lastElementChild.style.visibility = "hidden";
        ele.lastElementChild.lastElementChild.style.position = "absolute";
    })
})

let char = ['Photographer', 'Web Designer', 'Software Engineer', 'Web Developer']
let index = 0;
let character = 0;

let p = document.getElementsByClassName('txt')[0]
console.log(p);

function change() {
    if (character < char[index].length) {
        p.textContent += char[index].charAt(character)
        character++;
        setTimeout(change, 200)
    } else {
        setTimeout(erase, 100)
    }
}
function erase() {
    if (character > 0) {
        p.textContent = p.textContent.slice(0, character - 1);
        character--;
        setTimeout(erase, 100)
    }
    else {
        index++;
        if (index >= char.length) {
            index = 0;
        }
        setTimeout(change, 200)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(change, 200);
})
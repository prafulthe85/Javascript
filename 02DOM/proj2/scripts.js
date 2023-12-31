const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(violet).backgroundColor);

const getBGColor = (selectedEle) => {
    return window.getComputedStyle(selectedEle).backgroundColor;
}

// var color = getBGColor(pink);

// pink.addEventListener("mouseenter",() => {
//     center.style.background = color;
// });

const magicColorChanger = (element , color)=>{
    return element.addEventListener("mouseenter",()=>{
        center.style.background = color;// it changes the style of that element
    })
}

magicColorChanger(red,getBGColor(red));
magicColorChanger(pink,getBGColor(pink));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(cyan,getBGColor(cyan));
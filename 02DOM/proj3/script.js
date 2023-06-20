const courses = [
    {
        name : "Complete ReactJS course",
        price : "2.3",
    },
    {
        name : "Complete C++ course",
        price : "3.5",
    },
    {
        name : "Complete NodeJS course",
        price : "2.9",
    },
    {
        name : "Complete MERN course",
        price : "2.0",
    },
    
];

// <li class="list-group-item">
//     Complete ReactJS course
//     <span class="float-right">$ 2.3</span>
// </li>

// this method adds the new field without writing any html just pass data to array courses and it is displayed


function generateLIST() {

    // it  gets the ul element
    const ul = document.querySelector(".list-group");
    
    ul.innerHTML=""

    courses.forEach((course)=>{
        // to create element ---  <li></li>
        const li = document.createElement("li");
        // to add class in element ---  <li class="list-group-item"></li>
        li.classList.add("list-group-item");

        // to add text from arr --- <li class="list-group-item">Complete ReactJS course</li>
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ "+course.price);
        span.appendChild(price);

        // here span is first added to li and then li is added inside ul
        li.appendChild(span);
        ul.appendChild(li);
    });
}
// generateLIST();

// we don't call directly as when site loads up it automatically called
window.addEventListener("load",generateLIST);

// get the buttons
const button1 = document.querySelector(".sort-btn1");
const button2 = document.querySelector(".sort-btn2");

// when we click on button the list of courses is sorted 

// this sort in ascending order
button1.addEventListener("click",()=>{
    courses.sort( (a,b) => a.price-b.price);
    generateLIST();
});

// this sort in descending order 
button2.addEventListener("click",()=>{
    courses.sort( (a,b) => b.price-a.price);
    generateLIST();
});
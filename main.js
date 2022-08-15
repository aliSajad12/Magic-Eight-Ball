//Show Btn
let showBtn = document.getElementById('showBtn');

//Output
let output = document.getElementById('output');

//List Items
let listItems = [
    "Yes",
    "My sources say no",
    "Try more",
    "Maybe",
    "Returns Yes",
    "I can't predict right now",
    "Be patient",
    "Don't Do that"
]

//Show Item Function
showBtn.addEventListener('click', function(){
    let randomItems = listItems[Math.floor(Math.random() * listItems.length)];
    output.innerHTML = randomItems;
})


    
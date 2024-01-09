
// button identifiers

let randomize = document.getElementById("randomize");
let selection_sort = document.getElementById("selection-sort");
let insertion_sort = document.getElementById("insertion-sort");
let shell_sort = document.getElementById("shell-sort");
let quick_sort = document.getElementById('quick-sort');
let merge_sort = document.getElementById("merge-sort");
let change_size = document.getElementById("change-size");
let bubble_sort = document.getElementById("bubble-sort");

var sort_button=document.querySelectorAll(".sort");


// Array Creation

randomize.addEventListener("click",generateArray);

let min = 1;
let max = 255;
let arraySize = 50;


let array = [arraySize];
let sortedArray = [arraySize];

generateArray();

function generateArray(){
    for(var i = 0; i < arraySize; i++){
        array[i] = generateArrayValue(min, max);

        if(array[i] == array[i - 1]){
            array[i] = generateArrayValue(min, max);
        }
    }
}


function generateArrayValue(){
    return Math.floor(Math.random() * (max- min) + min);
}


// Updating Array Size



// Creating bars for the array

for(let i = 0; i < array.length; i++){
    const bar = document.createElement("div");
    bar.style.height= array[i] + "px";
    bar.classList.add("bar");
    array_container.appendChild(bar);
}






//Running the appropriate algorithm.
for(var i=0;i<sort_button.length;i++)
{
    sort_button[i].addEventListener("click",sort);
}

function disable_buttons()
{
    for(var i=0;i<sort_button.length;i++)
    {
        sort_button[i].classList=[];
        sort_button[i].classList.add("butt_locked");
        sort_button[i].disabled=true;

        /*
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
        */
    }
}

function sort()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble Sort":Bubble();
                        break;
        case "Selection Sort":Selection_sort();
                        break;
        case "Insertion Sort":Insertion();
                        break;
        case "Merge Sort":Merge();
                        break;
        case "Quick Sort":Quick();
                        break;
        
    }
}
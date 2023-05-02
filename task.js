"use strict"

const outTask1 = document.querySelector(".outTask1")
const outTask2 = document.querySelector(".outTask2")
const outTask3 = document.querySelector(".outTask3")


const taskInput3 = document.querySelector(".taskInput3")
const taskBtn3 = document.querySelector(".taskBtn3")




function task1 () {

    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0'); // padStart якщо день має менше 2 символів (тобто менше 10), тоді перед днем додається 0
    const monthNames = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();

    const formattedDate = `${day} ${month} ${year} року`;
    
    outTask1.style.border = "1px solid #fff";
    outTask1.textContent = formattedDate;

}
task1 ()

function task2() {
    const data = new Date();

    const day = data.getDate();
    const month = data.getMonth() +1;
    const year = data.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;

    console.log(formattedDate);
    let result = Date.parse(formattedDate);
    
    const hours = result / (1000 * 60 * 60);

    outTask2.style.border = "1px solid #fff";
    outTask2.textContent = hours + " Пройшло годин з 1970-01-01";
}

task2()


function task3() {

    taskBtn3.addEventListener("click", () => {
    
        console.log(taskInput3);
    
    })

}

task3()
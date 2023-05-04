"use strict"

const outTask1 = document.querySelector(".outTask1")
const outTask2 = document.querySelector(".outTask2")
const outTask3 = document.querySelector(".outTask3")
const outTask4 = document.querySelector(".outTask4")


const inputTask3 = document.querySelector(".inputTask3")
const taskBtn3 = document.querySelector(".taskBtn3")

const inputTask4 = document.querySelector(".inputTask4")
const taskBtn4 = document.querySelector(".taskBtn4")


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
        const birthday = new Date(inputTask3.value);
        const today = new Date();
        const diff = birthday.getTime() - today.getTime();
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
        
        console.log(birthday.getTime());
        console.log(today.getTime());

        console.log("birthday", birthday);
        console.log("today", today);
        console.log("diff", diff);
        console.log("diffDays", diffDays);
        
        if (diffDays < 0) {
            outTask3.textContent = "День народження вже пройшов";
            outTask3.style.border = "1px solid #fff";
        } else if (diffDays === 0) {
            outTask3.textContent = "Сьогодні Ваш день народження!";
            outTask3.style.border = "1px solid #fff";
        } else {
            outTask3.textContent = `До дня народження залишилось ${diffDays} днів`;
            outTask3.style.border = "1px solid #fff";
        }
   
    })
}
task3()



function task4() {
    taskBtn4.addEventListener("click", () => {
        const data = new Date(inputTask4.value);
        console.log(data);
        let result = data.getDay();

        console.log(inputTask4.value);
        if(result === 6 || result === 0) {
            outTask4.textContent = "Вихідний";
            outTask4.style.border = "1px solid #fff";
        } else if (result === 1) {
            outTask4.textContent = "Буде важко ... понеділок ...";
            outTask4.style.border = "1px solid #fff";
        } else {
            outTask4.textContent = "Будьний день";
            outTask4.style.border = "1px solid #fff";
        }

        
    })

}
task4()
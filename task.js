"use strict"

const taskInput1 = document.querySelector(".taskInput1")
const taskInput2 = document.querySelector(".taskInput2")
const taskInput3 = document.querySelector(".taskInput3")


const taskBtn1 = document.querySelector(".taskBtn1")
const taskBtn2 = document.querySelector(".taskBtn2")

const outTask1 = document.querySelector('.outTask1')
const outTask2 = document.querySelector('.outTask2')



function task1 () {

    taskBtn1.addEventListener("click", () => {
        
        if (taskInput1.value.toLowerCase() == "sale" || taskInput1.value.toLowerCase() == "vip") {
            console.log(true);
            outTask1.style.border = "1px solid gold"
            outTask1.textContent = "True"
        } else {
            console.log(false);
            outTask1.style.border = "1px solid gold"
            outTask1.textContent = "False"
        }

        if (taskBtn1) {
            taskInput1.value = "";
            console.log("Good btn");
        }
        
    })

    taskBtn2.addEventListener("click", () => {
        
        let text = taskInput2.value;

        let a = parseInt(text.length);
        let b = parseInt(taskInput3.value);

        console.log(a);
        console.log(b);

        if (a > b) {
            console.log(true);
             outTask2.textContent = text;
        } else {
            outTask2.textContent = text.substring(0, 20) + " ...";
        }

        if (taskBtn2) {
            taskInput2.value = "";
            taskInput3.value = "";
            console.log("Good btn");
        }

    })
}
task1 ()

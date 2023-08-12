/* RMIT University Vietnam
Course: COSC2430 Web Programming
Semester: 2023A
Assessment: Assignment 1
Author: Pham Tuan Vy
ID: 3989482
Acknowledgement: Acknowledge the resources that you use here. */

const bar = document.getElementById('bar') ;
const nav= document.getElementById('navbar') ;
const close= document.getElementById('close') ;

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })   
}
if (close) {
    close.addEventListener('click', () => { 
        nav.classList.remove('active');
    })
}
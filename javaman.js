//# ES6 

//ES6 refers to version 6 of the ECMA Script (Javascript) programming language, was published in June 2015.


//Var is used in pre-ES6 versions of JavaScript, and has folows a function scope.

//LET & CONST came with ES6
 //Let is the preferred way to declare a variable when it can be reassigned.
 //Const is the preferred way to declare a variable with a constant value.

 //Let and constant follow block scoping rules





//A new "this" scope
//The this scope with arrow functions is inherited from the context.
// With regular function s this always refers to the nearest function, while with arrow functions
// this problem is removed, and you won't need to write var that = this ever again.




//ARROW FUNCTION 
// cleaner way of writing a function, function hestur with parameter a

var hestur = a => a+1
hestur(2)



//Generators
//Generators are a special kind of function with the ability to pause itself, and resume later,
//allowing other code to run in the meantime. A generator can contain many yield keywords, thus halting itself multiple times, and it's
//identified by the *function keyword,




//Constructor

//Classes have a method called constructor which is called when a class is initialized
// via new .



//Template literals

// with the backticks and 

var x = 1
const string = `here it is ${x} and results`



//Default Parameters
//Functions now support defailt parameters

const quiz = function(index = 0, testing = true) { /* ... */ }
quiz()


// Get and SET

class Personname {
    get fullName() {
    return `${this.firstName} ${this.lastName}`
    }
}




class Personname2 {
    set age(years) {
    this.theAge = years
    }
}




// Alot was changed with the new version like, Map and Set, for of loop, enhances objects literals, super(), dynamic property and more..























///////////////////   DOM     ///////////////




// HTML DOM is a standard for how to get, change, add, or delete HTML elements.
//HTML DOM methods are actions you can perform (on HTML Elements).
//HTML DOM properties are values (of HTML Elements) that you can set or change.



//Create an element

var DOMobject = document.createElement('h3')
DOMobject.textContent="Nafnalisti"
DOMobject.style.height = "10rem"

document.body.appendChild(DOMobject)



//get element 

const h1txt = document.getElementsByClassName('h1-title') 
 



//calling the classes in html

const h1line = document.querySelector(".h1-title")
const addBtn = document.querySelector(".addBtn")
const body = document.querySelector("body")






//Changin styles of thems

body.style.backgroundColor = "lightyellow"


h1line.style.color = "orange"



addBtn.style.backgroundColor = "green"
addBtn.style.color = "orange"





//changing styles after event, with eventlistener
addBtn.addEventListener("click", function(){
    this.style.backgroundColor= "purple"
})

h1line.addEventListener("click", function(){
    this.style.backgroundColor = "brown"
})


///Changing styles in all ot the "li"

const userlist = document.querySelectorAll(".namelist li");


for(user of userlist){
    user.addEventListener("click", function(){
        this.style.color = "brown";
    })
}











/// Add new "li" names on the list 


const adduserlist = document.querySelector(".namelist");



const addinput = document.querySelector(".input-box")


addBtn.addEventListener("click", function(){
    const newLi = document.createElement("LI")
    const liContent = document.createTextNode(addinput.value)

    newLi.appendChild(liContent)
    adduserlist.appendChild(newLi)


})


















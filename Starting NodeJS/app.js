// video 3
// console.log('bacon');
//
// var person = {
//     firstName: "Anirudha",
//     lastname: "Paul",
//     age: 21
// };
//
// console.log(person);
//
// function addNumber(a , b)
// {
//     return a+b;
// }
//
// console.log(addNumber(4 , 3));
//
// function worthless()
// {
//
// }
//
// console.log(worthless());
//
// var printBacon = function(){
//     console.log("Chicken Rocks");
// };
//
// printBacon();
//
// setTimeout(printBacon , 5000);

//Video 4 : Handling Multiple Request
//
// function placeAnOrder(orderNumber)
// {
//     console.log("Customer order:", orderNumber);
//
//     cookAndDeliverFood(function()
//     {
//         console.log("Order Done : " , orderNumber);
//     })
// }
//
// //Simulate a 5 second operation
// function cookAndDeliverFood(callback)
// {
//     setTimeout(callback , 5000);
// }
//
// //Simulate users web request
// placeAnOrder(1);
// placeAnOrder(2);
// placeAnOrder(3);
// placeAnOrder(4);
// placeAnOrder(5);
// placeAnOrder(6);

//Video 5: Understanding References to Objects

// var Bucky = {
//     favFood: "bacon",
//     favMovie: "Chappie"
// };
//
// var Person = Bucky;
// Person.favFood = "salad";
// console.log(Bucky.favFood);
//
// console.log(19 == '19'); // Values
// console.log(19 === '19'); // Values and type

//Video 6: this
//
// var Bucky = {
//     printFirstName: function(){
//         console.log("My name is Anirudha");
//         console.log(this === Bucky);
//     }
// };
// Bucky.printFirstName();
//
// //The default calling context is global
// function doSomethingWorthless()
// {
//     console.log("\n This is stupid");
//     console.log(this === global);
// }
//
// doSomethingWorthless();

//Video 7: Prototype

function User(){
    this.name = "" ;
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer)
    {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var x = 5 ;

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);

console.log("Bucky = " + Bucky.life);
console.log("Wendy = " + Wendy.life);

// Add function or variable to a object on the fly

User.prototype.uppercut = function uppercut(targetPlayer)
{
    targetPlayer.life -= 3 ;
    console.log(this.name + " just uppercutterd " + targetPlayer.name);
}

Wendy.uppercut(Bucky)



console.log("Bucky = " + Bucky.life);
console.log("Wendy = " + Wendy.life);

User.prototype.magic  = 60 ;


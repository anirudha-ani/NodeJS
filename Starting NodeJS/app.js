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

function placeAnOrder(orderNumber)
{
    console.log("Customer order:", orderNumber);

    cookAndDeliverFood(function()
    {
        console.log("Order Done : " , orderNumber);
    })
}

//Simulate a 5 second operation
function cookAndDeliverFood(callback)
{
    setTimeout(callback , 5000);
}

//Simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);


console.log('bacon');

var person = {
    firstName: "Anirudha",
    lastname: "Paul",
    age: 21
};

console.log(person);

function addNumber(a , b)
{
    return a+b;
}

console.log(addNumber(4 , 3));

function worthless()
{

}

console.log(worthless());

var printBacon = function(){
    console.log("Chicken Rocks");
};

printBacon();

setTimeout(printBacon , 5000);
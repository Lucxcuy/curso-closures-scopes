// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins; // += adicion
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

function createPetList() {
    const petList = [];
    function addPet(pet) {
        petList.push(pet);
        console.log(petList);
    }
    return addPet;
}

const mypetList = createPetList();

myPetList("Perro");
myPetList();

function createPetList() {
    const petList = [];
    return function addPet(myPet) {
        if (myPet) {
            petList.push(myPet);
        }
        return petList;
    };
}

const myPetList = createPetList();

console.log(myPetList("Perro"));
console.log(myPetList());

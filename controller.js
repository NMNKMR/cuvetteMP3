//Importing Food Items Data.
const foodData = require('./food.json');

//Controller Methods
const getAllFoodItems = (foodData)=> {
    return {response: foodData};
}

const getFoodByCatg = (foodData, category) => {
    const foodByCatg = foodData.filter(item => item.category === category);
    return {response: foodByCatg};
}

const getFoodAboveCal = (foodData, calValue) => {
    const foodAboveCal = foodData.filter(item => item.calorie > calValue);
    return {response: foodAboveCal};
}

const getFoodBelowCal = (foodData, calValue) => {
    const foodBelowCal = foodData.filter(item => item.calorie < calValue);
    return {response: foodBelowCal};
}

const getFoodHighPro = (foodData) => {
    const foodOfHighPro = [...foodData];
    foodOfHighPro.sort((a, b) => b.protiens-a.protiens);
    return {response: foodOfHighPro}
}

const getFoodLowCab = (foodData) => {
    const foodOfLowCab = [...foodData];
    foodOfLowCab.sort((a,b) => a.cab-b.cab);
    return {response: foodOfLowCab}
}

//Functions Invoking

console.log(getAllFoodItems(foodData));

//console.log(getFoodByCatg(foodData, "Dairy")); 
//Category Options: Vegetable, Fruit, Protein, Nuts, Grain, Dairy

// console.log(getFoodAboveCal(foodData, 100));
// console.log(getFoodBelowCal(foodData, 100));
// console.log(getFoodHighPro(foodData));
// console.log(getFoodLowCab(foodData));
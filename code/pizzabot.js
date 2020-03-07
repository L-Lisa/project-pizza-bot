
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

alert(`Hey, happy to serve your pizza! On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}!`);
const orderName = prompt("Enter the name of the pizza you want to order today!");

//Function for checking the order name
const checkOrderName = (orderName) => {
  if (orderName == hawaiian || orderName == vegetarian || orderName == pepperoni) {
    return true;
  } else {
    return false;
  }
}

//Invoking the function
const test = checkOrderName(orderName);


//Function for total cost of the order
const totalCost = (orderQuantity) => {
  orderTotal = (orderQuantity * pizzaPrice);
  return orderTotal;
}

//Function for calculating cooking time
const cookingTime = (orderQuantity) => {
  if (orderQuantity < 3) {
    return (10);
  } else if (orderQuantity < 6) {
    return (15);
  } else {
    return (20);
  }
}


const checkOrder = (test) => {
  if (test === true) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`);
    //Invoking the function
    orderTotal = totalCost(orderQuantity);
    //Invoking the function
    minutes = cookingTime(orderQuantity);
    alert
    document.getElementById("greeting").innerHTML = `The pizza will take ${minutes} minutes. Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kronor!`;
  } else {
    alert
    document.getElementById("greeting").innerHTML = `Select a pizza from the menu`;
  }
}

//Invooking the function
checkOrder(test);
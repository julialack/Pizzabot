const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`
);

const orderName = prompt(
  "Enter the name of the pizza you want to order today:"
);
const orderQuantity = parseInt(prompt(`How many of ${orderName} do you want?`));

const orderTotal = totalCost(orderQuantity);
alert(
  `Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizzas will take ${cookingTime(
    orderQuantity
  )} minutes.`
);

if (checkOrderName(orderName)) {
  alert(`The pizzas will take ${cookingTime(orderQuantity)} minutes.`);
} else {
  alert(
    "Sorry, we don't have that pizza on the menu. Please choose from the available options."
  );
}

function checkOrderName(orderName) {
  return [vegetarian, hawaiian, pepperoni].includes(orderName);
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 6) {
    return 20;
  } else if (orderQuantity >= 3) {
    return 15;
  } else {
    return 10;
  }
}

// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

console.log(`CampusEats has ${tasks.length} open tasks`);

// price of one item, how many items, and the type of customer
// VIP customers get a 10% discount
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  // check the inputs first so we do not get a wrong total
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// the API key is read from an environment variable, it is never written here
const apiKey = process.env.API_KEY;

console.log(calculateTotal(100, 2, "vip"));

module.exports = { calculateTotal, tasks };

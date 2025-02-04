//Task 1
let customer = {name: "John Doe", age: 35, email: "john.doe@gmail.com"};
//Logging each property
console.log(`Customer Name:, ${customer.name}`)
console.log(`Customer Age: ${customer.age}`)
console.log(`Customer Email: ${customer.email}`);

//Task 2
let order = {orderId: 12345, totalAmount: 150, status: "Processing",
    //Add displayOrder() method + calling to log properties
    displayOrder: function() { 
        console.log(`Order ID: ${order.orderId}`)
        console.log(`Order Total: ${order.totalAmount}`)
        console.log(`Order Status: ${order.status}`)}
    };
    order.displayOrder()

//Task 3
let cartItems = ["Top", "Skirt", "Jeans"]
cartItems.push("Shorts"); // adding new item
cartItems.pop(); //removing last item
cartItems.unshift("Pink Socks"); //adding new item to beginning
cartItems.shift(); //removing first item
//Logging final array
console.log(`Cart Details: ${cartItems}`);

//Task 4 
let prices = [100,200,300]
//Appying 10% discount using map()
let discountedPrices = prices.map(price => price * .9);
//New discounted prices
console.log(`Discounted Prices: ${discountedPrices}`);

//Task 5
let inventory = [4,19,3,0,29]
//Filter(): removing 0 stock products
function filter (array,test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
//Logging filtered array
console.log(`Inventory: ${inventory.filter((stockQuantity => stockQuantity>0))}`);

//Task 6 
let sales = [150,200,350,250]
console.log(`Total Revenue : $${sales.reduce((a,b) => a + b, 0)}`); //calculating and logging total revenue 

//Task 7 
let customers = ["Alice", "Bob", "Charlie", "David"]
console.log(`Customer Search Results: ${customers.find(customers => customers === "Charlie")}`);

//Task 8 
const calculateTax =  function (amount,taxRate) {
    return amount * taxRate
}
let tax = calculateTax(300, .10);
console.log(`Calculated Tax: $${tax}`);

//Task 9
const applyDiscount =  function (price, discountPercent) {
    return price - (price *discountPercent/100)
}
let discountedPrice = applyDiscount(300, 20)
console.log(`Price after Discount: $${discountedPrice}`);
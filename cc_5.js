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
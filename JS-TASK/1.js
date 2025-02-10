// Problem 1 .Inventory Price Update
// Description:

// You have an array of product objects. Each object contains an id, name, price, and quantity. Your tasks are:
// Using Map: Update the price by applying a 10% discount to products with a quantity greater than 100.
// Using Filter: Create a new array containing only the products that received the discount (i.e. where the discounted price is less than the original price).
// using forEach: Log a message for each discounted product showing the product name and its new price.
// const products = [   { id: 1, name: "Widget", price: 50, quantity: 120 },   { id: 2, name: "Gadget", price: 30, quantity: 80 },   { id: 3, name: "Doohickey", price: 100, quantity: 200 },   { id: 4, name: "Thingamajig", price: 75, quantity: 90 } ];

const products = [
  { id: 1, name: "Widget", price: 50, quantity: 120 },
  { id: 2, name: "Gadget", price: 30, quantity: 80 },
  { id: 3, name: "Doohickey", price: 100, quantity: 200 },
  { id: 4, name: "Thingamajig", price: 75, quantity: 90 },
];

const updatedProducts = products.map((product) => {
  if (product.quantity > 100) {
    return {
      ...product,
      price: product.price * 0.9,
    };
  }
  return product;
});

const discountedProducts = updatedProducts.filter((product) => {
  const originalProduct = products.find((p) => p.id === product.id);
  return product.price < originalProduct.price;
});

console.log("Products with applied discounts:");
discountedProducts.forEach((product) => {
  console.log(`${product.name}: New price $${product.price}`);
});

console.log("\nAll Updated Products:", updatedProducts);
console.log("\nDiscounted Products Only:", discountedProducts);

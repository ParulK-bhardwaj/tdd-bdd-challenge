const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("should return the area of rectangle", function() {
  const width = 2
  const height = 3
  const testArea = utils.area(width, height)
  expect(testArea).to.be.a("number")
  expect(testArea).to.equal(6)
})

it("should return the perimeter of a rectangle", function() {
  const width = 2
  const height = 3
  const testPerimeter = utils.perimeter(width, height)
  expect(testPerimeter ).to.be.a("number")
  expect(testPerimeter ).to.equal(10)
})

it("should return the area of a circle with radius", function() {
  const radius = 2
  const testArea = utils.circleArea(radius)
  expect(testArea).to.be.a("number")
  expect(testArea).to.equal(12.56)
})


// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const apple = utils.createItem("Apple", 0.99)
  const cheese = utils.createItem("Cheese", 6.99)
  const cart = [apple, cheese]
  const testCart = utils.getShoppingCart(cart)
  expect(cart).to.eql(testCart)
  expect(cart).to.be.a("array")
  expect(cart[0]).to.be.a("object")
  expect(cart[0]).to.have.property("name", "Apple")
  expect(cart[1]).to.have.property("name", "Cheese")
  expect(cart[0].quantity).to.eql(1)
})

it("Should add a new item to the shopping cart", function() {
  cart = []
  const item1 = utils.createItem("apple", 0.99)
  testCart = utils.addItemToCart(cart, item1)
  testCart = utils.addItemToCart(cart, item1)
  expect(testCart).to.be.a("array")
  expect(testCart[0]).to.have.property("name", "apple")
  expect(testCart[0]).to.have.property("quantity", 2)
  expect(testCart.length).to.eql(1)
})

it("Should return the number of items in the cart", function() {
  cart = []
  const apple = utils.createItem("Apple", 0.99)
  const cheese = utils.createItem("Cheese", 6.99)
  cart = utils.addItemToCart(cart, apple)
  cart = utils.addItemToCart(cart, cheese)
  numberOfItems = utils.getNumItemsInCart(cart)
  expect(numberOfItems).to.be.a("number")
  expect(numberOfItems).to.eql(2)
})

it("Should remove items from cart", function() {
  cart = []
  const apple = utils.createItem("Apple", 0.99)
  const cheese = utils.createItem("Cheese", 6.99)
  cart = utils.addItemToCart(cart, apple)
  cart = utils.addItemToCart(cart, apple)
  cart = utils.addItemToCart(cart, cheese)
  cart = utils.removeItemFromCart(cart, apple)
  expect(cart).to.be.a("array")
  expect(cart[0]).to.have.property("name", "Apple")
  expect(cart[0]).to.have.property("quantity", 1)
  expect(cart[1]).to.have.property("quantity", 1)
  expect(testCart.length).to.eql(1)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")

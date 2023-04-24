// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  // should return the perimeter
  return (2 * w) + (2 * h)
}

const circleArea = r => {
  // should return the area of the circle
  return 3.14 * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = (cart) => {
  return cart
  // should return the current state of shopping cart
}

const addItemToCart = (cart, item) => {
  // should add item to shopping cart
  const itemIndex = cart.findIndex((itemInCart => itemInCart.name === item.name))
  if (itemIndex !== -1) {
    cart[itemIndex].quantity++
  } else {
    cart.push(item)
  }
  return cart;
}

const getNumItemsInCart = (cart) => {
  // should return the total quantity of items in cart
  items = 0
  cart.forEach(item => {
    items += item.quantity;
  })
  return items;
}

const removeItemFromCart = (cart, item) => {
  // should remove item from shopping cart
  const itemIndex = cart.findIndex((itemInCart => itemInCart.name === item.name))
  if (itemIndex !== -1) {
    if(cart[itemIndex].quantity === 1) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity--;
    }
  } 
  return cart;
};

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}

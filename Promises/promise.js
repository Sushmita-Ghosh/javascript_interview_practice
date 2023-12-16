// Consuming the promise - generally we worry about this step.
const cart = null; //--> to reject the promise
// const cart = ["apple", "banana"];

const promise = createOrder(cart); //orderID
//console.log(promise); // Promise { <pending> }

promise
  .then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// Creating the promise
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //  we will check if our cart is validated
    // if not we will reject the promise
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // once the cart is validated we can create an order and resolve with orderID
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  if (cart) {
    return true; // here we can check if cart is empty
  } else return false;
}

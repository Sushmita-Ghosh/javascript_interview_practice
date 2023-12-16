// Once the order is created we can proceed to payment
// we will introduce the concept of promise chaining with proceedToPayment callback.

// const cart = null;
const cart = ["apple", "banana"];

const promise = createOrder(cart); //orderID

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// Creating the promise
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

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

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment done successfully");
  });
}

// What happens if we just keep the .catch method is our .then chain stops in between- so like if any
// error occurs in the .then chain, it will stop there.

// If we want our chain to not stop in between, if we move our .catch method up the chain any
// .then that comes after it will definitely be executed.

// In the example below, proceedToPayment will still be executed and we will get
// Payment is successfull even if valid orderId is not found.

// attach a callback to the .catch method --> "attach" is the lingo

// const cart = null;
const cart = ["apple", "banana"];

const promise = createOrder(cart); //orderID

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    //   only catches error for the above .then
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    //   generic catch will catch all errors
    console.log(err.message);
  })
  .then(function () {
    console.log("This will definitely be called");
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

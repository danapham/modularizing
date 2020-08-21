import {
  makeModalPortion,
  chargeIt,
  showCartItems,
} from "./make-cart-modal.js";
import { makeCartPortion } from "./make-cart-cart.js";
import { setCart } from "./../helpers/data/cartData.js";

const makeCart = () => {

  makeCartPortion();
  makeModalPortion();

  $("#charge-it").click(() => {
    const ccNum = $("#credit-card").val();
    chargeIt(ccNum);
  });

  showCartItems();
};

const addToCart = (array, index) => {
  const cartButton = $(`#cart-add-${index}`);

  cartButton.on("click", () => {
    setCart(array[index]);
    makeCart();
  });
};

export { addToCart }

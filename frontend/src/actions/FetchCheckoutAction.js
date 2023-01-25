function fetchCheckoutRequest() {
  return { type: "FETCH_CHECKOUT_REQUEST" };
}
function fetchCheckoutSuccess(checkout) {
  return { type: "FETCH_CHECKOUT_SUCCESS", checkout };
}

function fetchCheckoutFailure(error) {
  return { type: "FETCH_CHECKOUT_FAILURE", error };
}
export function fetchCheckout() {
  return async function (dispatch) {
    try {
      dispatch(fetchCheckoutRequest());
      const response = await fetch(
        "https://bookhubbackend.azurewebsites.net/checkout"
      );
      const data = await response.json();
      console.log(data);
      dispatch(fetchCheckoutSuccess(data));
    } catch (error) {
      dispatch(fetchCheckoutFailure(error));
    }
  };
}

function fetchUsersRequest() {
  return { type: "FETCH_USERS_REQUEST" };
}
function fetchUsersSuccess(users) {
  return { type: "FETCH_USERS_SUCCESS", users };
}

function fetchUsersFailure(error) {
  return { type: "FETCH_USERS_FAILURE", error };
}
export function fetchUsers() {
  return async function (dispatch) {
    try {
      dispatch(fetchUsersRequest());
      const response = await fetch(
        "https://bookhubbackend.azurewebsites.net/users"
      );
      const data = await response.json();
      // console.log(data);
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error));
    }
  };
}

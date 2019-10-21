

function usersReducer(user = '', action) {

  switch(action.type){
    case "SET_USER":
      return {
        user: action.user
      }

    default:
      return user
  }

}

export default usersReducer;

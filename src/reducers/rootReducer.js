



export default (state={user: ''}, action) => {

  console.log("state from root", state)
  console.log("nextState ", action)

  switch (action.type) {
    case "SET_USER":
      return { user: action.user }

    default:
      return state
  }
}

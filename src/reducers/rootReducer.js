



export default (state={user: '', channel: ''}, action) => {

  console.log("state from root", state)
  console.log("nextState ", action)

  switch (action.type) {

    case "SET_USER":
      return { user: action.user }

    case "SET_CHANNEL":
      return { channel: action.channel }

    default:
      return state
  }
}

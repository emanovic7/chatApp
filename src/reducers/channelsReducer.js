
export default (
  state = {
    channels: [],
    currentChannel: {}
  },
  action) => {

  switch(action.type){

    case "SET_CHANNELS":
      return {
        channels: [...action.channels]
      }

    case "SET_CHANNEL":
      return {
        currentChannel: action.channel
      }
      // console.log(action.channel)

    case "ADD_CHANNEL":
    // debugger
      return {
        ...state,
        channels: [...state.channels, action.channel]
      }

    default:
      return state
  }

}

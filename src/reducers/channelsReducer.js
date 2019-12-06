
export default (
  state = {
    channels: [],
    currentChannel: {}
  },
  action) => {

  switch(action.type){

    case "SET_CHANNELS":
    debugger
      return {
        channels: [...state.channels, action.channels]
      }

    case "SET_CHANNEL":
      return {
         ...state,
        currentChannel: action.channel
      }
      // console.log(action.channel)

    case "ADD_CHANNEL":
    // debugger
      return {
        ...state,
        channels: [...state.channels, action.channel]
      }

    case 'REMOVE_CHANNEL':
      console.log(action.channel)
      console.log("state", state)
      // const newState = state.channels.filter(channel =>
      //   channel.id !== action.channel.id
      // )
      // console.log(newState)

    default:
      return state
  }

}

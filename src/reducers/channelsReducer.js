
export default (state = {channels: []}, action) => {

  switch(action.type){

    case "SET_CHANNEL":
      return {
        channel: action.channel
      }

    case "ADD_CHANNEL":
      return {
        ...state,
        channels: [...state.channels, action.channel]
      }

    default:
      return state
  }

}

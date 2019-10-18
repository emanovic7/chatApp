
export default (state = {channel: ''}, action) => {

  switch(action.type){

    case "SET_CHANNEL":
      return {
        channel: action.channel
      }

    default:
      return state
  }

}

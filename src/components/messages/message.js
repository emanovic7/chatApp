
import React from 'react';



const Message = (props) => {
  console.log(props)
  return(
    <div>
      <li>{props.message.message}</li>
    </div>
  )
}


export default Message;

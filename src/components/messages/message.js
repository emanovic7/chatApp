
import React from 'react';



const Message = (props) => {

  console.log("message props", props)
  return(
    <div className="message">
      <div>
        <p className="username">{props.message.user.username}</p>
      </div>
      <p className="text">{props.message.message}</p>
    </div>
  )
}




export default Message;

//
// <div className="message">
//         <div>
//           <img alt="user" src={this.props.photoUrl} />
//           <p className="username">{this.props.username}</p>
//         </div>
//         <p className="text">{this.props.text}</p>
//       </div>

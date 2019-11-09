// import Avatar from '@material-ui/core/Avatar';
// import Divider from '@material-ui/core/Divider';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import React from 'react';

// const Messages = ({ messages }) => {
//   return (
//     <List>

//       {messages.map((message, index) => {
//         <ListItem key={index} alignItems="flex-start">
//           <ListItemAvatar>
//             <Avatar alt="Small dog" src="https://placedog.net/200/200" />
//           </ListItemAvatar>
//           <ListItemText primary="Brunch this weekend?"/>
//         </ListItem>
//       })}

//       <Divider variant="inset" component="li" />
//     </List>
//   );
// }

// export default Messages;





import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';



const Messages = ({ messages }) => {

  return (
    <List>
      {messages.flatMap((message, index) => [(
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar>
            <Avatar alt="Small dog" src="https://placedog.net/200/200" />
          </ListItemAvatar>
          <ListItemText primary={message} />
        </ListItem>
      ), <Divider component="li" variant="inset" key={`divider-${index}`} />])}
    </List>
  );
}

export default Messages
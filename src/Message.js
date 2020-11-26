import './Message.css';
import { forwardRef } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Message = forwardRef(({ msg, username }, ref) => {
  const isUser = username === msg.username;
  return (
    <div ref={ref} className={`message ${isUser && 'message-user-right'} `}>
    <Card className={isUser ? 'message-user': 'message-guest'}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {!isUser && `${msg.username || 'Unknown user'}: `}{msg.message}
        </Typography>
      </CardContent>
    </Card>
    </div>

  )
});

export default Message;

import Mailer from 'react-native-mail';

export default sendMail = ({ date, path, amount }) =>
  Mailer.mail({
    subject: `Lunch ${date} ${amount}`,
    recipients: ['876528.inbox@arkiv.tripletex.no'],
    body: '.',
    attachment: {
      path: path.replace('file:///', '')
    }
  }, (error, event) => {
    if(error) {
      console.log(error)
    }
    console.log(event)
  });

import Mailer from 'react-native-mail';

export default sendMail = ({ date, path }) =>
  Mailer.mail({
    subject: `Lunch ${date}`,
    recipients: ['tbarbiche@gmail.com'],
    body: 'Utlegg',
    attachment: {
      path,  // The absolute path of the file from which to read data.
      type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
      name: '',   // Optional: Custom filename for attachment
    }
  }, (error, event) => {
    if(error) {
      console.log(error)
    }
    console.log(event)
  });

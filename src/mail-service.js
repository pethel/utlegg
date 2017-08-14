import Mailer from 'react-native-mail';

export default sendMail = () =>
  Mailer.mail({
    subject: 'need help',
    recipients: ['tbarbiche@gmail.com'],
    ccRecipients: ['tbarbiche@gmail.com'],
    bccRecipients: ['tbarbiche@gmail.com'],
    body: '',
    isHTML: true,
    attachment: {
      path: '',  // The absolute path of the file from which to read data.
      type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
      name: '',   // Optional: Custom filename for attachment
    }
  }, (error, event) => {
    if(error) {
      console.log(error)
    }
    console.log(event)
  });

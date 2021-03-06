/*global Email*/

function sendEmail() {
  let emailAddr = document.querySelector('#email-address');

  Email.send({
    SecureToken: 'feccd058-a86b-4bfb-9449-4d04c6bc3730',
    To: emailAddr.value,
    From: 'mayilin728@gmail.com',
    Subject: 'Awesome Pictures from Yilin',
    Body: 'Pictures are attached. Have a good day!',
    Attachments: [
      {
        name: 'Beijing.webp',
        path: 'https://yilin-ma.s3-us-west-1.amazonaws.com/Beijing.webp',
      },
      {
        name: 'Chongqing_boy.webp',
        path: 'https://yilin-ma.s3-us-west-1.amazonaws.com/CQU_bangbang.webp',
      },
      {
        name: 'CQU_bangbang.webp',
        path: 'https://yilin-ma.s3-us-west-1.amazonaws.com/CQU_bangbang.webp',
      },
      {
        name: 'Macau.webp',
        path: 'https://yilin-ma.s3-us-west-1.amazonaws.com/Macau.webp',
      },
      {
        name: 'lamp.webp',
        path: 'https://yilin-ma.s3-us-west-1.amazonaws.com/lamp.webp',
      },
      {
        name: 'shoe.webp',
        path: 'https://yilin-ma.s3-us-west-1.amazonaws.com/shoe.webp',
      },
      {
        name: 'warm.webp',
        path: 'https://yilin-ma.s3-us-west-1.amazonaws.com/warm.webp',
      },
    ],
  }).then((message) => {
    if (message.trim() === 'OK') {
      alert('Email was sent to you successfully.');
    } else {
      alert(message);
    }

    emailAddr.value = '';
  });
}

document
  .querySelector('#send-email')
  .addEventListener('click', () => sendEmail());

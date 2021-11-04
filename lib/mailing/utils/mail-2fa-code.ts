import mailerTransport from '../create-mailing-transport';

type confirmationMailProps = {
  recipientMail: string;
  recipientName: string;
  token: string;
};

const sendTwoFactorAuthCodeMail = async ({
  recipientMail,
  recipientName,
  token,
}: confirmationMailProps) => {
  try {
    await mailerTransport.sendMail({
      from: process.env.NEXTAUTH_EMAIL_FROM,
      to: recipientMail,
      subject: 'Login to trovy-loan.vercel.app - Loan On Demand',
      text: `Login to trovy-loan.vercel.app - trovy-loan.vercel.app Login as ${recipientMail}`,
      html: `<div>
                          <p>Hi, ${recipientName}</p>
                          <p style="color: blue">I will try to send you a token for authentication. Thanks</p>
                          <p>Copy this token ${token} and paste in the form to log into your account</p>
                      </div>`,
    });
    // console.log('sendtransport ran');
  } catch (err) {
    // console.log('nodemailer-transport', err);
  }
};

export default sendTwoFactorAuthCodeMail;

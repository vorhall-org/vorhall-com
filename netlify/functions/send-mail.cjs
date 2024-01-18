import { Resend } from 'resend';

export default async (req, context) => {

  /* eslint-disable no-undef */
  const resendKey = Netlify.env.get('RESEND_KEY');
  /* eslint-enable no-undef */

  const resend = new Resend(resendKey);
  const requestData = await req.text();
  const requestDataParsed = JSON.parse(requestData);

  const {
    from,
    message,
    subject,
    to,
  } = requestDataParsed;

  const {
    data,
    error,
  } = await resend.emails.send({
    from,
    html: message,
    subject,
    to: [to],
  });

  if (error) {
    return console.error({
      error,
    });
  }

  console.log({
    data,
  });

  return new Response('foo');
};

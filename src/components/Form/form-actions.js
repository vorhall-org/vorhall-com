export const submitForm = async (
  values,
  url,
  setFormDisabled,
  setSubmitError,
  setSubmitSuccess,
  errorMessage,
  successMessage,
) => {
  setFormDisabled(true);
  setSubmitError(false);

  const {
    email,
    name,
    text,
  } = values;

  const message = `
  Contact form on vorhall.com filled out.<br><br>
  from: ${name}, ${email}<br><br>

  message:
  ${text}
  `;

  const data = {
    from: 'Vorhall.com Contact <vorhall@resend.dev>',
    message,
    subject: 'Contact form on vorhall.com',
    to: 'vorhall23@gmail.com',
  };

  const options = {
    body: JSON.stringify(data),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };

  try {
    const response = await fetch(url, options);
    const responseData = await response.text();
    const responseDataParsed = JSON.parse(responseData);

    if (responseDataParsed.statusCode !== 200) {
      console.log('There was an error sending the mail');
      console.log(responseDataParsed);
      setSubmitError(errorMessage);
      setFormDisabled(false);

      return;
    }

    setSubmitSuccess(successMessage);

  } catch (e) {
    console.log(e);
    setSubmitError(errorMessage);
    setFormDisabled(false);
  }
}
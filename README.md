# vorhall.com

## Netlify functions

To test locally:

1. Add an `.env` file with the `RESEND_KEY`. Log in to resend.com and copy the API key from there. This is the same key which is configured as ENV-Variable on the netlify site config.

2. Install netlify-cli:

```bash
npm install netlify-cli -g
```

3. Start the netlify dev envivonment:

```bash
netlify dev
```

4. Access function

For example, the send-mail function is available under

`http://localhost:8888/.netlify/functions/send-mail`

5. Test e-Mail sending

You can add this script to an astro page to test the email sending:

```html
<script>

/** TESTING SEND MAIL WITH RESEND */

window.addEventListener('load', async () => {
  const url = 'http://localhost:8888/.netlify/functions/send-mail';

  const data = {
    from: 'Acme <onboarding@resend.dev>',
    message: 'Currently testing email from vorhall.com through Resend and Netlify functions',
    sender: 'vorhall23@gmail.com',
    subject: 'test email',
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
    const responseJson = await response.json();

    console.log(responseJson);
  } catch (e) {
    console.log(e);
  }
});
</script>
```
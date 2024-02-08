// based on
// - https://medium.com/@mariamaslam/integrating-cypress-gmail-tester-for-email-testing-9f02aa6a30aa
// - https://github.com/levz0r/gmail-tester?tab=readme-ov-file

import path, { dirname } from 'path';
import gmail from 'gmail-tester';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const email = await gmail.check_inbox(
  path.resolve(__dirname, 'GmailOAuth.json'),
  path.resolve(__dirname, 'GmailAccessToken.json'),
  {
    from: 'vorhall23@gmail.com',
    // include_body: true,
    max_wait_time_sec: 30,
    subject: 'test',
    to: 'vorhall23@gmail.com',
    wait_time_sec: 10,
  },
);

if (email) {
  console.log('Email was found!');
} else {
  console.log('Email was not found!');
}
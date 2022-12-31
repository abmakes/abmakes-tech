const mailgunSdk = require('mailgun-js');
const apiKey = process.env.MAILGUN_API_KEY;
const domain = `mail.${process.env.DOMAIN}`;
const mailgun = mailgunSdk({ apiKey, domain });

export default async (req, res) => {
  let response;

  try {
    response = await mailgun.messages().send({
      to: "adriaanboshoff@gmail.com",
      from: `"sandboxe64088eceae04e97aefd382ca646ee6b.mailgun.org", ${req.body.from}`,
      subject: req.body.subject,
      text: req.body.text
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ result: response.message });
};
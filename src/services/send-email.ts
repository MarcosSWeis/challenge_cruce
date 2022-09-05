import emailjs from "@emailjs/browser";
import HtmlSendEmail from "../components/html-email-send/Html-send-email";
if (process.env.REACT_APP_PUBLIC_EMAILJS_API_KEY) {
  emailjs.init(process.env.REACT_APP_PUBLIC_EMAILJS_API_KEY);
}

// export interface OprionsToSendEmail {
//   to: string;
//   subject: string;
//   text: string;
//   from: string;
//   html?: string;
// }
// const html = HtmlSendEmail;

export const sendEmail = async (email: string) => {
  let templateID: string = "template_bt3phx7";
  let publicKey: string = "43cI_wWMj6UdalYHX";
  if (process.env.REACT_APP_PUBLIC_EMAILJS_TEMPLATEID && process.env.REACT_APP_PUBLIC_EMAILJS_API_KEY) {
    templateID = process.env.REACT_APP_PUBLIC_EMAILJS_TEMPLATEID;
    publicKey = process.env.REACT_APP_PUBLIC_EMAILJS_API_KEY;
  }
  console.log(publicKey, templateID);
  try {
    const response = await emailjs.send("default_service", templateID, { email }, publicKey);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

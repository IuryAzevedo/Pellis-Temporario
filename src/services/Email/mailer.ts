import nodemailer, { Transporter } from "nodemailer";

interface MailConfig {
  address: string;
  transport: Transporter;
}

const mailConfig: MailConfig = {
  address: "comunicacao@unifor.br",
  transport: nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER!,
      pass: process.env.MAIL_PASS!,
    },
    tls: {
      rejectUnauthorized: false,
    },
  }),
};

export default mailConfig;

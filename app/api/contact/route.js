import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to you
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: "sajawalbaig007@gmail.com", // your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Autoresponse to user
    await transporter.sendMail({
      from: `"Sajawal Baig Portfolio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <h3>Hi ${name},</h3>
        <p>Thank you for reaching out! I have received your message and will get back to you shortly.</p>
        <p>— Sajawal Baig</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

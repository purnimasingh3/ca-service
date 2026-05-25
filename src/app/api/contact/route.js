import nodemailer from "nodemailer";

export async function POST(req) {

  try {

    const body = await req.json();

    const { name, email, contact,message, service } = body;

    const transporter = nodemailer.createTransport({

      host: "smtp.hostinger.com",

      port: 465,

      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      tls: {
        rejectUnauthorized: false,
      },

    });

    // Send Mail To Admin
    await transporter.sendMail({

      from: process.env.EMAIL_USER,
      to: `${process.env.EMAIL_USER},${email}`,

      subject: "Thank You for Contacting Fintax Adviser",

      html: `
    <div style="font-family: Arial; padding:20px;">
      <h2>Thank You for Contacting Fintax Adviser</h2>

      <p>Dear ${name},</p>

      <p>
        We have received your inquiry successfully.
        Our team will contact you shortly.
      </p>
        <p>
        If your matter is urgent, feel free to reply to this email.
      </p>
      <hr style="border:0; border-top:1px solid #ccc; margin:20px 0;" />
      <p><b> Submitted Details(For Reference):</b></p>

      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Contact:</b> ${contact}</p>
      <p><b>Message:</b> ${message}</p>
      <p><b>Service:</b> ${service}</p>
      <br/>

      <p>Best Regards,</p>

      <h3>Fintax Adviser Team</h3>

      <p>info@fintaxadviser.com</p>
    </div>
  `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.log("MAIL ERROR:", error);

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}             
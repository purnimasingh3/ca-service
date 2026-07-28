import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      contact,
      phone,
      number,
      mobile,
      message,
      msg,
      service,
      state,
      sourcePage,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      gclid,
    } = body;

    // Different forms may use different field names
    const phoneNumber = contact || phone || number || mobile;

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

    // Only show fields that actually exist
    const details = [
      name && `<p><b>Name:</b> ${name}</p>`,
      email && `<p><b>Email:</b> ${email}</p>`,
      phoneNumber && `<p><b>Contact Number:</b> ${phoneNumber}</p>`,
      service && `<p><b>Service:</b> ${service}</p>`,
      state && `<p><b>State:</b> ${state}</p>`,
      message && `<p><b>Message:</b> ${message}</p>`,
      msg && `<p><b>Source:</b> ${msg}</p>`,
      sourcePage && `<p><b>Source Page:</b> ${sourcePage}</p>`,
      utm_source && `<p><b>UTM Source:</b> ${utm_source}</p>`,
      utm_medium && `<p><b>UTM Medium:</b> ${utm_medium}</p>`,
      utm_campaign && `<p><b>Campaign:</b> ${utm_campaign}</p>`,
      utm_term && `<p><b>Keyword:</b> ${utm_term}</p>`,
      utm_content && `<p><b>Ad Content:</b> ${utm_content}</p>`,
      gclid && `<p><b>Google Click ID:</b> ${gclid}</p>`,
    ]
      .filter(Boolean)
      .join("");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: `${process.env.EMAIL_USER},${email}`,
      subject: "Thank You for Contacting Fintax Adviser",

      html: `
      <div style="font-family: Arial, sans-serif; padding:20px;">
        <h2>Thank You for Contacting Fintax Adviser</h2>

        <p>Dear <b>${name || "Customer"}</b>,</p>

        <p>
          We have received your enquiry successfully. Our team will contact you shortly.
        </p>

        <p>
          If your matter is urgent, simply reply to this email or call us.
        </p>

        <hr style="margin:20px 0;" />

        <h3>Submitted Details</h3>

        ${details}

        <br>

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
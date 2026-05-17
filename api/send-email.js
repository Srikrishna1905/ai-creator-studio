import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {

    return res.status(405).json({
      message: "Method Not Allowed",
    });

  }

  try {

    const response = await resend.emails.send({

      from: "AI Creator Studio <onboarding@resend.dev>",

      to: "srikrishnapaul95@gmail.com",

      subject: "AI Creator Studio Message",

      html: `
        <div style="font-family: Arial; padding: 20px;">

          <h1>New Contact Message</h1>

          <p>
            <strong>Name:</strong>
            ${req.body.name}
          </p>

          <p>
            <strong>Email:</strong>
            ${req.body.email}
          </p>

          <p>
            <strong>Message:</strong>
            ${req.body.message}
          </p>

        </div>
      `

    });

    return res.status(200).json({
      success: true,
      response,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      error,
    });

  }

}
import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend("re_ANpGVphv_KFDT1WgjWpwPyE794oBouJ1E");

app.post("/send-email", async (req, res) => {

  try {

    console.log("Received Data:", req.body);

    const response = await resend.emails.send({

      from: "AI Creator Studio <onboarding@resend.dev>",

      to: "srikrishnapaul95@gmail.com",

      subject: "AI Creator Studio Message",

      html: `
        <div style="font-family: Arial; padding: 20px;">

          <h1>New Contact Message</h1>

          <hr />

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

    console.log("SUCCESS:", response);

    res.json({
      success: true,
      response
    });

  } catch (error) {

    console.log("ERROR:", error);

    res.json({
      success: false,
      error
    });

  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
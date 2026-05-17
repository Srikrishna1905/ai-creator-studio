import { useState } from "react";

export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {

    try {

      const response = await fetch("http://localhost:5000/send-email", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          message,
        }),

      });

      const data = await response.json();

      console.log(data);

      if (data.success) {

        alert("Message Sent Successfully!");

        setName("");
        setEmail("");
        setMessage("");

      } else {

        alert("Failed to send message");

      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-center">
        AI Creator Studio
      </h1>

      <p className="text-center text-zinc-400 mt-4">
        Fully functional AI workflow project
      </p>

      <div className="max-w-2xl mx-auto mt-20 bg-zinc-900 p-8 rounded-2xl">

        <h2 className="text-3xl font-bold mb-8">
          Contact Form
        </h2>

        <div className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 rounded-xl bg-black border border-zinc-700"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded-xl bg-black border border-zinc-700"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 rounded-xl bg-black border border-zinc-700"
          />

          <button
            onClick={sendMessage}
            className="bg-cyan-500 py-4 rounded-xl font-bold"
          >
            Send Message
          </button>

        </div>

      </div>

    </div>

  );
}
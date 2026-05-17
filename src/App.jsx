import {
  FaRobot,
  FaCode,
  FaGithub,
  FaRocket,
  FaEnvelope,
  FaCloud
} from "react-icons/fa";

export default function App() {

  const tools = [
    {
      title: "VS Code",
      desc: "Professional coding environment",
      icon: <FaCode size={35} />
    },
    {
      title: "GitHub",
      desc: "Store and manage your projects",
      icon: <FaGithub size={35} />
    },
    {
      title: "Vercel",
      desc: "Deploy apps globally in seconds",
      icon: <FaRocket size={35} />
    },
    {
      title: "Resend API",
      desc: "Send emails directly from websites",
      icon: <FaEnvelope size={35} />
    }
  ];

  return (
    <div
      style={{
        backgroundColor: "#050505",
        color: "white",
        fontFamily: "Arial",
        minHeight: "100vh"
      }}
    >

      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          borderBottom: "1px solid #222"
        }}
      >
        <h2 style={{ color: "cyan" }}>
          AI Creator Studio
        </h2>

        <div
          style={{
            display: "flex",
            gap: "25px"
          }}
        >
          <a href="#" style={{ color: "white" }}>Home</a>
          <a href="#" style={{ color: "white" }}>Tools</a>
          <a href="#" style={{ color: "white" }}>Pricing</a>
          <a href="#" style={{ color: "white" }}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px"
        }}
      >

        <div
          style={{
            marginBottom: "30px",
            color: "cyan"
          }}
        >
          <FaRobot size={80} />
        </div>

        <h1
          style={{
            fontSize: "70px",
            marginBottom: "20px",
            lineHeight: "1.1"
          }}
        >
          Build AI Websites <br />
          Faster Than Ever
        </h1>

        <p
          style={{
            color: "#999",
            maxWidth: "700px",
            margin: "auto",
            fontSize: "20px"
          }}
        >
          Test modern AI development workflows using
          VS Code, React, GitHub, Resend, and Vercel.
        </p>

        <button
          style={{
            marginTop: "40px",
            padding: "15px 35px",
            borderRadius: "12px",
            border: "none",
            background: "cyan",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px"
          }}
        >
          Start Project
        </button>

      </section>

      {/* Tools Section */}
      <section
        style={{
          padding: "50px"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            marginBottom: "60px"
          }}
        >
          AI Workflow Tools
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px"
          }}
        >

          {tools.map((tool) => (

            <div
              key={tool.title}
              style={{
                background: "#111",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #222"
              }}
            >

              <div
                style={{
                  color: "cyan",
                  marginBottom: "20px"
                }}
              >
                {tool.icon}
              </div>

              <h2>{tool.title}</h2>

              <p
                style={{
                  color: "#999"
                }}
              >
                {tool.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Workflow Section */}
      <section
        style={{
          padding: "80px 50px"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            marginBottom: "50px"
          }}
        >
          Development Workflow
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px"
          }}
        >

          {[
            "Write Code",
            "Push to GitHub",
            "Deploy on Vercel",
            "Send Emails",
            "Scale Project"
          ].map((step, index) => (

            <div
              key={step}
              style={{
                background: "#111",
                padding: "25px",
                borderRadius: "20px",
                minWidth: "220px",
                textAlign: "center",
                border: "1px solid #222"
              }}
            >

              <div
                style={{
                  fontSize: "40px",
                  color: "cyan",
                  marginBottom: "15px"
                }}
              >
                {index + 1}
              </div>

              <h3>{step}</h3>

            </div>

          ))}

        </div>

      </section>

      {/* Pricing */}
      <section
        style={{
          padding: "80px 50px",
          background: "#090909"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            marginBottom: "60px"
          }}
        >
          Pricing
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px"
          }}
        >

          {[
            {
              name: "Starter",
              price: "$0"
            },
            {
              name: "Pro",
              price: "$19"
            },
            {
              name: "Enterprise",
              price: "$99"
            }
          ].map((plan) => (

            <div
              key={plan.name}
              style={{
                background: "#111",
                padding: "35px",
                borderRadius: "20px",
                border: "1px solid #222",
                textAlign: "center"
              }}
            >

              <h2>{plan.name}</h2>

              <h1
                style={{
                  fontSize: "60px",
                  color: "cyan"
                }}
              >
                {plan.price}
              </h1>

              <p style={{ color: "#999" }}>
                AI development tools included
              </p>

              <button
                style={{
                  marginTop: "20px",
                  padding: "12px 25px",
                  borderRadius: "10px",
                  border: "none",
                  background: "cyan",
                  cursor: "pointer"
                }}
              >
                Choose Plan
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Contact */}
      <section
        style={{
          padding: "80px 20px"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            marginBottom: "40px"
          }}
        >
          Contact
        </h2>

        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >

          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "16px",
              background: "#111",
              border: "1px solid #333",
              borderRadius: "12px",
              color: "white"
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "16px",
              background: "#111",
              border: "1px solid #333",
              borderRadius: "12px",
              color: "white"
            }}
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            style={{
              padding: "16px",
              background: "#111",
              border: "1px solid #333",
              borderRadius: "12px",
              color: "white"
            }}
          />

          <button
            style={{
              padding: "16px",
              border: "none",
              borderRadius: "12px",
              background: "cyan",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Send Message
          </button>

        </div>

      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #222",
          padding: "30px",
          textAlign: "center",
          color: "#777"
        }}
      >
        Built using React + VS Code + GitHub + Vercel
      </footer>

    </div>
  );
}
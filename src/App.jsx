import { useState } from "react";
import { site } from "./config.js";

function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="logo">{site.name}</a>
      <nav>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#contact" className="nav-cta">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  // Each drip is [x, height]. Change the numbers to change the drips.
  const drips = [[120, 70], [380, 50], [640, 90], [930, 60], [1090, 40]];
  return (
    <section className="hero" id="top">
      <h1>{site.headline}</h1>
      <p>{site.intro}</p>
      <div className="hero-actions">
        <a className="btn" href="#contact">Start your project</a>
        <a className="link" href="#work">See our work</a>
      </div>
      <svg className="drips" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden="true">
        <rect x="0" y="0" width="1200" height="30" />
        {drips.map(([x, h], i) => (
          <rect key={x} x={x} y="10" width="36" height={h} rx="18" style={{ animationDelay: `${i * 0.18}s` }} />
        ))}
      </svg>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <h2>What we make</h2>
      <div className="services">
        {site.services.map((s) => (
          <div key={s.title} className="service">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section" id="work">
      <h2>Recent work</h2>
      <div className="work">
        {site.work.map((w) => (
          <article key={w.name} className="project" style={{ background: w.color, color: w.text }}>
            <p>{w.type}</p>
            <h3>{w.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section" id="process">
      <h2>How it works</h2>
      <ol className="steps">
        {site.steps.map((s) => (
          <li key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact" id="contact">
      <h2>Tell us about your project</h2>
      <form onSubmit={handleSubmit}>
        <label>Your name<input name="name" required /></label>
        <label>Your email<input name="email" type="email" required /></label>
        <label>What do you need?<textarea name="message" rows="5" required /></label>
        <button className="btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {status === "sent" && <p className="note">Message sent. We will reply within two days.</p>}
        {status === "error" && (
          <p className="note">The message did not send. Email us at {site.email} instead.</p>
        )}
      </form>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} {site.name}</footer>
    </>
  );
}

import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

// Helper to dynamically load EmailJS SDK
const loadEmailJS = () => {
  return new Promise((resolve, reject) => {
    if (window.emailjs) {
      resolve(window.emailjs);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        resolve(window.emailjs);
      } else {
        reject(new Error('EmailJS SDK failed to initialize'));
      }
    };
    script.onerror = () => reject(new Error('Failed to load EmailJS SDK script'));
    document.head.appendChild(script);
  });
};

export default function Contact() {
  useScrollReveal();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId.includes('YOUR_') || templateId.includes('YOUR_') || publicKey.includes('YOUR_')) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage('EmailJS credentials are missing. Please ensure your .env credentials are added.');
      return;
    }

    try {
      const emailjs = await loadEmailJS();
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          name: formData.name,
          reply_to: formData.email,
          email: formData.email,
          to_name: personalDetails.name,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 6000);
    } catch (err) {
      console.error('EmailJS submit error:', err);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage('Failed to send email. Please check your EmailJS settings or try again.');
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Editorial Heading */}
        <div className="contact-header text-center">
          <span className="section-label">START A CONVERSATION</span>
          <h2 className="contact-title font-display">
            Let's build something <br />
            <span className="gold-italic">exceptional together.</span>
          </h2>
          <p className="contact-sub">
            Available for full-stack engineering roles, microservice architecture consultations, or technical inquiries.
          </p>
        </div>

        {/* Official Brand Icon Buttons Row */}
        <div className="brand-icons-row">
          {/* WhatsApp (Phase 2: Starts AFTER middle icons land) */}
          <a 
            href={personalDetails.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="brand-icon-btn wa reveal-on-scroll reveal-slide-left delay-950"
            aria-label="WhatsApp"
            title="Chat on WhatsApp"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.006l-1.416 5.17 5.294-1.388c1.463.797 3.111 1.218 4.776 1.219h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.668-1.038-5.176-2.925-7.062a9.925 9.925 0 0 0-7.064-2.947zm.003 1.677a8.28 8.28 0 0 1 5.886 2.454 8.272 8.272 0 0 1 2.44 5.886c0 4.582-3.727 8.31-8.31 8.31a8.27 8.27 0 0 1-4.225-1.155l-.303-.18-3.136.822.836-3.056-.197-.314A8.28 8.28 0 0 1 3.7 11.984c0-4.583 3.728-8.31 8.315-8.31zm4.568 11.517c-.25-.125-1.481-.73-1.71-.813-.23-.083-.396-.125-.563.125-.166.25-.646.812-.792.979-.146.166-.292.187-.542.062a6.85 6.85 0 0 1-2.015-1.243c-.888-.79-1.488-1.765-1.634-2.015-.146-.25-.015-.385.11-.51.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.563-1.354-.77-1.854-.203-.488-.41-.422-.563-.43l-.48-.008c-.166 0-.437.063-.667.313-.23.25-.875.854-.875 2.083s.896 2.417 1.02 2.583c.125.167 1.763 2.693 4.27 3.777.596.257 1.062.41 1.425.525.598.19 1.142.163 1.572.099.48-.071 1.481-.604 1.69-1.187.208-.583.208-1.083.146-1.187-.063-.105-.229-.167-.479-.292z"/>
            </svg>
          </a>

          {/* LinkedIn (Phase 1: First into Middle) */}
          <a 
            href={personalDetails.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="brand-icon-btn li reveal-on-scroll reveal-slide-left delay-100"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* GitHub (Phase 1: First into Middle) */}
          <a 
            href={personalDetails.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="brand-icon-btn gh reveal-on-scroll reveal-slide-right delay-100"
            aria-label="GitHub"
            title="GitHub Profile"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* Copy Email Button (Phase 2: Starts AFTER middle icons land) */}
          <button 
            onClick={handleCopyEmail} 
            className="brand-icon-btn copy-btn reveal-on-scroll reveal-slide-right delay-950"
            aria-label="Copy Email"
            title={copied ? "Copied Email!" : "Copy Email"}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            {copied && <span className="copied-tooltip font-mono">Copied!</span>}
          </button>
        </div>

        {/* Form & Direct Details Panel */}
        <div className="contact-panel glass-panel">
          <div className="contact-grid">
            {/* Left Quick Details */}
            <div className="contact-left-details">
              <h3 className="panel-subtitle font-display">Direct Contact</h3>

              <div className="c-detail-item">
                <span className="c-label font-mono">EMAIL ADDRESS</span>
                <span className="c-val">{personalDetails.email}</span>
              </div>

              <div className="c-detail-item">
                <span className="c-label font-mono">PHONE NUMBER</span>
                <span className="c-val">{personalDetails.phone}</span>
              </div>

              <div className="c-detail-item">
                <span className="c-label font-mono">LOCATION</span>
                <span className="c-val">{personalDetails.location}</span>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="contact-right-form">
              {submitStatus === 'success' ? (
                <div className="c-submitted-box">
                  <h3 className="font-display text-accent">Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. Muhammed Sawad K will respond promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="c-form">
                  {submitStatus === 'error' && (
                    <div className="c-error-banner">
                      {errorMessage}
                    </div>
                  )}

                  <div className="c-form-row">
                    <div className="c-field">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="c-field">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="c-field">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      placeholder="Opportunity / Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="c-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn btn-solid c-submit-btn">
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE ➔'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-soft);
          border-top: 1px solid var(--border-soft);
        }

        .text-center {
          text-align: center;
        }

        .contact-title {
          font-size: clamp(2.2rem, 5.5vw, 4.2rem);
          font-weight: 500;
          line-height: 1.15;
          margin-bottom: 1.2rem;
        }

        .gold-italic {
          color: var(--accent);
          font-style: italic;
        }

        .contact-sub {
          color: var(--text-muted);
          max-width: 580px;
          margin: 0 auto 2.5rem;
          font-weight: 300;
          font-size: 1rem;
        }

        .brand-icons-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 2.5rem;
        }

        .brand-icon-btn {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-softer);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .brand-icon-btn:hover {
          transform: translateY(-3px) scale(1.08);
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-soft);
          box-shadow: 0 0 20px var(--accent-soft);
        }

        .brand-icon-btn.wa:hover { border-color: #25D366; color: #25D366; background: rgba(37, 211, 102, 0.12); box-shadow: 0 0 20px rgba(37, 211, 102, 0.25); }
        .brand-icon-btn.li:hover { border-color: #0A66C2; color: #0A66C2; background: rgba(10, 102, 194, 0.12); box-shadow: 0 0 20px rgba(10, 102, 194, 0.25); }
        .brand-icon-btn.gh:hover { border-color: #ffffff; color: #ffffff; background: rgba(255, 255, 255, 0.1); box-shadow: 0 0 20px rgba(255, 255, 255, 0.2); }
        .brand-icon-btn.copy-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }

        .copied-tooltip {
          position: absolute;
          top: -2.2rem;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent);
          color: #0a0a0a;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          white-space: nowrap;
          pointer-events: none;
        }

        .contact-panel {
          max-width: 950px;
          margin: 0 auto;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
        }

        .panel-subtitle {
          font-size: 1.3rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: var(--text);
        }

        .c-detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 1.4rem;
        }

        .c-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
        }

        .c-val {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text);
        }

        .c-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .c-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .c-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .c-field label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .c-field input, .c-field textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-softer);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          color: var(--text);
          font-family: var(--font-body);
          font-size: 0.92rem;
          transition: border-color 0.3s ease;
        }

        .c-field input:focus, .c-field textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 10px var(--accent-soft);
        }

        .c-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 0.9rem;
          margin-top: 0.5rem;
        }

        .c-submitted-box {
          padding: 3rem 1.5rem;
          text-align: center;
        }

        .c-error-banner {
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-sm);
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #F87171;
          font-size: 0.85rem;
        }

        @media (max-width: 860px) {
          .brand-icons-row {
            gap: 1rem;
          }
          .brand-icon-btn {
            width: 46px;
            height: 46px;
          }
          .contact-panel {
            padding: 1.35rem;
          }
          .contact-grid {
            display: flex;
            flex-direction: column-reverse;
            gap: 2rem;
          }
          .contact-left-details {
            border-top: 1px solid var(--border-softer);
            padding-top: 1.5rem;
            margin-top: 0.5rem;
          }
          .panel-subtitle {
            font-size: 1.05rem;
            margin-bottom: 0.9rem;
          }
          .c-detail-item {
            margin-bottom: 0.75rem;
          }
          .c-val {
            font-size: 0.85rem;
            font-weight: 500;
          }
          .c-form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

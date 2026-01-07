import { HeaderReactRouter as Header } from '../components/HeaderReactRouter';
import { FooterReactRouter as Footer } from '../components/FooterReactRouter';
import { Mail, Phone, MapPin, MessageCircle, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export function HelpContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send the message
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 3000);
  };

  const faqs = [
    {
      question: 'How can I support the club financially?',
      answer: 'You can support us through one-time donations or by becoming a patron with monthly/yearly subscriptions. Visit our Support page to learn about different patron tiers and benefits.'
    },
    {
      question: 'How do I apply for Pro View access?',
      answer: 'Professional scouts can apply through our Pro View Access page. You\'ll need to provide your credentials, organization details, and social media profile. Applications are reviewed within 24-48 hours.'
    },
    {
      question: 'How can I advertise with the club?',
      answer: 'Register as an advertiser through our Advertise page. After verification, you can create campaigns targeting specific ad zones with transparent per-view pricing.'
    },
    {
      question: 'How do I join the academy?',
      answer: 'Visit our Academy section for information about our youth development program. You can contact us via WhatsApp or email for trial dates and enrollment details.'
    },
    {
      question: 'Where can I buy match tickets?',
      answer: 'Match tickets can be purchased through our official ticketing partners. Check individual fixture pages for ticket availability and pricing.'
    },
    {
      question: 'How do I stay updated with club news?',
      answer: 'Follow us on social media (Facebook, Twitter, Instagram, YouTube) and check our News section regularly for the latest updates, match reports, and announcements.'
    },
    {
      question: 'Can I volunteer with the club?',
      answer: 'We welcome volunteers! Contact us through the form below or via email to learn about current volunteer opportunities.'
    },
    {
      question: 'How can I report a technical issue?',
      answer: 'Please use the contact form below or email support@amaforgladiatorsfc.com with details about the issue you\'re experiencing.'
    }
  ];

  return (
    <>
      <Header />
      
      <main className="py-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-heading text-charcoal mb-2">Help & Contact</h1>
            <div className="h-1 w-16 bg-sky-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have a question? We're here to help. Browse our FAQs or get in touch with our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 p-8 sticky top-24">
                <h2 className="text-2xl font-heading text-charcoal mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-100 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                      <a href="mailto:support@amaforgladiatorsfc.com" className="text-sky-600 hover:text-sky-700 text-sm font-semibold">
                        support@amaforgladiatorsfc.com
                      </a>
                      <p className="text-xs text-slate-500 mt-1">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-100 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                      <a href="tel:+234XXXXXXXXXX" className="text-sky-600 hover:text-sky-700 text-sm font-semibold">
                        +234 XXX XXX XXXX
                      </a>
                      <p className="text-xs text-slate-500 mt-1">
                        Mon-Fri, 9AM-5PM WAT
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-100 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">WhatsApp</h3>
                      <p className="text-sm text-slate-600">
                        Click the WhatsApp icon in the bottom-right corner
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Instant messaging support
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Address</h3>
                      <p className="text-sm text-slate-600">
                        Amafor Gladiators Stadium<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="font-semibold text-charcoal mb-3">Specific Inquiries</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-slate-600">Advertising:</span>{' '}
                      <a href="mailto:advertise@amaforgladiatorsfc.com" className="text-sky-600 hover:text-sky-700 font-semibold">
                        advertise@amaforgladiatorsfc.com
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-600">Pro View:</span>{' '}
                      <a href="mailto:proview@amaforgladiatorsfc.com" className="text-sky-600 hover:text-sky-700 font-semibold">
                        proview@amaforgladiatorsfc.com
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-600">Complaints:</span>{' '}
                      <a href="mailto:complaints@amaforgladiatorsfc.com" className="text-sky-600 hover:text-sky-700 font-semibold">
                        complaints@amaforgladiatorsfc.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form & FAQs */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Form */}
              <div className="bg-white border border-slate-200 p-8">
                <h2 className="text-2xl font-heading text-charcoal mb-6">Send Us a Message</h2>
                
                {submitted && (
                  <div className="bg-sky-50 border border-sky-200 text-sky-700 px-4 py-3 mb-6 rounded-lg">
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Your Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Subject <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="What is your message about?"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      placeholder="Tell us more about your inquiry..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!name || !email || !subject || !message}
                    className="bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-8 py-3 transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* FAQs */}
              <div className="bg-white border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-8 h-8 text-sky-600" />
                  <h2 className="text-2xl font-heading text-charcoal">Frequently Asked Questions</h2>
                </div>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-slate-200 last:border-0 pb-6 last:pb-0">
                      <h3 className="font-semibold text-charcoal mb-2">{faq.question}</h3>
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
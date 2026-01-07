import { HeaderReactRouter as Header } from '../components/HeaderReactRouter';
import { FooterReactRouter as Footer } from '../components/FooterReactRouter';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function ProViewApplication() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [socialUrl, setSocialUrl] = useState('');
  const [organization, setOrganization] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main className="py-16 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-white border border-slate-200 p-12 text-center">
              <div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-sky-600" />
              </div>
              <h1 className="text-3xl font-heading text-charcoal mb-4">Application Submitted Successfully!</h1>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Thank you for applying for Pro View access. Your application is now{' '}
                <span className="font-semibold text-sky-600">pending manual review</span>.
              </p>
              <div className="bg-slate-50 p-6 mb-8 text-left">
                <h3 className="font-heading text-charcoal mb-4">What happens next?</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-sky-600 font-bold">✓</span>
                    <span>Our team will review your credentials within 24-48 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-600 font-bold">✓</span>
                    <span>You'll receive an email notification with the decision</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-600 font-bold">✓</span>
                    <span>If approved, login credentials will be sent to your email</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-600 font-bold">✓</span>
                    <span>You can then access the Pro View portal immediately</span>
                  </li>
                </ul>
              </div>
              <div className="text-slate-600 mb-8">
                <p>A confirmation email has been sent to:</p>
                <p className="font-semibold text-charcoal mt-1">{email}</p>
              </div>
              <Link 
                to="/"
                className="inline-block bg-charcoal hover:bg-charcoal/90 text-white px-8 py-3 transition-colors font-semibold"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="py-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-2xl">
          <Link to="/pro-view" className="inline-flex items-center gap-2 text-charcoal hover:text-sky-600 mb-8 font-semibold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Pro View Info
          </Link>

          <div className="bg-white border border-slate-200 p-8">
            <h1 className="text-3xl font-heading text-charcoal mb-2">Apply for Pro View Access</h1>
            <div className="h-1 w-16 bg-sky-600 mb-6"></div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Complete the application below. Our team will review your credentials and respond within 24-48 hours.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Professional Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@organization.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  required
                />
                <p className="text-sm text-slate-500 mt-2">
                  Use your professional email address
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  LinkedIn or Professional Profile URL <span className="text-red-600">*</span>
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={socialUrl}
                  onChange={(e) => setSocialUrl(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  required
                />
                <p className="text-sm text-slate-500 mt-2">
                  We'll use this to verify your professional background
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Organization/Club <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your club, agency, or organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Reason for Access <span className="text-red-600">*</span>
                </label>
                <textarea
                  placeholder="Briefly explain why you need Pro View access and how you plan to use it"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent h-32 resize-none"
                  required
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mb-8">
                <p className="text-sm text-blue-900 leading-relaxed">
                  <strong>Note:</strong> All applications are manually reviewed. We verify credentials through 
                  LinkedIn profiles and professional references. False or misleading information will result in 
                  automatic rejection.
                </p>
              </div>

              <button
                type="submit"
                disabled={!name || !email || !socialUrl || !organization || !reason}
                className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-4 transition-colors font-semibold"
              >
                Submit Application
              </button>
            </form>
          </div>

          <div className="mt-8 text-center text-slate-600">
            <p>Questions about Pro View?{' '}
              <a href="mailto:proview@amaforgladiatorsfc.com" className="text-sky-600 hover:text-sky-700 font-semibold">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
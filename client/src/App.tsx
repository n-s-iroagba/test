import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CookieConsent } from './components/CookieConsent';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Homepage } from './pages/Homepage';
import { NewsListing } from './pages/NewsListing';
import { NewsDetail } from './pages/NewsDetail';
import { LeagueFixtures } from './pages/LeagueFixtures';
import { FixtureDetail } from './pages/FixtureDetail';
import { AcademyHub } from './pages/AcademyHub';
import { SupportDonate } from './pages/SupportDonate';
import { DonationCheckout } from './pages/DonationCheckout';
import { PatronCheckout } from './pages/PatronCheckout';
import { SupporterWall } from './pages/SupporterWall';
import { SearchResults } from './pages/SearchResults';
import { AdvertiseInfo } from './pages/AdvertiseInfo';
import { ProViewAccess } from './pages/ProViewAccess';
import { ProViewApplication } from './pages/ProViewApplication';
import { AdvertiserRegistration } from './pages/AdvertiserRegistration';
import { HelpContact } from './pages/HelpContact';
import { Login } from './pages/Login';
import { PasswordResetRequest } from './pages/PasswordResetRequest';
import { PasswordResetForm } from './pages/PasswordResetForm';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<NewsListing />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/fixtures" element={<LeagueFixtures />} />
          <Route path="/fixtures/:id" element={<FixtureDetail />} />
          <Route path="/academy" element={<AcademyHub />} />
          <Route path="/academy/:section" element={<AcademyHub />} />
          <Route path="/support" element={<SupportDonate />} />
          <Route path="/donate" element={<DonationCheckout />} />
          <Route path="/become-patron" element={<PatronCheckout />} />
          <Route path="/supporter-wall" element={<SupporterWall />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/advertise" element={<AdvertiseInfo />} />
          <Route path="/advertise/register" element={<AdvertiserRegistration />} />
          <Route path="/pro-view" element={<ProViewAccess />} />
          <Route path="/pro-view/apply" element={<ProViewApplication />} />
          <Route path="/help" element={<HelpContact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordResetRequest />} />
          <Route path="/password-reset/:token" element={<PasswordResetForm />} />
        </Routes>
        <CookieConsent />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

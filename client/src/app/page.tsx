import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import { WhatsAppWidget } from '@/components/WhatsAppWidget'
import Link from 'next/link'
import { newsArticles, supporters } from '@/data/mockData'
import { Calendar, ArrowRight, ChevronRight } from 'lucide-react'

export default function Homepage() {
  const latestNews = newsArticles.slice(0, 3)
  const topPatrons = supporters.filter(s => s.tier === 'Grand Patron' || s.tier === 'Patron').slice(0, 4)

  return (
    <>
      <Header />
      
      {/* Hero Section - Clean & Athletic */}
      <section className="relative bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-block border-l-4 border-sky-600 pl-4 mb-6">
                <p className="text-sm uppercase tracking-wider text-slate-200 font-semibold">
                  Nigerian Premier League
                </p>
              </div>
              
              <h1 className="text-5xl lg:text-6xl mb-6 font-heading">
                Amafor Gladiators FC
              </h1>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-xl">
                Building champions through dedication, discipline, and elite performance. Join us in our journey to excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/support" 
                  className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 inline-flex items-center gap-2 transition-colors"
                >
                  Support the Club
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/news" 
                  className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 inline-flex items-center gap-2 transition-colors"
                >
                  Latest News
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/40">
                <div>
                  <div className="text-4xl font-heading mb-1 text-white">12+</div>
                  <div className="text-sm text-slate-300 uppercase tracking-wide">Titles</div>
                </div>
                <div>
                  <div className="text-4xl font-heading mb-1 text-white">200+</div>
                  <div className="text-sm text-slate-300 uppercase tracking-wide">Players</div>
                </div>
                <div>
                  <div className="text-4xl font-heading mb-1 text-white">68%</div>
                  <div className="text-sm text-slate-300 uppercase tracking-wide">Win Rate</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1574629810360-7efbbe195018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)',
                  clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-heading text-charcoal mb-2">Latest News</h2>
              <div className="h-1 w-16 bg-sky-600"></div>
            </div>
            <Link href="/news" className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-2">
              View All News
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <Link 
                key={article.id}
                href={`/news/${article.id}`}
                className="group bg-slate-50 border border-slate-200 overflow-hidden hover:border-sky-600 transition-colors"
              >
                <div 
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-sky-600 font-semibold">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-600 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading text-charcoal mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-2 leading-relaxed">
                    {article.snippet}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading text-charcoal mb-4">Support Our Mission</h2>
          <div className="h-1 w-16 bg-sky-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Your contribution helps develop young talent, improve facilities, and serve our community. 
            Join our patrons in building the future of Nigerian football.
          </p>

          {topPatrons.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-heading text-charcoal mb-6">Our Top Patrons</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {topPatrons.map((patron, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-heading text-2xl">
                      {patron.name.charAt(0)}
                    </div>
                    <p className="font-semibold text-charcoal">{patron.name}</p>
                    <p className="text-sm text-sky-600">{patron.tier}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/support"
              className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-4 inline-flex items-center gap-2 transition-colors font-semibold"
            >
              Donate Now
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/supporter-wall"
              className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-10 py-4 transition-colors font-semibold"
            >
              View Supporter Wall
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Zone - Homepage Bottom */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-slate-100 border border-slate-200 h-32 flex items-center justify-center text-slate-500">
            Ad Zone: Homepage Bottom (728x90)
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
      <WhatsAppWidget />
    </>
  )
}

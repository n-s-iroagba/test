import { HeaderReactRouter as Header } from '../components/HeaderReactRouter';
import { FooterReactRouter as Footer } from '../components/FooterReactRouter';
import { Link } from 'react-router-dom';
import { newsArticles, supporters } from '../data/mockData';
import { Calendar, ArrowRight, ChevronRight } from 'lucide-react';

export function Homepage() {
  const latestNews = newsArticles.slice(0, 3);
  const topPatrons = supporters.filter(s => s.tier === 'Grand Patron' || s.tier === 'Patron').slice(0, 4);

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
                  to="/support" 
                  className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 inline-flex items-center gap-2 transition-colors"
                >
                  Support the Club
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/news" 
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
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-heading text-charcoal mb-2">Latest News</h2>
              <div className="h-1 w-16 bg-sky-600"></div>
            </div>
            <Link 
              to="/news" 
              className="text-charcoal hover:text-sky-600 inline-flex items-center gap-1 font-semibold transition-colors"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <Link 
                key={article.id}
                to={`/news/${article.id}`}
                className="group"
              >
                <div className="relative overflow-hidden mb-4 bg-slate-100">
                  <div 
                    className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                </div>
                
                <div className="mb-2">
                  <span className="text-xs uppercase tracking-wider text-sky-600 font-semibold">
                    {article.category}
                  </span>
                  <span className="text-slate-400 mx-2">•</span>
                  <span className="text-xs text-slate-600">
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <h3 className="text-xl font-heading text-charcoal mb-2 group-hover:text-sky-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {article.snippet}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Support */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading text-charcoal mb-4">
              Be Part of Our Success
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Your support powers our journey. Join our community of patrons and help us achieve greatness.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {topPatrons.map((patron, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 p-6 text-center"
                >
                  <div className="w-16 h-16 bg-charcoal text-white rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-heading">
                    {patron.name.charAt(0)}
                  </div>
                  <h3 className="font-heading text-charcoal mb-1">{patron.name}</h3>
                  <p className="text-sm text-sky-600 font-semibold">{patron.tier}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/become-patron" 
                className="bg-charcoal hover:bg-charcoal/90 text-white px-8 py-4 inline-flex items-center justify-center gap-2 transition-colors"
              >
                Become a Patron
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/supporter-wall" 
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-4 inline-flex items-center justify-center gap-2 transition-colors"
              >
                View All Supporters
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
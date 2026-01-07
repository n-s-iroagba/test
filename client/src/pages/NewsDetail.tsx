import { HeaderReactRouter as Header } from '../components/HeaderReactRouter';
import { FooterReactRouter as Footer } from '../components/FooterReactRouter';
import { Link, useParams } from 'react-router-dom';
import { newsArticles } from '../data/mockData';
import { Calendar, Share2, ArrowLeft } from 'lucide-react';

export function NewsDetail() {
  const { id } = useParams();
  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return (
      <>
        <Header />
        <main className="py-16 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl mb-4 font-heading">Article Not Found</h1>
            <Link to="/news" className="text-sky-700 hover:text-sky-800 font-medium">
              Return to News
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedArticles = newsArticles.filter(a => a.id !== id).slice(0, 3);

  const handleWhatsAppShare = () => {
    const url = window.location.href;
    const text = encodeURIComponent(`Check out this article from Amafor Gladiators: ${article.title}`);
    window.open(`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <>
      <Header />
      
      <main className="py-16 bg-white">
        <article className="container mx-auto px-4 max-w-4xl">
          <Link to="/news" className="flex items-center gap-2 text-sky-700 hover:text-sky-800 mb-6 font-medium">
            <ArrowLeft className="w-5 h-5" />
            Back to News
          </Link>

          <div className="mb-6">
            <span className="text-sm text-sky-700 bg-sky-50 px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl mb-4 font-heading">{article.title}</h1>

          <div className="flex items-center gap-4 mb-8 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(article.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <button 
              onClick={handleWhatsAppShare}
              className="flex items-center gap-2 hover:text-sky-700 transition-colors"
              aria-label="Share article on WhatsApp"
            >
              <Share2 className="w-5 h-5" />
              Share on WhatsApp
            </button>
          </div>

          {/* Featured Image */}
          <div 
            className="h-96 bg-cover bg-center rounded-lg mb-8"
            style={{ backgroundImage: `url(${article.image})` }}
            role="img"
            aria-label={article.title}
          />

          {/* Video Embed */}
          {article.videoUrl && (
            <div className="mb-8">
              <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center">
                <p className="text-white">Video Player: {article.videoUrl}</p>
                {/* In production, this would be an actual YouTube/Vimeo embed */}
              </div>
            </div>
          )}

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Mid-Article Ad Zone (MID_ART: 640x360) */}
          <div className="my-8 bg-slate-100 border border-slate-200 rounded-lg p-8 text-center">
            <p className="text-sm text-slate-500 mb-2">Advertisement</p>
            <div className="bg-slate-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-slate-600">Mid-Article Ad Zone (640x360)</p>
            </div>
          </div>

          {/* Social Share */}
          <div className="border-t border-slate-200 pt-6 mb-12">
            <p className="text-slate-600 mb-4">Share this article:</p>
            <button 
              onClick={handleWhatsAppShare}
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2 font-medium"
              aria-label="Share article on WhatsApp"
            >
              <Share2 className="w-5 h-5" />
              Share on WhatsApp
            </button>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div>
              <h2 className="text-3xl mb-6 font-heading">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link 
                    key={related.id}
                    to={`/news/${related.id}`}
                    className="bg-slate-50 rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow"
                  >
                    <div 
                      className="h-40 bg-cover bg-center"
                      style={{ backgroundImage: `url(${related.image})` }}
                      role="img"
                      aria-label={related.title}
                    />
                    <div className="p-4">
                      <h3 className="mb-2 font-heading">{related.title}</h3>
                      <p className="text-sm text-slate-600">{related.snippet.substring(0, 80)}...</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
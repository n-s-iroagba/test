import { HeaderReactRouter as Header } from '../components/HeaderReactRouter';
import { FooterReactRouter as Footer } from '../components/FooterReactRouter';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/mockData';
import { Calendar, Filter } from 'lucide-react';
import { useState } from 'react';

export function NewsListing() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ['All', 'Match Report', 'Academy News', 'Club Announcement', 'Match Preview'];

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Header />
      
      <main className="py-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-8 font-heading">News & Updates</h1>

          {/* Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-slate-600" />
              <span className="text-slate-600">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-sky-700 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedArticles.map((article) => (
              <Link 
                key={article.id}
                to={`/news/${article.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${article.image})` }}
                  role="img"
                  aria-label={article.title}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-sky-700 font-medium">{article.category}</span>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  <h3 className="text-xl mb-2 font-heading">{article.title}</h3>
                  <p className="text-slate-600">{article.snippet}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-sky-700 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
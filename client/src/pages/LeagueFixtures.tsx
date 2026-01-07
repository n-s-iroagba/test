import { HeaderReactRouter as Header } from '../components/HeaderReactRouter';
import { FooterReactRouter as Footer } from '../components/FooterReactRouter';
import { Link } from 'react-router-dom';
import { fixtures, leagueTable } from '../data/mockData';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export function LeagueFixtures() {
  const [activeTab, setActiveTab] = useState<'table' | 'upcoming' | 'results'>('table');

  const upcomingFixtures = fixtures.filter(f => f.status === 'upcoming');
  const results = fixtures.filter(f => f.status === 'completed');

  return (
    <>
      <Header />
      
      <main className="py-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-8 font-heading">League & Fixtures</h1>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('table')}
              className={`px-6 py-3 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'table'
                  ? 'bg-sky-700 text-white font-medium'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              aria-pressed={activeTab === 'table'}
            >
              League Table
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'upcoming'
                  ? 'bg-sky-700 text-white font-medium'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              aria-pressed={activeTab === 'upcoming'}
            >
              Upcoming Fixtures
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`px-6 py-3 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'results'
                  ? 'bg-sky-700 text-white font-medium'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              aria-pressed={activeTab === 'results'}
            >
              Results
            </button>
          </div>

          {/* League Table */}
          {activeTab === 'table' && (
            <div className="bg-white rounded-lg shadow-card overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left px-4 py-3 font-heading">Pos</th>
                    <th className="text-left px-4 py-3 font-heading">Team</th>
                    <th className="text-center px-4 py-3 font-heading">P</th>
                    <th className="text-center px-4 py-3 font-heading">W</th>
                    <th className="text-center px-4 py-3 font-heading">D</th>
                    <th className="text-center px-4 py-3 font-heading">L</th>
                    <th className="text-center px-4 py-3 font-heading">GF</th>
                    <th className="text-center px-4 py-3 font-heading">GA</th>
                    <th className="text-center px-4 py-3 font-heading">GD</th>
                    <th className="text-center px-4 py-3 font-heading">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {leagueTable.map((team) => (
                    <tr 
                      key={team.position}
                      className={`border-b border-slate-100 hover:bg-slate-50 ${
                        team.team === 'Amafor Gladiators FC' ? 'bg-sky-50' : ''
                      }`}
                    >
                      <td className="px-4 py-3">{team.position}</td>
                      <td className="px-4 py-3 font-semibold">{team.team}</td>
                      <td className="text-center px-4 py-3">{team.played}</td>
                      <td className="text-center px-4 py-3">{team.won}</td>
                      <td className="text-center px-4 py-3">{team.drawn}</td>
                      <td className="text-center px-4 py-3">{team.lost}</td>
                      <td className="text-center px-4 py-3">{team.gf}</td>
                      <td className="text-center px-4 py-3">{team.ga}</td>
                      <td className="text-center px-4 py-3">{team.gd}</td>
                      <td className="text-center px-4 py-3 font-semibold">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Upcoming Fixtures */}
          {activeTab === 'upcoming' && (
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingFixtures.map((fixture) => (
                <Link
                  key={fixture.id}
                  to={`/fixtures/${fixture.id}`}
                  className="bg-white rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-sky-700 font-medium">{fixture.competition}</span>
                    <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      Upcoming
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={fixture.homeTeam === 'Amafor Gladiators FC' ? 'font-semibold' : ''}>
                        {fixture.homeTeam}
                      </span>
                      <span className="text-2xl text-slate-400">vs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={fixture.awayTeam === 'Amafor Gladiators FC' ? 'font-semibold' : ''}>
                        {fixture.awayTeam}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-slate-600 border-t border-slate-200 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(fixture.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{fixture.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{fixture.venue}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Results */}
          {activeTab === 'results' && (
            <div className="grid md:grid-cols-2 gap-6">
              {results.map((fixture) => (
                <Link
                  key={fixture.id}
                  to={`/fixtures/${fixture.id}`}
                  className="bg-white rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-sky-700 font-medium">{fixture.competition}</span>
                    <span className="text-sm bg-sky-100 text-sky-700 px-3 py-1 rounded-full">
                      Full Time
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={fixture.homeTeam === 'Amafor Gladiators FC' ? 'font-semibold' : ''}>
                        {fixture.homeTeam}
                      </span>
                      <span className="text-2xl font-heading">{fixture.homeScore}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={fixture.awayTeam === 'Amafor Gladiators FC' ? 'font-semibold' : ''}>
                        {fixture.awayTeam}
                      </span>
                      <span className="text-2xl font-heading">{fixture.awayScore}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-slate-600 border-t border-slate-200 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(fixture.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{fixture.venue}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
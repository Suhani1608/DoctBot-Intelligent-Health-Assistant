import React, { useState, useEffect } from 'react';
import { Bot, Activity, BookOpen, HeartPulse, Sparkles, ShieldCheck, ArrowRight, Loader2, Database } from 'lucide-react';
import { getRepositoryArticles } from './services/api';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch articles when repository tab is opened
  useEffect(() => {
    if (activeTab === 'repository') {
      const fetchArticles = async () => {
        setLoading(true);
        const data = await getRepositoryArticles();
        setArticles(data);
        setLoading(false);
      };
      fetchArticles();
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      {/* Navbar */}
      <header className="backdrop-blur-md bg-slate-900/80 border-b border-teal-500/20 sticky top-0 z-50 shadow-lg shadow-teal-950/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="bg-gradient-to-tr from-teal-500 to-cyan-400 p-2.5 rounded-xl shadow-md shadow-teal-500/30">
              <HeartPulse className="w-7 h-7 text-slate-950 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-wider bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                DoctBot
              </h1>
              <p className="text-xs text-teal-400/80 font-medium">Intelligent Health Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs text-teal-300 bg-teal-500/10 border border-teal-500/30 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Secure MERN Portal</span>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="max-w-7xl mx-auto px-6 mt-6">
        <div className="flex space-x-3 bg-slate-800/60 p-1.5 rounded-2xl border border-slate-700/50 backdrop-blur-md w-fit shadow-xl">
          <button 
            onClick={() => setActiveTab('dashboard')} 
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center space-x-2 ${
              activeTab === 'dashboard' 
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/25' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button 
            onClick={() => setActiveTab('chatbot')} 
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center space-x-2 ${
              activeTab === 'chatbot' 
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/25' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>AI Symptom Chatbot</span>
          </button>
          <button 
            onClick={() => setActiveTab('repository')} 
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center space-x-2 ${
              activeTab === 'repository' 
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/25' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Medical Repository</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero Card */}
            <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl shadow-cyan-950/50 border border-teal-400/20">
              <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                <HeartPulse className="w-96 h-96 text-white" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-teal-100 mb-4 border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-teal-200" />
                  <span>Next-Gen Healthcare Intelligence</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">Welcome to DoctBot Portal</h2>
                <p className="text-teal-50 text-base md:text-lg font-normal leading-relaxed mb-6">
                  An integrated MERN stack health assistant designed to provide instant symptom triage, personalized wellness tracking, and an accessible medical repository.
                </p>
                <button 
                  onClick={() => setActiveTab('chatbot')}
                  className="bg-slate-950 hover:bg-slate-900 text-teal-300 border border-teal-500/30 font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-lg group cursor-pointer"
                >
                  <span>Launch AI Assistant</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div 
                onClick={() => setActiveTab('chatbot')}
                className="group cursor-pointer bg-slate-800/50 hover:bg-slate-800 p-7 rounded-2xl border border-slate-700/60 hover:border-teal-500/50 transition-all duration-300 shadow-xl shadow-slate-950/20 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/10 p-3.5 rounded-xl w-fit text-teal-400 mb-5 border border-teal-500/20 group-hover:scale-110 transition-transform">
                  <Bot className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">AI Symptom Chatbot</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Analyze symptoms dynamically and receive preliminary health recommendations using integrated LLM tech.</p>
              </div>

              <div 
                onClick={() => setActiveTab('dashboard')}
                className="group cursor-pointer bg-slate-800/50 hover:bg-slate-800 p-7 rounded-2xl border border-slate-700/60 hover:border-cyan-500/50 transition-all duration-300 shadow-xl shadow-slate-950/20 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-3.5 rounded-xl w-fit text-cyan-400 mb-5 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">Fitness & Wellness Hub</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Track daily routines, physical metrics, and wellness milestones tailored for your lifestyle.</p>
              </div>

              <div 
                onClick={() => setActiveTab('repository')}
                className="group cursor-pointer bg-slate-800/50 hover:bg-slate-800 p-7 rounded-2xl border border-slate-700/60 hover:border-emerald-500/50 transition-all duration-300 shadow-xl shadow-slate-950/20 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/10 p-3.5 rounded-xl w-fit text-emerald-400 mb-5 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">Medical Repository</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Browse structured guides, clinical articles, and curated medical literature stored securely in MongoDB.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'chatbot' && (
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-3xl p-8 max-w-3xl mx-auto text-center shadow-2xl backdrop-blur-md animate-fadeIn">
            <div className="bg-teal-500/10 p-4 rounded-2xl w-fit mx-auto mb-4 border border-teal-500/20 text-teal-400">
              <Bot className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white">DoctBot Chat Interface</h2>
            <p className="text-slate-400 mb-6 text-sm">Chat module UI is ready to connect with your backend API routes!</p>
            <div className="border border-slate-700/80 rounded-2xl p-6 h-64 bg-slate-900/60 flex items-center justify-center text-slate-500 text-sm font-medium">
              [Chat window placeholder - ready for message state integration]
            </div>
          </div>
        )}

        {activeTab === 'repository' && (
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl backdrop-blur-md animate-fadeIn">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold flex items-center space-x-3 text-white">
                  <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span>Medical Knowledge Repository</span>
                </h2>
                <p className="text-slate-400 text-sm mt-1">Fetched live from MongoDB Atlas database.</p>
              </div>
              <div className="flex items-center space-x-2 text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                <Database className="w-3.5 h-3.5" />
                <span>Live DB Connected</span>
              </div>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-16 text-teal-400 space-y-3">
                <Loader2 className="w-8 h-8 animate-spin" />
                <p className="text-sm text-slate-400">Loading articles from MongoDB...</p>
              </div>
            ) : articles.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {articles.map((article) => (
                  <div key={article._id} className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-5 hover:border-emerald-500/40 transition-all">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-teal-500/10 text-teal-400 rounded-full mb-3 border border-teal-500/20">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{article.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{article.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-slate-700 rounded-2xl p-10 text-center bg-slate-900/40">
                <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-300 font-medium mb-1">No articles found in database yet.</p>
                <p className="text-slate-500 text-xs">Add a test article using your backend route or Postman!</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
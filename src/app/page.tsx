'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Shield, Database, Download, Search, BarChart3, Users, Building2, Upload, Eye, CheckCircle } from 'lucide-react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200/20 dark:border-zinc-800/20' : ''
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-medium text-lg">TableStream</div>
            <a 
              href="https://app.tablestream.io" 
              className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity"
            >
              Open App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight leading-[1.1]">
            Analyze massive CSV files
            <br />
            <span className="text-gradient">instantly</span> in your browser
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Handle millions of rows with advanced filtering and transformations.
            Complete privacy — your data never leaves your browser.
          </p>
          
          <a 
            href="https://app.tablestream.io" 
            className="inline-flex items-center gap-3 px-8 py-4 text-lg bg-black dark:bg-white text-white dark:text-black rounded-xl hover:opacity-80 transition-all duration-200 hover:scale-105 mb-20"
          >
            Open App
            <ArrowRight size={18} />
          </a>

          {/* Hero Visualization */}
          <div className="relative mx-auto max-w-5xl">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-2xl shadow-zinc-200/20 dark:shadow-zinc-800/40">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-sm text-zinc-500 font-mono">sales_data.csv • 2.1GB • 3,847,293 rows</div>
              </div>
              
              {/* CSV Table Preview */}
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3 sm:p-4 font-mono text-xs overflow-hidden">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-2 text-zinc-600 dark:text-zinc-400 font-semibold">
                  <div>ID</div>
                  <div>Customer</div>
                  <div>Product</div>
                  <div className="hidden sm:block">Amount</div>
                  <div className="hidden sm:block">Date</div>
                  <div className="hidden sm:block">Region</div>
                </div>
                
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 py-1.5 border-b border-zinc-200/50 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300">
                    <div className="bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150}ms` }}></div>
                    <div className="bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150 + 50}ms` }}></div>
                    <div className="bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150 + 100}ms` }}></div>
                    <div className="hidden sm:block bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150 + 75}ms` }}></div>
                    <div className="hidden sm:block bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150 + 125}ms` }}></div>
                    <div className="hidden sm:block bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150 + 25}ms` }}></div>
                  </div>
                ))}
                
                <div className="text-center py-4 text-zinc-500 dark:text-zinc-400">
                  ... 3,847,285 more rows
                </div>
              </div>
              
              {/* Loading indicator */}
              <div className="flex items-center justify-center mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div>
                Processing locally in your browser
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">Powerful features</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Everything you need to analyze massive datasets efficiently</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6 group text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                <Database className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors">Smart Analysis</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                SQL-powered filtering with real-time search across millions of rows.
              </p>
            </div>
            
            <div className="space-y-6 group text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                <Search className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-medium group-hover:text-purple-600 transition-colors">Data Transformations</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                Rename columns, format dates, change text case with instant preview.
              </p>
            </div>
            
            <div className="space-y-6 group text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                <Download className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-medium group-hover:text-green-600 transition-colors">Export Options</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                Export to CSV, JSON, or Excel with all transformations applied.
              </p>
            </div>
            
            <div className="space-y-6 group text-center">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                <Shield className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-medium group-hover:text-red-600 transition-colors">Complete Privacy</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                100% client-side processing. Your data never touches our servers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-6 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
              Built for teams that work with data
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Trusted by professionals across industries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-8 group">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                <BarChart3 className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors">Data Teams</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Clean and analyze datasets without Excel limitations
              </p>
            </div>
            
            <div className="text-center space-y-8 group">
              <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                <Users className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-medium group-hover:text-purple-600 transition-colors">Researchers</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Process survey data without uploading to third-party services
              </p>
            </div>
            
            <div className="text-center space-y-8 group">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                <Building2 className="w-12 h-12 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-medium group-hover:text-green-600 transition-colors">Financial Analysts</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Handle transaction files securely with advanced filtering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">Privacy by design</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Your data stays on your device. No uploads, no tracking, no compromises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-8 group">
              <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                <Upload className="w-12 h-12 text-red-600 dark:text-red-400 transform rotate-180" />
              </div>
              <div className="text-xl font-medium group-hover:text-red-600 transition-colors">No uploads</div>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Files processed entirely in your browser
              </div>
            </div>
            
            <div className="text-center space-y-8 group">
              <div className="w-24 h-24 bg-orange-100 dark:bg-orange-900/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                <Eye className="w-12 h-12 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-xl font-medium group-hover:text-orange-600 transition-colors">No tracking</div>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We don't collect any usage data
              </div>
            </div>
            
            <div className="text-center space-y-8 group">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-xl font-medium group-hover:text-green-600 transition-colors">GDPR ready</div>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Compliant by design
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">Start analyzing</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
            No registration required. No limits. No compromises.
          </p>
          
          <a 
            href="https://app.tablestream.io" 
            className="inline-flex items-center gap-3 px-8 py-4 text-lg bg-black dark:bg-white text-white dark:text-black rounded-xl hover:opacity-80 transition-all duration-200 hover:scale-105"
          >
            Open App
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-medium text-lg">TableStream</div>
          <div className="flex gap-8 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-600 dark:text-zinc-400">
          © 2025 TableStream.io
        </div>
      </footer>
    </div>
  )
}
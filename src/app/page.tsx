'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Shield, Database, Download, Search } from 'lucide-react'

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
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            Analyze massive CSV files
            <br />
            <span className="text-gradient">instantly</span> in your browser
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Handle millions of rows with advanced filtering and transformations.
            Complete privacy — your data never leaves your browser.
          </p>
          
          <a 
            href="https://app.tablestream.io" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity mb-16"
          >
            Open App
            <ArrowRight size={16} />
          </a>

          {/* Hero Visualization */}
          <div className="relative mx-auto max-w-4xl">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-sm text-zinc-500 font-mono">sales_data.csv • 2.1GB • 3,847,293 rows</div>
              </div>
              
              {/* CSV Table Preview */}
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4 font-mono text-xs">
                <div className="grid grid-cols-6 gap-3 mb-2 text-zinc-600 dark:text-zinc-400 font-semibold">
                  <div>ID</div>
                  <div>Customer</div>
                  <div>Product</div>
                  <div>Amount</div>
                  <div>Date</div>
                  <div>Region</div>
                </div>
                
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="grid grid-cols-6 gap-3 py-1.5 border-b border-zinc-200/50 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300">
                    <div className="bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150}ms` }}></div>
                    <div className="bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150 + 50}ms` }}></div>
                    <div className="bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150 + 100}ms` }}></div>
                    <div className="bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150 + 75}ms` }}></div>
                    <div className="bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150 + 125}ms` }}></div>
                    <div className="bg-zinc-100 dark:bg-zinc-700 rounded px-2 py-1 animate-pulse" style={{ animationDelay: `${i * 150 + 25}ms` }}></div>
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
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <Database className="w-6 h-6" />
              <h3 className="font-medium">Smart Analysis</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                SQL-powered filtering with real-time search across millions of rows.
              </p>
            </div>
            
            <div className="space-y-3">
              <Search className="w-6 h-6" />
              <h3 className="font-medium">Data Transformations</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Rename columns, format dates, change text case with instant preview.
              </p>
            </div>
            
            <div className="space-y-3">
              <Download className="w-6 h-6" />
              <h3 className="font-medium">Export Options</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Export to CSV, JSON, or Excel with all transformations applied.
              </p>
            </div>
            
            <div className="space-y-3">
              <Shield className="w-6 h-6" />
              <h3 className="font-medium">Complete Privacy</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                100% client-side processing. Your data never touches our servers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-16 text-center">
            Built for teams that work with data
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <h3 className="font-medium">Data Teams</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Clean and analyze datasets without Excel limitations
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <h3 className="font-medium">Researchers</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Process survey data without uploading to third-party services
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <h3 className="font-medium">Financial Analysts</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Handle transaction files securely with advanced filtering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-6">Privacy by design</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Your data stays on your device. No uploads, no tracking, no compromises.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-2">
              <div className="font-medium">No uploads</div>
              <div className="text-zinc-600 dark:text-zinc-400">
                Files processed entirely in your browser
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="font-medium">No tracking</div>
              <div className="text-zinc-600 dark:text-zinc-400">
                We don't collect any usage data
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="font-medium">GDPR ready</div>
              <div className="text-zinc-600 dark:text-zinc-400">
                Compliant by design
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-6">Start analyzing</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            No registration required. No limits. No compromises.
          </p>
          
          <a 
            href="https://app.tablestream.io" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity"
          >
            Open App
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-medium">TableStream</div>
          <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-600 dark:text-zinc-400">
          © 2025 TableStream.io
        </div>
      </footer>
    </div>
  )
}
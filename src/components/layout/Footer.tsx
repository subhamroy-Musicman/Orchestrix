import { Container } from './Container';
import Link from 'next/link';
import { Icon } from '../ui/Icon';

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Integrations', 'API']
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Blog']
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact']
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security']
  }
];

export function Footer() {
  return (
    <footer className="bg-noir pt-32 pb-12 border-t border-white/5 relative overflow-hidden" role="contentinfo">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-expedition)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 pr-8">
            <Link 
              href="/" 
              className="flex items-center gap-3 group relative z-[60] mb-6 inline-flex" 
              aria-label="Orchestrix Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-expedition to-noir flex items-center justify-center border border-white/10 shadow-inner group-hover:border-white/20 transition-colors">
                <Icon name="cube-16-solid" size="sm" className="text-forsythia" />
              </div>
              <span className="font-sans font-bold text-lg tracking-tight text-white group-hover:text-mint transition-colors">
                Orchestrix
              </span>
            </Link>
            <p className="text-mint/60 text-[14px] leading-relaxed max-w-xs mb-8">
              Transform your data workflows with AI-powered automation. Process, analyze, and automate at scale with enterprise-grade reliability.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {['twitter', 'github', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-mint/60 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current" style={{ maskImage: `url(/icons/${social}.svg)`, WebkitMaskImage: `url(/icons/${social}.svg)`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />
                  {/* Note: since we don't have SVGs for these, we'll use a generic icon placeholder or CSS box */}
                  <div className="w-4 h-4 border border-current rounded-sm opacity-50" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h3 className="text-[13px] font-bold text-white uppercase tracking-wider mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[14.5px] text-mint/60 hover:text-forsythia transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-[13px] text-mint/50">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 order-2 lg:order-1">
            <p>© {new Date().getFullYear()} Orchestrix Inc. All rights reserved.</p>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-mint/30" />
              Privacy-first by design
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 order-1 lg:order-2">
            
            {/* API Status */}
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forsythia opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forsythia"></span>
              </span>
              All systems normal
            </a>

            {/* Next.js Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="text-[11px] font-medium tracking-wide">Built with</span>
              <span className="font-bold text-white">Next.js 15</span>
            </div>

            {/* Back to top */}
            <a href="#top" className="flex items-center gap-2 hover:text-white transition-colors group">
              Back to top
              <Icon name="arrow-up" size="sm" className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </a>
            
          </div>
        </div>
      </Container>
    </footer>
  );
}

import { Container } from './Container';
import { FOOTER_LINK_GROUPS } from '@/lib/content/navigation';
import { Icon } from '../ui/Icon';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-noir py-16 border-t border-expedition/30" role="contentinfo">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="flex items-center gap-3 group relative z-[60] mb-6 inline-flex" 
              aria-label="Orchestrix Home"
            >
              <span className="font-sans font-bold text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-arctic/80 group-hover:to-arctic transition-colors">
                Orchestrix
              </span>
            </Link>
            <p className="text-mint/70 text-sm max-w-xs leading-relaxed">
              Transform your data workflows with AI-powered automation. Process, analyze, and automate at scale with enterprise-grade reliability.
            </p>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-white text-sm mb-5 tracking-wide">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-mint/70 hover:text-forsythia text-sm transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-mint/50">
          <p>© {new Date().getFullYear()} Orchestrix. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

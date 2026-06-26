'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { NAV_LINKS } from '@/lib/content/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll for glassmorphism and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Glass effect
      setIsScrolled(window.scrollY > 20);

      // Active section highlighting
      const sections = NAV_LINKS.map(link => link.href.substring(1)).filter(Boolean);
      let currentSection = '';
      
      // We look at which section is near the top of the viewport
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key and body scroll lock when menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  // Focus trap for mobile menu
  const handleTabKey = useCallback((e: React.KeyboardEvent) => {
    if (!isMenuOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }, [isMenuOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-layout",
        isScrolled 
          ? "bg-noir/70 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3" 
          : "bg-transparent border-b border-transparent py-5"
      )} 
      role="banner"
    >
      <Container>
        <div className="flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex justify-start">
          <Link 
            href="/" 
            className="flex items-center gap-3 group relative z-[60]" 
            aria-label="Orchestrix Home"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-md group-hover:scale-105 transition-all duration-300">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-forsythia/40 blur-md rounded-md group-hover:bg-forsythia/60 group-hover:blur-lg transition-all duration-500 animate-pulse-slow" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-md overflow-hidden border border-white/20 group-hover:border-forsythia/50 transition-colors shadow-lg z-10 bg-noir flex items-center justify-center">
                <Image src="/logo.png?v=2" alt="Orchestrix Logo" fill className="object-cover scale-[1.25]" unoptimized />
              </div>
            </div>
            <span className="font-sans font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-arctic/80 group-hover:to-arctic transition-colors">
              Orchestrix
            </span>
          </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex justify-center">
            <nav className="flex items-center gap-1 xl:gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-[14px] xl:text-[15px] font-medium transition-all duration-layout relative px-4 xl:px-5 py-2 rounded-full whitespace-nowrap",
                    isActive 
                      ? "text-forsythia bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" 
                      : "text-mint/90 hover:text-white hover:bg-white/5"
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex justify-end items-center gap-4">
            <Button variant="ghost" size="md" className="text-mint hover:text-white font-medium">
              Log In
            </Button>
            <Button 
              variant="primary" 
              size="md" 
              className="rounded-full shadow-[0_0_25px_rgba(255,200,1,0.3)] hover:shadow-[0_0_40px_rgba(255,200,1,0.5)] px-6"
            >
              Start Building
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-lg leading-none">→</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex justify-end">
            <button
              className="relative z-[60] p-2 text-mint hover:text-forsythia transition-colors rounded-lg hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-forsythia"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
              <Icon name={isMenuOpen ? "x-mark" : "search"} size="lg" decorative={true} />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-noir/95 backdrop-blur-xl z-50 lg:hidden transition-all duration-layout flex flex-col",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        ref={menuRef}
        onKeyDown={handleTabKey}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
          <nav className="flex flex-col items-center gap-6 w-full" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-2xl font-bold transition-colors w-full text-center py-4 rounded-xl border border-transparent",
                    isActive ? "text-forsythia bg-forsythia/5 border-forsythia/10" : "text-arctic hover:text-forsythia hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="w-full h-px bg-expedition/30 my-4" />
          
          <div className="flex flex-col w-full gap-4 px-4">
            <Button variant="ghost" size="lg" className="w-full justify-center" onClick={() => setIsMenuOpen(false)}>
              Log In
            </Button>
            <Button variant="primary" size="lg" className="w-full justify-center rounded-full shadow-[0_0_25px_rgba(255,200,1,0.3)]" onClick={() => setIsMenuOpen(false)}>
              Start Building
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-lg leading-none">→</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

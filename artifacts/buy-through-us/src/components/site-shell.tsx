import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowRight, Menu, MessageCircle, Moon, Sun, X } from 'lucide-react';
import { routeMeta, siteConfig } from '@/lib/site-config';

const navItems = [
  ['/services', 'Services'],
  ['/plans', 'Plans'],
  ['/roles', 'IT planner'],
  ['/refurbished', 'Refurbished'],
  ['/coverage', 'Coverage'],
  ['/contact', 'Contact'],
];

export function Seo({ path }: { path: string }) {
  const meta = routeMeta[path] ?? routeMeta['/'];
  useEffect(() => {
    document.title = meta.title;
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        const property = selector.match(/property="([^"]+)"/)?.[1];
        const name = selector.match(/name="([^"]+)"/)?.[1];
        if (property) el.setAttribute('property', property);
        if (name) el.name = name;
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[name="twitter:card"]', 'content', 'summary');
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
    if (siteConfig.canonicalOrigin.startsWith('https://')) {
      setMeta('meta[property="og:url"]', 'content', `${siteConfig.canonicalOrigin}${path}`);
    } else {
      document.querySelector('meta[property="og:url"]')?.remove();
    }
  }, [meta, path]);
  return null;
}

function Brand() {
  return (
    <Link href="/" className="brand-mark" aria-label="Buy Through Us home">
      <span className="brand-symbol">bt</span>
      <span>buy through us</span>
    </Link>
  );
}

export function SiteHeader() {
  const [path] = useLocation();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('btu-theme') === 'dark');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('btu-theme', dark ? 'dark' : 'light');
  }, [dark]);
  useEffect(() => setOpen(false), [path]);
  return (
    <header className="site-header">
      <div className="container-wide header-inner">
        <Brand />
        <nav className={`nav-links${open ? ' open' : ''}`} aria-label="Main navigation">
          {navItems.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined}>{label}</Link>)}
          <Link href="/how-it-works" aria-current={path === '/how-it-works' ? 'page' : undefined}>How it works</Link>
          <Link href="/faq" aria-current={path === '/faq' ? 'page' : undefined}>FAQ</Link>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} onClick={() => setDark((value) => !value)}>
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link className="button-primary header-cta" href="/roles">Get a free IT plan <ArrowRight size={15} /></Link>
          <button className="mobile-toggle" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function WhatsAppAction({ className = 'button-outline' }: { className?: string }) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  if (number.length >= 10) {
    return <a className={className} href={`https://wa.me/${number}`} target="_blank" rel="noreferrer">
      <MessageCircle size={16} /> Chat on WhatsApp
    </a>;
  }
  return <span className={`${className} whatsapp-disabled`} aria-disabled="true" title="Add a verified WhatsApp number to enable this link">
    <MessageCircle size={16} /> Chat on WhatsApp <small>number needed</small>
  </span>;
}

function WhatsAppFloat() {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  if (number.length < 10) return null;
  return <a className="whatsapp-float" href={`https://wa.me/${number}`} target="_blank" rel="noreferrer" aria-label="Chat with Buy Through Us on WhatsApp">
    <MessageCircle size={20} /><span>WhatsApp</span>
  </a>;
}

const footerGroups = [
  { title: 'What we do', links: [['/services', 'Services'], ['/plans', 'Plans'], ['/roles', 'IT plan estimator'], ['/refurbished', 'Refurbished hardware']] },
  { title: 'Good to know', links: [['/coverage', 'Coverage'], ['/how-it-works', 'How it works'], ['/faq', 'FAQs'], ['/contact', 'Contact']] },
  { title: 'Policies', links: [['/privacy', 'Privacy'], ['/terms', 'Terms'], ['/warranty', 'Warranty & returns']] },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <Brand />
            <p style={{ maxWidth: 280, marginTop: 18 }}>Practical IT procurement, setup and support for teams that have better things to do than chase hardware.</p>
            <p>{siteConfig.coverageRegions.map((region) => region.label).join(' · ')}</p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <div className="footer-title">{group.title}</div>
              {group.links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Buy Through Us</span><span>Service availability and scope confirmed per project.</span></div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [path] = useLocation();
  return <div className="site-shell"><Seo path={path} /><SiteHeader />{children}<SiteFooter /><WhatsAppFloat /></div>;
}

export function PageHero({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return <section className="page-hero container-wide page-enter"><div className="eyebrow">{kicker}</div><h1 className="display">{title}</h1><p>{text}</p></section>;
}

export function CtaPanel({ title = 'Let’s make the IT part simpler.', text = 'Tell us what your team needs. We’ll help shape a practical next step, without the jargon.' }: { title?: string; text?: string }) {
  return <div className="container-wide" style={{ padding: '32px 0 82px' }}><div className="cta-panel"><div><div className="eyebrow">Start with a conversation</div><h2 className="display">{title}</h2><p>{text}</p></div><Link href="/contact" className="button-primary">Talk through a project <ArrowRight size={16} /></Link></div></div>;
}

export function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return <div className="section-head"><div><div className="eyebrow">{kicker}</div><h2 className="display">{title}</h2></div>{text && <p>{text}</p>}</div>;
}

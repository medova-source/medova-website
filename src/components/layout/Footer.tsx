import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import logo from '@/assets/white.png';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ],
  services: [
    { name: 'Medical Supplies', href: '/services' },
    { name: 'Pharmaceuticals', href: '/services' },
    { name: 'Medical Equipment', href: '/services' },
    { name: 'Healthcare Software', href: '/services' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-2">
              <img src={logo} alt="Medova" className="h-12 w-auto" />
            </Link>

            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              A new force in global healthcare solutions. Integrating medical supplies,
              pharmaceuticals, equipment, and software into one unified ecosystem.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  740 Veterans Memorial Hwy SE<br />
                  Mableton, GA 30126, USA
                </span>
              </li>
              <li>
                <a href="mailto:Info@medovahealthcare.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  Info@medovahealthcare.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p className="mb-1">Macky Pannu: <a href="tel:+16789945719" className="hover:text-primary-foreground transition-colors">+1 (678) 994-5719</a></p>
                  <p>Darshan Patel: <a href="tel:+16784807168" className="hover:text-primary-foreground transition-colors">+1 (678) 480-7168</a></p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Medova. All rights reserved.
            </p>
            {/* <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

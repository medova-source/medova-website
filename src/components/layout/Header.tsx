import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/blue.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Products", href: "#", isDropdown: true },
  { name: "Contact Us", href: "/contact" },
];

const productCategories = [
  { name: "Medical Consumables and Disposables", href: "/products/medical" },
  { name: "Pharmaceuticals", href: "/products/pharmaceuticals" },
  { name: "Vitamins and Supplements", href: "/products/vitamins" },
  { name: "Healthcare Software Solutions", href: "/products/software" },
  { name: "Rapid Diagnostic Tests", href: "/products/rapid-diagnostic-tests" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto container-padding" aria-label="Global">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Medova" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item: any) =>
              item?.isDropdown ? (
                <div key={item.name} className="relative group">
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${location.pathname.startsWith("/products") ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform translate-y-2 group-hover:translate-y-0">
                    <div
                      className="py-2"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                          role="menuitem"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button asChild className="btn-accent rounded-xl px-6">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navigation.map((item: any) =>
                item?.isDropdown ? (
                  <div key={item.name} className="flex flex-col gap-2">
                    <div
                      className={`text-base font-medium py-2 ${location.pathname.startsWith("/products") ? "text-primary" : "text-foreground"}`}
                    >
                      {item.name}
                    </div>
                    <div className="pl-4 flex flex-col gap-2 border-l-2 border-border/50 ml-2">
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`text-sm font-medium py-1 transition-colors ${location.pathname === category.href
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium py-2 transition-colors ${location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <Button asChild className="btn-accent rounded-xl w-full mt-2">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

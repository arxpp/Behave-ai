import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Live Demo", href: "#live-demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container max-w-6xl flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
            CA
          </div>
          <span className="font-bold text-foreground hidden sm:inline">CareMind AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-primary font-semibold hover:text-blue-700 transition-colors">
            Sign In
          </button>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container max-w-6xl py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-border pt-3 space-y-2">
              <button className="w-full text-primary font-semibold hover:bg-gray-50 py-2 rounded-lg transition-colors">
                Sign In
              </button>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

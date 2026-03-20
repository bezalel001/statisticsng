import { Mail, MapPin, Phone, Linkedin, Twitter } from "lucide-react";
import logoBlue from "../assets/logo-blue.png";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-blue-600/20 to-indigo-700/20 border border-white/10 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-300 text-xs uppercase tracking-widest mb-4">
              Let's Talk
            </p>
            <h3 className="text-white mb-4">
              Let's Turn Data into Better Decisions
            </h3>
            <p className="text-white/70 mb-8">
              Whether you need a data system, a forecasting model, an early
              warning dashboard, a targeting tool, or a monitoring framework,
              Statistics NG can help. We work with governments, NGOs,
              development partners, businesses, and research organizations
              across Nigeria.
            </p>
            <div className="text-white/70 mb-8">
              <p className="mb-2">Get in touch to:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Discuss a project",
                  "Request a consultation",
                  "Explore a partnership",
                  "Ask about a custom solution",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1.5 bg-white/10 border border-white/15 rounded-full text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:mickeybezalel@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
              >
                <Mail size={18} />
                Email Us
              </a>
              <a
                href="tel:+2349092114035"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/15 transition-colors"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoBlue}
                alt="Statistics NG Logo"
                className="h-12 w-12 object-contain rounded-full"
              />
              <div>
                <div className="tracking-tight text-white">STATISTICS NG</div>
                <div className="text-xs text-gray-400">
                  Decision Intelligence for Nigeria
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A Nigerian data science, machine learning, and AI company that
              helps governments, NGOs, development partners, and businesses turn
              raw data into better decisions.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Solutions", href: "#solutions" },
                { label: "Who We Serve", href: "#who-we-serve" },
                { label: "Why Us", href: "#why-us" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-blue-400"
                />
                <a
                  href="mailto:mickeybezalel@gmail.com"
                  className="hover:text-blue-400 transition-colors text-sm"
                >
                  mickeybezalel@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-blue-400"
                />
                <a
                  href="tel:+2349092114035"
                  className="hover:text-blue-400 transition-colors text-sm"
                >
                  +2349092114035
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-blue-400"
                />
                <span className="text-sm">Port Harcourt, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Statistics NG. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

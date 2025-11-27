import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white">SN</span>
              </div>
              <div>
                <div className="tracking-tight">STATISTICS NIGERIA</div>
                <div className="text-xs text-gray-400">Truth. Insight. Progress.</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Turning Numbers into Trust. Turning Trust into Progress. Building a data-driven future for Nigeria and Africa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#mission" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#domains" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Strategic Domains
                </a>
              </li>
              <li>
                <a href="#innovation" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Innovation
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Our Impact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span>info@statistics.ng</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span>+2349092114035</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Port Harcourt, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Statistics Nigeria. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Data Governance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
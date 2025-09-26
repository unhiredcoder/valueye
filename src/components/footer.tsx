import {
  Github,
  Youtube,
  Twitter,
  Linkedin,
  Gamepad2,
} from "lucide-react"; // Lucide icons

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 sm:px-8 border-t border-gray-800 mt-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6 flex flex-col items-start">
          {/* Logo + Year */}
          <div className="flex items-center space-x-2">
            <div className="bg-white text-black font-bold px-3 py-2 rounded-lg">
              Botpress
            </div>
            <span className="text-sm">© 2025</span>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-4 text-xl">
            <a href="#" className="hover:text-white">
              <Github size={22} />
            </a>
            <a href="#" className="hover:text-white">
              <Youtube size={22} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={22} />
            </a>
            <a href="#" className="hover:text-white">
              <Gamepad2 size={22} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 mt-8 md:mt-0">
          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Pricing</li>
              <li>Agent Studio</li>
              <li>Autonomous Engine</li>
              <li>Knowledge Bases</li>
              <li>Human Handoff</li>
              <li>Tables</li>
            </ul>
          </div>

          {/* Hub */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Hub</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Integrations</li>
              <li>Channels</li>
              <li>LLMs</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Talk to Sales</li>
              <li>Documentation</li>
              <li>Hire an Expert</li>
              <li>Videos</li>
              <li>Customer Stories</li>
              <li>API Reference</li>
              <li>Blog</li>
              <li>Status</li>
              <li>v12 Resources</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Community</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Community Support</li>
              <li>Become a Partner</li>
              <li>Become an Ambassador</li>
              <li>Become an Affiliate</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>News & Press</li>
              <li>Legal</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

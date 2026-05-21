import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', href: '#' },
    { icon: '💼', label: 'LinkedIn', href: '#' },
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: '📧', label: 'Email', href: '#' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-900 border-t border-slate-700/50 py-12 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Sahil Gupta
            </h3>
            <p className="text-slate-400">Full Stack Developer & Animation Enthusiast</p>
          </motion.div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-cyan-400 font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-cyan-400 font-bold mb-4">Connect</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl hover:text-cyan-400 transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-slate-400"
        >
          <p>
            © {currentYear} Sahil Gupta. All rights reserved. | Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm mt-2">
            Designed & Developed with ❤️ and lots of animations
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

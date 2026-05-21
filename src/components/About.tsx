import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" ref={ref} className="py-20 px-4 md:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in Java, React, and modern web technologies. 
                I love creating beautiful, interactive experiences that push the boundaries of what's possible on the web.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                With a focus on performance, accessibility, and stunning animations, I build applications that not only 
                work great but look amazing too.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you can find me exploring new animation techniques, contributing to open source, 
                or experimenting with the latest web technologies.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(34, 211, 238, 0.3)',
                    '0 0 40px rgba(168, 85, 247, 0.3)',
                    '0 0 20px rgba(34, 211, 238, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="p-8 rounded-lg border border-cyan-400/30 bg-slate-800/50"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    Full Stack Developer
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    Java & React Specialist
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    Animation Enthusiast
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    Open Source Contributor
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

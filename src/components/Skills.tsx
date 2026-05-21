import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    category: 'Backend',
    skills: ['Java', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
  },
  {
    category: 'Specialties',
    skills: ['Animations', 'Performance', 'Accessibility', 'Web Design', 'Full Stack'],
  },
];

export const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-20 px-4 md:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              className="p-6 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-400/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                    }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/50 text-slate-200 font-medium hover:cursor-pointer transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-8 rounded-lg border border-purple-400/30 bg-purple-400/5"
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-4">Continuous Learning</h3>
          <p className="text-slate-300">
            I'm constantly exploring new technologies and techniques. Currently diving deep into Web3, 
            advanced animation patterns, and cloud-native architectures.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

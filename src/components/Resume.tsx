import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Resume = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const experience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading development of scalable applications using Java and React',
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client projects with focus on performance',
    },
    {
      role: 'Junior Developer',
      company: 'Startup',
      period: '2019 - 2020',
      description: 'Started career building web applications and learning best practices',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      school: 'University Name',
      year: '2019',
    },
    {
      degree: 'Certifications',
      field: 'AWS Solutions Architect, Java Developer',
      school: 'Online Platforms',
      year: '2021-2023',
    },
  ];

  return (
    <section id="resume" ref={ref} className="py-20 px-4 md:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Experience & Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative pl-6 pb-6 border-l-2 border-cyan-400/30 hover:border-cyan-400 transition-all"
                >
                  <motion.div
                    className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-cyan-400"
                    whileHover={{ scale: 1.5 }}
                  />
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  <p className="text-slate-400 text-sm mb-2">{exp.period}</p>
                  <p className="text-slate-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative pl-6 pb-6 border-l-2 border-purple-400/30 hover:border-purple-400 transition-all"
                >
                  <motion.div
                    className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-purple-400"
                    whileHover={{ scale: 1.5 }}
                  />
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-purple-400 font-semibold">{edu.field}</p>
                  <p className="text-slate-400 text-sm mb-2">{edu.school}</p>
                  <p className="text-slate-300">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-purple-400/50 transition-all"
          >
            ⬇️ Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

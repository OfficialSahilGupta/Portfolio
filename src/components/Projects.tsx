import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack Java & React application with real-time inventory management',
    tags: ['Java', 'React', 'PostgreSQL', 'Spring Boot'],
    color: 'from-cyan-400 to-blue-400',
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'Collaborative task management with real-time updates and animations',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    color: 'from-purple-400 to-pink-400',
  },
  {
    id: 3,
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard with complex visualizations and animations',
    tags: ['Java', 'React', 'D3.js', 'Spring Boot'],
    color: 'from-green-400 to-cyan-400',
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Real-time social platform with WebSocket integration',
    tags: ['Java', 'React', 'WebSocket', 'MongoDB'],
    color: 'from-orange-400 to-red-400',
  },
];

export const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
              />
              <div className="relative p-8 rounded-lg border border-slate-700 bg-slate-800/50 hover:border-cyan-400/50 transition-all duration-300">
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${project.color} rounded-t-lg`}
                />

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm bg-slate-700/50 text-cyan-300 rounded-full border border-cyan-400/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-2 rounded-lg font-semibold bg-gradient-to-r ${project.color} text-slate-900 hover:shadow-lg transition-all`}
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

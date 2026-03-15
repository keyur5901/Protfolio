import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2023 - Present',
      description: [
        'Developed and maintained multiple web applications using React and Node.js',
        'Implemented RESTful APIs and microservices architecture',
        'Collaborated with cross-functional teams to deliver high-quality software',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      id: 2,
      title: 'Frontend Developer Intern',
      company: 'StartupXYZ',
      location: 'Remote',
      period: 'Jun 2022 - Dec 2022',
      description: [
        'Built responsive user interfaces using React and Tailwind CSS',
        'Integrated third-party APIs and payment systems',
        'Participated in agile development processes and daily standups',
        'Contributed to open-source projects and documentation'
      ],
      technologies: ['React', 'Tailwind CSS', 'Stripe API', 'Git']
    },
    {
      id: 3,
      title: 'Software Engineering Intern',
      company: 'BigTech Corp',
      location: 'Seattle, WA',
      period: 'Jan 2022 - May 2022',
      description: [
        'Developed backend services using Python and FastAPI',
        'Worked on data processing pipelines and analytics',
        'Implemented automated testing and CI/CD pipelines',
        'Collaborated with senior engineers on production deployments'
      ],
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>

                <div className="md:ml-20 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center">
                          <Building size={16} className="mr-1" />
                          {exp.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
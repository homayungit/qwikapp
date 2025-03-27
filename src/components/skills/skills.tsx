import { component$ } from '@builder.io/qwik';

const skills = [
  {
    category: '.NET & Microservices',
    items: ['ASP.NET Core', 'Web API', 'Entity Framework Core', 'Microservices Architecture'],
    icon: '💻'
  },
  {
    category: 'Enterprise Architecture',
    items: ['Clean Architecture', 'Domain-Driven Design', 'CQRS', 'Keycloak Integration'],
    icon: '🏗️'
  },
  {
    category: 'Cloud & DevOps',
    items: ['Google Cloud Platform', 'CI/CD (Jenkins, Ansible)', 'Docker & Kubernetes', 'Maven'],
    icon: '☁️'
  }
];

export default component$(() => {
  return (
    <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 opacity-0 animate-slide-up scroll-trigger">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div class="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.category}
              class="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 opacity-0 animate-slide-up scroll-trigger"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div class="text-4xl mb-4">{skill.icon}</div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {skill.category}
              </h3>
              <ul class="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} class="flex items-center text-gray-600 dark:text-gray-300">
                    <span class="mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
import { component$ } from '@builder.io/qwik';

const courses = [
  {
    title: '.NET 10 Web API Development',
    description: 'Learn to build scalable and secure Web APIs using the latest .NET 10 features.',
    duration: '12 weeks',
    level: 'Advanced',
    topics: ['Minimal APIs', 'Performance Optimization', 'Security Best Practices'],
    image: 'https://placehold.co/400x250',
  },
  {
    title: 'Microservices with .NET 10',
    description: 'Master microservices architecture using .NET 10 and Docker.',
    duration: '10 weeks',
    level: 'Intermediate',
    topics: ['Service Communication', 'Container Orchestration', 'Distributed Systems'],
    image: 'https://placehold.co/400x250',
  },
  {
    title: 'Clean Architecture in .NET',
    description: 'Implement clean architecture principles in .NET applications.',
    duration: '8 weeks',
    level: 'Advanced',
    topics: ['CQRS Pattern', 'Domain-Driven Design', 'Unit Testing'],
    image: 'https://placehold.co/400x250',
  },
];

export default component$(() => {
  return (
    <section id="courses" class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Courses
          </h2>
          <div class="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.title} class="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <img src={course.image} alt={course.title} width="400" height="250" class="w-full h-48 object-cover" />
              <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">{course.title}</h3>
                  <span class="bg-accent text-white text-sm px-3 py-1 rounded-full">{course.level}</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                <div class="mb-4">
                  <span class="text-sm text-gray-500 dark:text-gray-400">Duration: {course.duration}</span>
                </div>
                <div class="space-y-2">
                  {course.topics.map((topic) => (
                    <span key={topic} class="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const mentoringAreas = [
    {
      title: '.NET Fullstack Development',
      description: 'Learn to build fullstack applications using .NET.',
      image: 'https://placehold.co/400x250',
    },
    {
      title: 'CI/CD Pipeline Implementation',
      description: 'Implement continuous integration and delivery pipelines.',
      image: 'https://placehold.co/400x250',
    },
    {
      title: 'Docker & Kubernetes',
      description: 'Master containerization and orchestration with Docker and Kubernetes.',
      image: 'https://placehold.co/400x250',
    },
    {
      title: 'Microservices Architecture',
      description: 'Design and build microservices-based applications.',
      image: 'https://placehold.co/400x250',
    },
    {
      title: 'Monolithic Architecture',
      description: 'Develop and maintain monolithic applications.',
      image: 'https://placehold.co/400x250',
    },
    {
      title: 'Vertical Slice Architecture',
      description: 'Implement vertical slice architecture in your projects.',
      image: 'https://placehold.co/400x250',
    },
  ];

  const selectedArea = useSignal<{ title: string; description: string; image: string } | null>(null);

  return (
    <section id="mentorship" class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in">
          Mentorship
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentoringAreas.map((area) => (
            <div key={area.title} class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-slide-up">
              <img src={area.image} alt={area.title} width="400" height="250" class="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{area.title}</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{area.description}</p>
              <button
                onClick$={() => selectedArea.value = area}
                class="bg-accent text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                More...
              </button>
            </div>
          ))}
        </div>

        {selectedArea.value && (
          <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div class="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
              <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{selectedArea.value.title}</h3>
                  <button
                    onClick$={() => selectedArea.value = null}
                    class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>
                <img src={selectedArea.value.image} alt={selectedArea.value.title} width="400" height="250" class="w-full h-48 object-cover mb-4 rounded-lg" />
                <p class="text-gray-600 dark:text-gray-300 mb-4">{selectedArea.value.description}</p>
                <p class="text-gray-600 dark:text-gray-300">Detailed course information goes here...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});
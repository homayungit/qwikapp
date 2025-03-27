import { component$, useSignal } from '@builder.io/qwik';

const students = [
  {
    name: 'John Doe',
    role: 'Senior Software Engineer',
    company: 'Microsoft',
    image: 'https://placehold.co/150x150',
    testimonial: 'The mentorship program helped me land my dream job at Microsoft.',
  },
  {
    name: 'Jane Smith',
    role: 'Full Stack Developer',
    company: 'Google',
    image: 'https://placehold.co/150x150',
    testimonial: 'Learning .NET and cloud architecture transformed my career.',
  },
  {
    name: 'Mike Johnson',
    role: 'DevOps Engineer',
    company: 'Amazon',
    image: 'https://placehold.co/150x150',
    testimonial: 'The practical knowledge in DevOps was invaluable.',
  },
];

export default component$(() => {
  const isGalleryOpen = useSignal(false);

  return (
    <>
      <button
        onClick$={() => isGalleryOpen.value = true}
        class="fixed bottom-6 right-6 bg-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 z-50"
      >
        Student Success Stories
      </button>

      {isGalleryOpen.value && (
        <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div class="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Student Success Stories</h3>
                <button
                  onClick$={() => isGalleryOpen.value = false}
                  class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.map((student) => (
                  <div key={student.name} class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <img src={student.image} alt={student.name} width="150" height="150" class="w-24 h-24 rounded-full mx-auto mb-4" />
                    <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{student.name}</h4>
                    <p class="text-accent mb-1">{student.role}</p>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">{student.company}</p>
                    <p class="text-gray-600 dark:text-gray-300 italic">"{student.testimonial}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
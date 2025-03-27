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
  {
    name: 'Emily Davis',
    role: 'Frontend Developer',
    company: 'Facebook',
    image: 'https://placehold.co/150x150',
    testimonial: 'The hands-on projects were crucial in landing my job at Facebook.',
  },
];

export default component$(() => {
  const selectedStudent = useSignal<{ name: string; role: string; company: string; image: string; testimonial: string } | null>(null);

  return (
    <section id="student-success" class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Student Success
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {students.map((student) => (
            <div key={student.name} class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <img src={student.image} alt={student.name} width="150" height="150" class="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{student.name}</h3>
              <p class="text-accent mb-1">{student.role}</p>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{student.company}</p>
              <p class="text-gray-600 dark:text-gray-300 italic">"{student.testimonial}"</p>
              <button
                onClick$={() => selectedStudent.value = student}
                class="bg-accent text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 mt-4"
              >
                More...
              </button>
            </div>
          ))}
        </div>

        {selectedStudent.value && (
          <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div class="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
              <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{selectedStudent.value.name}</h3>
                  <button
                    onClick$={() => selectedStudent.value = null}
                    class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>
                <img src={selectedStudent.value.image} alt={selectedStudent.value.name} width="150" height="150" class="w-24 h-24 rounded-full mx-auto mb-4" />
                <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{selectedStudent.value.role}</h4>
                <p class="text-accent mb-1">{selectedStudent.value.company}</p>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{selectedStudent.value.testimonial}</p>
                <p class="text-gray-600 dark:text-gray-300">Detailed student information goes here...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});
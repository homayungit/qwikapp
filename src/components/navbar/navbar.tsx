import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const isDarkMode = useSignal(false);

  return (
    <nav class="bg-white dark:bg-gray-800 fixed w-full z-50 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <span class="text-xl font-bold text-gray-800 dark:text-white">Homayun Kabir</span>
          </div>
          <div class="flex items-center space-x-4">
            <a href="#about" class="text-gray-600 dark:text-gray-300 hover:text-accent">About</a>
            <a href="#skills" class="text-gray-600 dark:text-gray-300 hover:text-accent">Skills</a>
            <a href="#projects" class="text-gray-600 dark:text-gray-300 hover:text-accent">Projects</a>
            <a href="#mentorship" class="text-gray-600 dark:text-gray-300 hover:text-accent">Mentorship</a>
            <a href="#contact" class="text-gray-600 dark:text-gray-300 hover:text-accent">Contact</a>
            <button
              onClick$={() => {
                isDarkMode.value = !isDarkMode.value;
                document.documentElement.classList.toggle('dark');
              }}
              class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {isDarkMode.value ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
});
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section id="about" class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 opacity-0 animate-slide-up scroll-trigger">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div class="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="opacity-0 animate-slide-up scroll-trigger delay-200">
            <img src="https://placehold.co/600x400" alt="Profile" width="600" height="400" class="rounded-lg shadow-xl" />
          </div>
          <div class="prose dark:prose-invert max-w-none opacity-0 animate-slide-up scroll-trigger delay-400">
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              As a Deputy Manager and Software Architect, I specialize in building scalable and robust software solutions. 
              With extensive experience in .NET development and DevOps practices, I help organizations implement efficient 
              software development processes and architectures.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              Beyond my technical role, I am passionate about mentoring and have helped numerous students 
              develop their programming skills and launch successful careers in software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
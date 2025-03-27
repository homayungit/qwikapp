import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0 bg-grid-pattern"></div>
      </div>
      <div class="text-center z-10 space-y-6">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-down">
          Homayun Kabir
        </h1>
        <h2 class="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in" style="animation-delay: 300ms">
          Software Architect & DevOps Professional
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style="animation-delay: 600ms">
          Building scalable solutions and mentoring the next generation of developers
        </p>
        <div class="mt-8 animate-fade-in" style="animation-delay: 900ms">
          <a
            href="#contact"
            class="bg-accent hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-white opacity-70 hover:opacity-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
});
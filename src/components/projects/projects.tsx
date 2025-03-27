import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section id="projects" class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in">
          Featured Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-slide-up">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Garments ERP System
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              A comprehensive ERP solution for garment manufacturing with modules for inventory,
              production, and supply chain management.
            </p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-slide-up">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              E-commerce Platform
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              High-performance online store solution with advanced features for product management,
              order processing, and customer engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
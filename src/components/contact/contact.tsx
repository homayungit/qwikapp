import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section id="contact" class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get in Touch
        </h2>
        <div class="max-w-2xl mx-auto text-center">
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Interested in collaboration or consulting? Let's connect and discuss how we can work together.
          </p>
          <a
            href="mailto:contact@example.com"
            class="inline-block bg-accent hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
});
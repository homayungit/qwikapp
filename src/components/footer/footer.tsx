import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class="bg-gray-100 dark:bg-gray-800 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Homayun Kabir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
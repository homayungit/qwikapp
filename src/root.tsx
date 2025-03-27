import { component$ } from '@builder.io/qwik';
import { isDev } from '@builder.io/qwik/build';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        {!isDev && <ServiceWorkerRegister />}
        <script dangerouslySetInnerHTML={`
          // Set dark mode by default
          document.documentElement.classList.add('dark');
          
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          }, { threshold: 0.1 });

          document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.scroll-trigger').forEach((el) => observer.observe(el));
          });
        `}>
        </script>
      </head>
      <body lang="en" class="dark:bg-gray-900">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
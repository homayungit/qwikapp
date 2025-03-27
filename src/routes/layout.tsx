import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { RequestHandler } from '@builder.io/qwik-city';
import Navbar from '~/components/navbar/navbar';
import Footer from '~/components/footer/footer';

import styles from './styles.css?inline';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Navbar />
      <main class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/hero/hero';
import About from '~/components/about/about';
import Skills from '~/components/skills/skills';
import Courses from '~/components/courses/courses';
import Projects from '~/components/projects/projects';
import Mentorship from '~/components/mentorship/mentorship';
import Contact from '~/components/contact/contact';
import StudentGallery from '~/components/student-gallery/student-gallery';
import SuccessStudent from '~/components/student-gallery/success-student';

export default component$(() => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Courses />
      <Projects />
      <Mentorship />
      <SuccessStudent />
      <Contact />
      <StudentGallery />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Homayun Kabir - Software Architect & DevOps',
  meta: [
    {
      name: 'description',
      content: 'Portfolio website of Homayun Kabir, Software Architect & DevOps professional',
    },
  ],
};
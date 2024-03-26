import Image from "next/image";
import styles from "./page.module.scss";
import Intro from "@/components/Intro/Intro";
import Skills from "@/components/Skills/Skills";
import Project from "@/components/Projects/Project";
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.content}>
        <Intro />
        <Skills />
        <Project />
        <Contact />
      </section>
    </main>
  );
}

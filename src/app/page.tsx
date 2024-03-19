import Image from "next/image";
import styles from "./page.module.scss";
import Intro from "@/components/Intro/Intro";
import Skills from "@/components/Skills/Skills";
import Project from "@/components/Projects/Project";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
}

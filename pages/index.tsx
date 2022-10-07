import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { BiUpArrow } from "react-icons/bi";

const Home: NextPage = () => {
    return (
        <div className="bg-[#edecec] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-track-[#3f2782]/20 scrollbar-thumb-[#fc7021]/80">
            <Head>
                <title>Zainulabideen</title>
            </Head>
            <Header />
            <section id="hero" className="snap-center">
                <Hero />
            </section>
            <section id="about" className="snap-center">
                <About />
            </section>
            <section id="skills" className="snap-start">
                <Skills />
            </section>
            <section id="projects" className="snap-center">
                <Projects />
            </section>
            <section id="contact-me" className="snap-center">
                <ContactMe />
            </section>
            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer ">
                    <div className="flex items-center justify-end mr-10">
                        {/* <img src="https://avatars.githubusercontent.com/u/80206683?v=4" alt="" className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"/> */}
                        <BiUpArrow color="#dc2b5b"  className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
                    </div>
                </footer>
            </Link>
        </div>
    );
};

export default Home;

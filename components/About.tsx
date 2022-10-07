import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
    return (
        <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[#fc7021] text-2xl">
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src="https://avatars.githubusercontent.com/u/80206683?v=4"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] border border-[#dc2b5b]"
            />
            <motion.div
                initial={{
                    x: 200,
                    opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="space-y-10 px-0 md:px-10"
            >
                <h4 className="text-4xl font-semibold text-[#000] underline decoration-[#fc7021] ">
                    A little about me
                </h4>
                <p className="text-base text-[#3f2782]">
                    Hello, my name is{" "}
                    <span className="underline text-[#fc7021]/70">
                        Zainulabideen
                    </span>{" "}
                    I am a student studying in high school. I am learning
                    full-stack development. I am looking for open source
                    projects to contribute to and a friendly, cheerful, and
                    supportive team to help, create websites. I am familiar with
                    multiple tech stacks and am always excited and interested to
                    learn a new one.
                </p>
            </motion.div>
        </div>
    );
};

export default About;

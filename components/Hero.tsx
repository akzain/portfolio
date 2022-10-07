import Link from "next/link";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
    const [text, setText] = useTypewriter({
        words: ["Hi, My name is Zainulabideen", "I am a student"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col items-center space-y-8 justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                src="https://avatars.githubusercontent.com/u/80206683?v=4"
                className="relative rounded-full h-32 w-32 mx-auto object-cover border border-[#dc2b5b]"
            />
            <div className="z-20">
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3 text-[#3f2782]">{text}</span>
                    <Cursor cursorColor="#fc7021" />
                </h1>
                <h2 className="text-sm uppercase mt-3 text-[#fc7021] pb-2 tracking-[15px]">
                    Fullstack developer
                </h2>
                <div>
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                    <Link href="#contact-me">
                        <button className="heroButton">Contact me</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;

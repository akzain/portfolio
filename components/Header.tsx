import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                <SocialIcon
                    url="https://github.com/akzain"
                    fgColor="#dc2b5b"
                    bgColor="transparent"
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center text-300 cursor-pointer"
            >
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="#dc2b5b"
                    bgColor="transparent"
                />
                <p className="uppercase hidden md:inline-flex text-sm text-[#3f2782] hover:text-[#dc2b5b] font-semibold">
                    <Link href="#contact-me">Get In Touch</Link>
                </p>
            </motion.div>
        </header>
    );
};

export default Header;

import React from "react";
import { DiReact, DiJavascript1, DiDjango, DiPython, DiFirebase, DiPostgresql, DiGithubBadge, DiVisualstudio, DiHtml5, DiCss3 } from "react-icons/di";

import { motion } from "framer-motion";

type Props = {};

const Skill = (props: Props) => {
    return (
        <div className="grid grid-cols-4 gap-5">
            <div className="group relative flex cursor-pointer">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter "
                >
                    <h2
                        className="flex items-center gap-2"
                        style={{ color: "#61DAFB" }}
                    >
                        <DiReact color="#61DAFB" size={30} /> <span className="font-bold">React</span>
                    </h2>
                </motion.div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter "
                >
                    <h2
                        className="flex items-center gap-2"
                        style={{ color: "#F0DB4F" }}
                    >
                        <DiJavascript1 color="#F0DB4F" size={30} /> <span className="font-bold">Javascript</span>
                    </h2>
                </motion.div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter "
                >
                    <h2
                        className="flex items-center gap-2"
                        style={{ color: "#0C4B33" }}
                    >
                        <DiDjango color="#0C4B33" size={30} /> <span className="font-bold">Django</span>
                    </h2>
                </motion.div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter "
                >
                    <h2
                        className="flex items-center gap-2"
                        style={{ color: "#306998" }}
                    >
                        <DiPython color="#4B8BBE" size={30} /> <span className="font-bold">Python</span>
                    </h2>
                </motion.div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter "
                >
                    <h2
                        className="flex items-center gap-2"
                        style={{ color: "#FFCB2B" }}
                    >
                        <DiFirebase color="#FFCB2B" size={30} /> <span className="font-bold">Firebase</span>
                    </h2>
                </motion.div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter "
                >
                    <h2
                        className="flex items-center gap-2"
                        style={{ color: "#31648C" }}
                    >
                        <DiPostgresql color="#31648C" size={30} /> <span className="font-bold">PostgreSQL</span>
                    </h2>
                </motion.div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter "
                >
                    <h2
                        className="flex items-center gap-2"
                        style={{ color: "#000" }}
                    >
                        <DiGithubBadge color="#000" size={30} /> <span className="font-bold">Github</span>
                    </h2>
                </motion.div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter "
                >
                    <h2
                        className="flex items-center gap-2"
                        style={{ color: "#3EA6EB" }}
                    >
                        <DiVisualstudio color="#3EA6EB" size={30} /> <span className="font-bold">Vs Code</span>
                    </h2>
                </motion.div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter "
                >
                    <h2
                        className="flex items-center gap-2"
                        style={{ color: "#E85400" }}
                    >
                        <DiHtml5 color="#E85400" size={30} /> <span className="font-bold">Html</span>
                    </h2>
                </motion.div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter "
                >
                    <h2
                        className="flex items-center gap-2"
                        style={{ color: "rgb(40,98,233)" }}
                    >
                        <DiCss3 color="rgb(40,98,233)" size={30} /> <span className="font-bold">Css</span>
                    </h2>
                </motion.div>
            </div>
        </div>
    );
};

export default Skill;

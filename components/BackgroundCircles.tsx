import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
    return (
        <div className="relative flex justify-center items-center">
            <div className="absolute border border-[#fc7021] rounded-full h-[100px] w-[100px] mt-52 animate-ping " />
            <div className="rounded-full border border-[#dc2b5b] opacity-20 h-[350px] w-[350px] mt-52 absolute  " />
            <div className="rounded-full border border-[#3f2782] opacity-20 h-[500px] w-[500px] mt-52 absolute  " />
            <div className="rounded-full border border-[#dc2b5b] opacity-20 h-[650px] w-[650px] mt-52 absolute  " />
            <div className="rounded-full border border-[#3f2782] opacity-20 h-[800px] w-[800px] mt-52 absolute" />
        </div>
    );
};

export default BackgroundCircles;

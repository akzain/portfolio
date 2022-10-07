import React from "react";

type Props = {};

const Projects = (props: Props) => {
    return (
        <div className="h-screen relative flex  overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[#fc7021] text-2xl">
                Projects
            </h3>
            <div className="relative w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 flex scrollbar scrollbar-track-[#3f2782]/20 scrollbar-thumb-[#fc7021]/80">
                {/* Projects */}
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <img
                        src="https://user-images.githubusercontent.com/72341453/134747262-0a92233d-8010-40f8-84c5-8d94895aac44.PNG"
                        className="border border-[#dc2b5b] w-[700px] h-[500px] rounded-xl"
                    />
                    <a
                        href="https://github.com/divanov11/StudyBud"
                        target={"_blank"}
                    >
                        <div className="space-y-10 px-0 text-[#3f2782] text-2xl md:px-10 max-w-6xl underline">
                            <h4>StudyBud</h4>
                        </div>
                    </a>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <img
                        src="https://raw.githubusercontent.com/divanov11/Django-2021/master/resources/images/Devsearch%20Home.jpg"
                        className="border border-[#dc2b5b] w-[500px] h-[500px] rounded-xl"
                    />
                    <a
                        href="https://github.com/divanov11/Django-2021"
                        target="_blank"
                    >
                        <div className="space-y-10 px-0 text-[#3f2782] text-2xl md:px-10 max-w-6xl underline">
                            <h4>DevSearch</h4>
                        </div>
                    </a>
                </div>
            </div>
            <div className="w-full absolute top-[30%] bg-[#ebdadf] left-0 h-[500px] -skew-y-12" />
        </div>
    );
};

export default Projects;

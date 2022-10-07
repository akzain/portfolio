import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
type Props = {};

const ContactMe = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:zainkamaal66885@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}.   ${formData.message}, `;
    };
    return (
        <div className="h-screen  flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[#fc7021] text-2xl">
                ContactMe
            </h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl text-[#fc7021] underline decoration-[#3f2782] font-semibold text-center">
                    Lets get in touch
                </h4>
                <div>
                    <div className="flex items-center space-x-5 ">
                        <AiOutlineMail color="#fc7021" width={28} height={28} />
                        <p className="text-2xl text-[#3f2782] ">zainkamaal66885@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 ">
                        <GoLocation color="#fc7021" width={28} height={28} />
                        <p className="text-2xl text-[#3f2782]">SaudiArabia</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit mx-auto"
                >
                    <div className="flex space-x-2">
                        <input
                            {...register("name")}
                            className="contactInput"
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            {...register("email")}
                            className="contactInput"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <input
                        {...register("subject")}
                        className="contactInput"
                        type="text"
                        placeholder="Subject"
                    />
                    <textarea
                        {...register("message")}
                        className="contactInput"
                        name=""
                        placeholder="message"
                    ></textarea>
                    <button
                        type="submit"
                        className="py-5 bg-[#cf8fa0] hover:bg-[#dc2b5b] px-10 rounded-md text-[#3f2782] font-bold  text-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;

import Image from 'next/image';
import React from 'react';

const ContactForm = () => {
    return (
        <div className="relative flex overflow-hidden p-2 justify-center bg-gradient-to-r from-[#FDEBE2] to-[#F26922] rounded-lg">
            <div className="relative z-10 rounded-lg p-8 w-[665px] h-[550px] mt-[10px]">
                <h2 className="text-xl sm:text-3xl font-bold mb-6 text-[#44372F]">Send A Message</h2>
                <form>
                    <div className="mb-7">
                        <input
                            type="text"
                            className="w-full px-3 rounded-lg py-2 border-b focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-7">
                        <input
                            type="text"
                            className="w-full px-3 rounded-lg py-2 border-b focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Phone"
                        />
                    </div>
                    <div className="mb-7">
                        <input
                            type="email"
                            className="w-full px-3 rounded-lg py-2 border-b focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="">
                        <textarea
                            className="w-full px-4 rounded-lg py-4 h-[140px] border-[#F26922] focus:outline-none focus:ring-2 focus:ring-[white]"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-4 bg-black w-[100%] text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 mt-[30px]"
                    >
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

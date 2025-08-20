'use client'; // This directive is necessary for interactive components

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...."); 

        const form = event.target;
        const formData = new FormData(form);
        const scriptURL = 'https://script.google.com/macros/s/AKfycbylp2YUPiws_pxW9A9RpMORG6XpxZn_k2_V4LEFG0MGW0Vf_JZvBcgZe0UvFf4YsLL7/exec';

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setResult("Message sent successfully!");
                form.reset(); 
            } else {
                 throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error!', error.message);
            setResult("Failed to send message. Please try again.");
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-20 scroll-mt-20">
            <h2 className='mb-20 text-center text-5xl font-Ovo dark:text-[var(--text)]'>Contact Me</h2>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                 
                    <div className="contact-left w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                        <h1 className="sub-title text-4xl font-semibold text-white mb-6">Contact Me</h1>
                        <p className="flex items-center mb-4 text-gray-900 dark:text-[var(--text)]">
                            <FontAwesomeIcon icon={faPaperPlane} className="text-blue-800 mr-4 cursor-pointer hover:-translate-y-1 duration-500 " />
                            matthewhaddad1234@gmail.com
                        </p>
                        <p className="flex items-center mb-4 text-gray-900 dark:text-[var(--text)]">
                            <FontAwesomeIcon icon={faPhone} className="text-blue-800 mr-4 cursor-pointer hover:-translate-y-1 duration-500" />
                            +1 (587) 896-2562
                        </p>
                        <div className="social-icons mt-6">
                            <a href="https://www.linkedin.com/in/matthew-m-haddad/" target="_blank" rel="noopener noreferrer" className="text-gray-400 duration-500 hover:text-blue-800 mr-4 text-2xl cursor-pointer hover:-translate-y-1 inline-block">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/MHadd0/Projects" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-800 text-2xl cursor-pointer hover:-translate-y-1 duration-500 inline-block">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                            
                        </div>

                            <a 
                                href="/Haddad-resume.pdf" 
                                download 
                                className="inline-block mt-4 bg-blue-800 text-white py-3 px-6 rounded-md cursor-pointer hover:bg-blue-600 transition-all"
                            >
                                Download Resume
                            </a>
                    </div>


                    <div className="contact-right w-full lg:w-2/3 px-4">
                        <form onSubmit={onSubmit}>
                            <input type="text" name="name" placeholder="Your Name" required className="w-full bg-blue-950 p-3 mb-4 rounded-md text-white border-none outline-none" />
                            <input type="email" name="email" placeholder="Your Email" required className="w-full bg-blue-950 p-3 mb-4 rounded-md text-white border-none outline-none" />
                            
                            <textarea name="Message" rows="6" placeholder="Your Message" required className="w-full bg-blue-950 p-3 mb-4 rounded-md text-white border-none outline-none"></textarea>
                            
                            <button type="submit" className="btn btn2 bg-blue-800 text-white py-3 px-6 rounded-md cursor-pointer hover:bg-blue-600 transition-all">Submit</button>
                        </form>
                        <span className="block mt-4 text-green-400">{result}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import React from "react";

function Contact() {
    return (
        <div className="my-6">
            <div className="flex flex-col md:flex-row w-full space-x-0 md:space-x-2 space-y-2 md:space-y-0">
                <div className="md:w-1/2 w-full">
                    <ContactCard name="Mason Wang" email="mwang25@stanford.edu" twitterLink="https://twitter.com/masonwang025" website="https://masonjwang.com">
                        <p>
                            Undergrad and NLP research @ Stanford.
                        </p>
                    </ContactCard>
                </div>
                <div className="md:w-1/2 w-full">
                    <ContactCard name="Ben Keigwin" email="keigwin@sas.upenn.edu" twitterLink="https://twitter.com/BenKeig137">
                        <p>
                            PhD student @ UPenn.
                        </p>
                    </ContactCard>
                </div>
            </div>
        </div>
    );
}

export default Contact;


function ContactCard({ name, email, children, twitterLink, website }: { name: string, email: string, children: React.ReactNode, twitterLink: string, website?: string }) {
    return (
        <div className="flex flex-col px-7 lg:py-7 py-5 rounded-xl border border-gray-300">
            <div className='font-serif font-semibold text-2xl'>{name}</div>
            <p className="text-gray-500 mb-2">{email}</p>
            {children}
            <ul className="horizontal space-x-2 mt-4 text-gray-500">
                <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x mt-0.5" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                </a>
                {website && (
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        <GlobeAltIcon className="w-5 h-5" />
                    </a>
                )}
            </ul>
        </div>
    );
}

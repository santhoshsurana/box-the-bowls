import React from "react";
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {

    return (
        <div className="bg-green-500 hover:animate-bounce w-10 h-10 px-[6px] py-[4px] z-20 rounded-full fixed bottom-20 right-2">

            <a href='https://api.whatsapp.com/send?phone=919390680414&forceIntent=true&load=loadInIOSExternalSafari'>
                <FaWhatsapp size={30} className='text-white' />
            </a>

        </div>
    )
};
export default WhatsAppButton;
import { Check } from 'lucide-react';
import React from 'react';

const Options = ({f}) => {
    return (

       <>
         <span className='flex items-center text-[#627382]'> <Check className='text-green-500'></Check> {f}</span>
       </>
    );
};

export default Options;
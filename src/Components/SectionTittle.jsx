import React from 'react';

const SectionTittle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-6'>
            <p className='text-yellow-600 mb-4 '>--- {subHeading} ---</p>
            <h3 className='text-4xl uppercase border-[#E8E8E8] border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTittle;
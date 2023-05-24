import React from 'react';

const SectionTile = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
                        <p className="text-[#D99904] italic mb-2 ">---{subHeading}---</p>

            <h3 className="text-4xl  font-semibold uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTile;
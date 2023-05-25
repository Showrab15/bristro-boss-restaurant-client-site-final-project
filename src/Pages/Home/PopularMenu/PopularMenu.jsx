import React, { useEffect, useState } from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../components/SectionTtile/SectionTitle';
const PopularMenu = () => {


const [menu] = useMenu();

 const popular = menu.filter(item => item.category === 'popular')

    
    return (
        <section className="mb-12">
           
            <SectionTitle
            
            
             subHeading="Popular Items"
                heading="From Our Menu">

                </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
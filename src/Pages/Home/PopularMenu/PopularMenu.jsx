import React, { useEffect, useState } from 'react';
import SectionTile from '../../../components/SectionTile/SectionTile';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/UseMenu';
const PopularMenu = () => {


const [menu] = useMenu();

 const popular = menu.filter(item => item.category === 'popular')

    
    return (
        <section className="mb-12">
            <SectionTile
                subHeading="Popular Items"
                heading="From Our Menu"
            ></SectionTile>
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
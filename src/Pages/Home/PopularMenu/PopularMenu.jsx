import React, { useEffect, useState } from 'react';
import SectionTile from '../../../components/SectionTile/SectionTile';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {


    const [menu, setMenu] = useState([])


    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTile
                subHeading="Popular Items"
                heading="From Our Menu"
            ></SectionTile>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
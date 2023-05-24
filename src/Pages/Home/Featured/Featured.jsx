import React from 'react';
import SectionTile from '../../../components/SectionTile/SectionTile';
import featuredItem from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white  pt-8 my-20">
            <SectionTile
            subHeading="Check It Out"
            heading="Featured Items"
            ></SectionTile>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 px-36 pb-20 pt-12 gap-8">
                <div>
                    <img src={featuredItem} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">where Can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime teneturLorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
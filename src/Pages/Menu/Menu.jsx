import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/UseMenu';
import SectionTile from '../../components/SectionTile/SectionTile'
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {

const [menu] = useMenu();
const deserts = menu.filter(item => item.category === 'dessert')
const pizzas = menu.filter(item => item.category === 'pizza')
const soups = menu.filter(item => item.category === 'soup')
const salads = menu.filter(item => item.category === 'salad')
const offer = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover 
            img={menuImg}
            title="Our Menu"
            >

            </Cover>
           <SectionTile 
           subHeading="Don't Miss"
           heading="Today's Offer"
           >

           </SectionTile>
           <MenuCategory
           
           
           items={offer}></MenuCategory>
           <MenuCategory
            items={deserts}
            title={"Deserts"}
            img={desertImg}
            ></MenuCategory>
              <MenuCategory
            items={pizzas}
            title={"Pizzas"}
            img={pizzaImg}
            ></MenuCategory>
              <MenuCategory
            items={salads}
            title={"Salads"}
            img={saladImg}
            ></MenuCategory>
              <MenuCategory
            items={soups}
            title={"Soups"}
            img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;
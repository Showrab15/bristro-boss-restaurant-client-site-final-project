import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/UseMenu';
import MenuCategory from './MenuCategory/MenuCategory';
import SectionTitle from '../../components/SectionTtile/SectionTitle';

const Menu = () => {

  const [menu] = useMenu();
  const deserts = menu.filter(item => item.category === 'dessert')
  const pizzas = menu.filter(item => item.category === 'pizza')
  const soups = menu.filter(item => item.category === 'soup')
  const salads = menu.filter(item => item.category === 'salad')
  const offer = menu.filter(item => item.category === 'offered')

  return (
    <>
      <div>
        <Helmet><title>Bistro Boss || Menu</title></Helmet>
        <Cover img={menuImg} title="Our Menu"></Cover>
        <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
        <MenuCategory items={offer}></MenuCategory>
        <MenuCategory items={deserts} title={"dessert"} img={desertImg}></MenuCategory>
        <MenuCategory items={pizzas} title={"pizza"} img={pizzaImg}></MenuCategory>
        <MenuCategory items={salads} title={"salad"} img={saladImg}></MenuCategory>
        <MenuCategory items={soups} title={"soup"} img={soupImg}></MenuCategory>
      </div>
    </>
  );
};

export default Menu;
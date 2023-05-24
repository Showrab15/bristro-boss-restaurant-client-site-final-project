import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import orderImg from '../../assets/order/order.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/UseMenu';

const Order = () => {

    const [tabIndex , setTabIndex] = useState(0);
    const [menu] = useMenu();
    const deserts = menu.filter(item => item.category === 'dessert')
const pizzas = menu.filter(item => item.category === 'pizza')
const soups = menu.filter(item => item.category === 'soup')
const salads = menu.filter(item => item.category === 'salad')
const offer = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Cover
            img={orderImg}
            title="Order Food"
            ></Cover>
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Desert</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
        </div>
    );
};

export default Order;
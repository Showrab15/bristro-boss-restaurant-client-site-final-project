import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import orderImg from '../../assets/order/order.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/UseMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    // console.log(category);

    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const desserts = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    
    return (
        <div>
            <Helmet><title>Bistro Boss || Order Food</title></Helmet>
            <Cover img={orderImg} title="Order Food"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center mt-8">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <div className="mt-8">

                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={pizzas}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default Order;
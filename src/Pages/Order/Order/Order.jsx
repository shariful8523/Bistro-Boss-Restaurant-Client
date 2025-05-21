import { Helmet } from 'react-helmet-async';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/MenuCover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import FoodCard from '../../Shared/FoodCard/FoodCard';
import useMenu from '../../../Hooks/useMenu';
import { useParams } from 'react-router-dom';



const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)


    const [menu] = useMenu();
    

    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss  || Order Food </title>
            </Helmet>
            <Cover image={orderImg} tittle={"OUR SHOP"}></Cover>
            <div className='text-center mt-5'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-10 px-4">
                            {
                                dessert.map(item => (
                                    <FoodCard key={item._id} item={item} />
                                ))
                            }
                        </div>

                    </TabPanel>

                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-10 px-4">
                            {
                                pizza.map(item => (
                                    <FoodCard key={item._id} item={item} />
                                ))
                            }
                        </div>

                    </TabPanel>

                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-10 px-4">
                            {
                                salad.map(item => (
                                    <FoodCard key={item._id} item={item} />
                                ))
                            }
                        </div>

                    </TabPanel>

                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-10 px-4">
                            {
                                
                                soup.map(item => (
                                    <FoodCard key={item._id} item={item} />
                                ))
                            }
                        </div>

                    </TabPanel>

                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-10 px-4">
                            {
                                
                                drinks.map(item => (
                                    <FoodCard key={item._id} item={item} />
                                ))
                            }
                        </div>

                    </TabPanel>

                    
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
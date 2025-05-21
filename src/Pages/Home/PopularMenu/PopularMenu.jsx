import React, { useEffect, useState } from 'react';
import SectionTittle from '../../../Components/SectionTittle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
     const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular');
            setMenu(popularItem)
        })
    },[])

    

    return (
        <section className='mb-12'>
            <SectionTittle
               
                subHeading="Check it out"
                 heading="FROM OUR MENU"
            />


            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item=> <MenuItem
                    key={item._id}
                    item={item}>
                    </MenuItem>)
                }
            </div>
            




        </section>
    );
};

export default PopularMenu;
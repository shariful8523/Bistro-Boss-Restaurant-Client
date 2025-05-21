import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/MenuCover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../Hooks/useMenu';
import SectionTittle from '../../../Components/SectionTittle';
import MenuCategory from '../MenuCategory/Menucategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (


        <div>
            <Helmet>
                <title>Bistro Boss  || Our Menu </title>

            </Helmet>
            <Cover image={img} tittle={"our menu"}  ></Cover>
            <section>
                <SectionTittle
                    subHeading={"Don't miss"}
                    heading={"TODAY'S OFFER "}
                />
            </section>
            {/* offers menu items */}
            <MenuCategory items={offered} btnName={"ORDER YOUR FAVOURITE FOOD"}></MenuCategory>

            {/* deserts items  */}
            <Cover image={dessertImg} tittle={"dessert"}  ></Cover>
            <MenuCategory items={dessert} btnName={"ORDER YOUR FAVOURITE FOOD"}></MenuCategory>

            {/* pizza items  */}
            <Cover image={pizzaImg} tittle={"pizza"}  ></Cover>
            <MenuCategory items={pizza} btnName={"ORDER YOUR FAVOURITE FOOD"}></MenuCategory>

            {/* salad items  */}
            <Cover image={saladImg} tittle={"salad"}  ></Cover>
            <MenuCategory items={salad} btnName={"ORDER YOUR FAVOURITE FOOD"}></MenuCategory>

            {/* soup items  */}
            <Cover image={soupImg} tittle={"soup"}  ></Cover>
            <MenuCategory items={soup} btnName={"ORDER YOUR FAVOURITE FOOD"}></MenuCategory>




        </div>
    );
};

export default Menu;
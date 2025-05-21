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
            <MenuCategory items={offered} ></MenuCategory>

            {/* deserts items  */}
            <MenuCategory items={dessert} image={dessertImg} title={"dessert"} ></MenuCategory>

            {/* pizza items  */}
            
            <MenuCategory items={pizza} image={pizzaImg} title={"pizza"} ></MenuCategory>

            {/* salad items  */}
            
            <MenuCategory items={salad} image={saladImg} title={"salad"} ></MenuCategory>

            {/* soup items  */}
           
            <MenuCategory items={soup} image={soupImg} title={"soup"} ></MenuCategory>




        </div>
    );
};

export default Menu;
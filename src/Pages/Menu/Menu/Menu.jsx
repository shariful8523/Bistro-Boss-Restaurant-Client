import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/MenuCover/Cover';
import img from '../../../assets/menu/banner3.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../Hooks/useMenu';
import SectionTittle from '../../../Components/SectionTittle';
import MenuCategory from '../MenuCategory/Menucategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import { Vortex } from 'react-loader-spinner';

const Menu = () => {
  const [menu, loading] = useMenu();

  // Filter by category
  const offered = menu.filter(item => item.category === 'offered');
  const dessert = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad');
  const soup = menu.filter(item => item.category === 'soup');

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Vortex
          visible={true}
          height="100"
          width="100"
          ariaLabel="vortex-loading"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <Helmet>
        <title>Bistro Boss || Our Menu</title>
      </Helmet>

      {/* Cover Section */}
      <Cover image={img} tittle="Our Menu" />

      {/* Today's Offer Section */}
      <section className="mt-10">
        <SectionTittle subHeading="Don't miss" heading="TODAY'S OFFER" />
        <MenuCategory items={offered} />
      </section>

      {/* Dessert Section */}
      <MenuCategory items={dessert} image={dessertImg} title="Dessert" />

      {/* Pizza Section */}
      <MenuCategory items={pizza} image={pizzaImg} title="Pizza" />

      {/* Salad Section */}
      <MenuCategory items={salad} image={saladImg} title="Salad" />

      {/* Soup Section */}
      <MenuCategory items={soup} image={soupImg} title="Soup" />
    </div>
  );
};

export default Menu;

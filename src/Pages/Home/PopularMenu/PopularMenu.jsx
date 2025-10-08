import SectionTittle from '../../../Components/SectionTittle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
  const [menu] = useMenu();

  // Filter popular items
  const popular = menu.filter(item => item.category === 'popular');

  return (
    <section className="mb-12 px-4 sm:px-6 lg:px-10">
      {/* Section Title */}
      <SectionTittle
        subHeading="Check it out"
        heading="FROM OUR MENU"
      />

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 mt-6">
        {popular.map(item => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      {/* View Full Menu Button */}
      <div className="text-center mt-8">
        <button className="btn btn-outline border-0 border-b-4 hover:border-b-4 hover:border-yellow-500 transition-all duration-300">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;

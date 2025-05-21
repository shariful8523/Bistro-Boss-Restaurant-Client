
import SectionTittle from '../../../Components/SectionTittle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
   const [menu]=useMenu();

   const popular = menu.filter(item => item.category === 'popular')



    return (
        <section className='mb-12 '>
            <SectionTittle

                subHeading="Check it out"
                heading="FROM OUR MENU"
            />


            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}>
                    </MenuItem>)
                }
            </div>

            <div className="text-center mt-4">
                <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button>
            </div>




        </section>
    );
};

export default PopularMenu;
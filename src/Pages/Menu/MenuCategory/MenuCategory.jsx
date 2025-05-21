import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/MenuCover/Cover";


const MenuCategory = ({ items , image, title }) => {


    return (
        <div>
            {title && <Cover image={image} tittle={title}  ></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}>
                    </MenuItem>)
                }
            </div>

            <Link to={`/order/${title}`}>
            <div className="text-center mt-4 mb-10">
                <button className='btn btn-outline border-0 border-b-4 hover:bg-[#1F2937] hover:text-red-600 '>ORDER YOUR FAVOURITE FOOD</button>
            </div>
            </Link>
        </div>
    );
};

export default MenuCategory;
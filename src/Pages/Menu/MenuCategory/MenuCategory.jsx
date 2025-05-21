import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items,btnName }) => {


    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10 mt-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}>
                    </MenuItem>)
                }
            </div>

            <div className="text-center mt-4 mb-10">
                <button className='btn btn-outline border-0 border-b-4 hover:bg-[#1F2937] hover:text-red-600'>{btnName}</button>
            </div>
        </div>
    );
};

export default MenuCategory;
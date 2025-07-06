import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaWallet } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoCart } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie,  Legend } from 'recharts';



const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-starts');
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })

    if (isLoading || !stats) {
        return <p className="text-xl font-semibold text-center mt-10">Loading Dashboard...</p>;
    }


    console.log("Chart Data:", chartData);

    // custom shape for bar chart

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    // custom shape for the pi chart

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    const pieChartData = chartData.map(data => {
        return {name: data.category, value: data.revenue}
    })

    return (
        <div>
            <h2 className='text-3xl font-bold mb-10'>
                <span>Hi, Welcome  </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>

            <div className='flex  gap-5'>

                {/* revenue cart */}
                <div className='flex items-center gap-6  p-6 w-60 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded text-white'>

                    <div>
                        <FaWallet className='text-6xl ' />
                    </div>
                    <div>
                        <h2 className='text-2xl'>Revenue</h2>
                        <h2 className='text-2xl'>$ {stats.revenue}</h2>
                    </div>
                </div>


                {/* Customer Cart */}

                <div className='flex items-center gap-6  p-6 w-60 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded text-white'>

                    <div>
                        <HiUserGroup className='text-6xl ' />
                    </div>
                    <div>
                        <h2 className='text-2xl'>Customers</h2>
                        <h2 className='text-2xl'> {stats.users}</h2>
                    </div>
                </div>



                {/* Products Cart */}

                <div className='flex items-center gap-6  p-6 w-60 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded text-white'>

                    <div>
                        <MdRestaurantMenu className='text-6xl ' />
                    </div>
                    <div>
                        <h2 className='text-2xl'>Products</h2>
                        <h2 className='text-2xl'>{stats.menuItems}</h2>
                    </div>
                </div>


                {/* Order Cart */}

                <div className='flex items-center gap-6  p-6 w-60 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded text-white'>

                    <div>
                        <IoCart className='text-6xl ' />
                    </div>
                    <div>
                        <h2 className='text-2xl'>Orders</h2>
                        <h2 className='text-2xl'>{stats.orders}</h2>
                    </div>
                </div>




            </div>


            <div className='flex mt-10'>

                <div className='w-1/2'>

                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>

                </div>

                <div className='w-1/2 -mt-26'>


                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend ></Legend>
                        <Tooltip />
                    </PieChart>
                </div>

            </div>

        </div>
    );
};

export default AdminHome;

import Banner from './Banner/Banner';
import Category from './Category/Category';
import Featured from './Featured/Featured';
import Hero from './Hero/Hero';
import PopularMenu from './PopularMenu/PopularMenu';
import Recommends from './Recommends/Recommends';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss  || Home </title>

            </Helmet>


            <Banner></Banner>
            <Category></Category>
            <Hero></Hero>
            <PopularMenu></PopularMenu>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
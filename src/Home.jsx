import React from 'react';
import Videobg from '../src/videos/home-bg.mp4'; 
import Wblogo from '../src/images/logo-wanderer.svg';
import Sliderlist from'./Sliderlist'

 const Home = () => {
     return(
         <>
              <div className="pt-5 homePage text-center">

             <div className="brandHome">
                <img src={Wblogo} alt="Wanderer Bucket" />

                <h1>“Never let your memories be greater than your dreams.”</h1>
            </div>

            <div className="homeCategories">
                <Sliderlist />
             </div>
                    
              </div>
             <div className="videoBackdrop"></div>   
             <video autoPlay muted loop id="myVideo">
               <source src={Videobg} type="video/mp4" />
            </video>
         </>

     )
 }
 

 export default Home;
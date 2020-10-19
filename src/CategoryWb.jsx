import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CategoryWb from './CategoryWb';
import CategoryImg from '../src/images/category-sample1.jpg';

const CategoryWb = () => {

const categoryList = [
    {
        catImg : "",
        catName : "Advanture",
        catInfo : "Lorem ipsum text infor for travel type which will be replaced by original content.",
        catLink : "/"
    },
    {
        catImg : "",
        catName : "Trekking",
        catInfo : "Lorem ipsum text infor for travel type which will be replaced by original content.",
        catLink : "/"
    },
    {
        catImg : "",
        catName : "Religious",
        catInfo : "Lorem ipsum text infor for travel type which will be replaced by original content.",
        catLink : "/"
    },
    {
        catImg : "",
        catName : "Epic Roads",
        catInfo : "Lorem ipsum text infor for travel type which will be replaced by original content.",
        catLink : "/"
    },
    {
        catImg : "",
        catName : "Ancient Mystries",
        catInfo : "Lorem ipsum text infor for travel type which will be replaced by original content.",
        catLink : "/"
    },
    {
        catImg : "",
        catName : "Royal Culture",
        catInfo : "Lorem ipsum text infor for travel type which will be replaced by original content.",
        catLink : "/"
    },
    {
        catImg : "",
        catName : "Haunted",
        catInfo : "Lorem ipsum text infor for travel type which will be replaced by original content.",
        catLink : "/"
    },
    {
        catImg : "",
        catName : "Other world",
        catInfo : "Lorem ipsum text infor for travel type which will be replaced by original content.",
        catLink : "/"
    },
    {
        catImg : "",
        catName : "Sci Fi World",
        catInfo : "Lorem ipsum text infor for travel type which will be replaced by original content.",
        catLink : "/"
    }
];

    const renderCat = (catlist, index) => {
        return (
                <div className="wbCategoryBlock">
                    <img src={CategoryImg} alt="" />
                    <div className="catInfo">
                        <h2>{catlist.catName}</h2>
                        <p>{catlist.catInfo}</p>
                        <NavLink to="{{ catlist.catLink}} ">Visit Places -</NavLink>
                    </div>
                </div>
            
        );
    };


    return(
        <>
         
            {categoryList.map(renderCat)}
        
        </>
    )
}

export default CategoryWb;
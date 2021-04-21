import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./OurProducts.css";

function OurProducts(props) {

    const [myData, setData] = useState([]);
    
    useEffect(() => {
        //setData(props.myData);
        if(props != null){
            setData(props.myData);
        }else{
            console.log("props empty");
        }
    },[props]);

    const handleData = () =>{
        return(
            myData != null 
            ? myData.map( (item, index) => {
                return (
                    <li className="item-product" key={index}>
                        <div>
                            <div className="item-product-header">
                                <Link to="#">
                                    <img src={item.photo} alt=""/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link to="#">{item.name}</Link>
                                <span>${item.prix}</span>
                                <Link className="btn" to="#">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                )
                
            }) 
            :<li className="item-product" >
                <div>
                    <div className="item-product-header">
                        <Link to="#">
                            <img src="https://lh3.googleusercontent.com/proxy/NbNqM8QhvpJ2dj4grj8SP2t_jr4j94e2hscS1PQZ6wJAJmb7vnwPXpFldwPfTrj_qUfnn92MQgUmXOnQYTYxdCtwPCwDwRH6qf7JbtKXN8BxbjBq4y7HyOJpqC8hV9s3wC3uy3QaRNPe_HtU6A8Uc8N9saLPU1AyiXXI2a1D0jNXm3S6CtYU7ohL_lDg3BqNSSHdLg-TSQSZGg0l7Dn-dYPgvd2-47RNZktiAmmV9Gs7eeP_lZ-teju5145lUWn0iIQvu9qNanWjwX-5XqFtoaR3kHdPssWWLss1LExbM8G1ZRmXg2-V8XlWjhcb07n7tT3tANMatJz1Y-VXVqAwJSw269d8f3iwRmB4ePsEEifqfmpitGtWtvxnrgQFw8nJUDQ3NX1z-mN7ZhdMc43nAYv0mRLCQbOCCv9mP5IEomGM0KkK7ypz_8llM213T-09vMRI0ga7XVgXeAI2ZXVFwmbop0wAgx5QX0w2OGLer8ZbBL8HYqapLkDycVfvxwNV2PDxUBrn5dukw-XT2_jkBfbMfygAu5nJ4pXIQsiy-yO2gtGXEhExwHEJTm5_OcxOmfrdqUk" alt=""/>
                        </Link>
                    </div>
                    <div className="item-product-body">
                        <Link to="#">Not Available</Link>
                            <span>Not Available</span>
                        <Link className="btn" to="#">Add To Cart</Link>
                    </div>
                </div>
            </li>
        )
        
    }
   
    return (
        
        <>
            <div className="container border-header">
                <h2>Our Products</h2>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                <span></span>
            </div>
        {/* brand name filter */}
            <div className="brand-names row" style={{margin: "auto",marginBottom: "30px"}}>
                <div className="brand-logo col" style={{background:"#e1ffd9"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-6_medium.png?v=1580284143" alt=""/>
                        <span>Milk</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#ffdedc"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-5_medium.png?v=1580284176" alt=""/>
                        <span>Fruits</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#dff1ff"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-4_medium.png?v=1580284192" alt=""/>
                        <span>Flour</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#fbf9c9"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-3_medium.png?v=1580284218" alt=""/>
                        <span>Meat</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#ffd8ed"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-2_medium.png?v=1580284239" alt=""/>
                        <span>Vegies</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#e1e9fc"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-1_medium.png?v=1580284251" alt=""/>
                        <span>Eggs</span>
                    </Link>
                </div>

            </div>
        {/* end brand name filter */}

        {/* list of products */}
            <div className="container-products" style={{marginTop:"30px"}}>
                <ul className="list-products">
                    {
                        
                        handleData()
                    }              
                </ul>
            </div>
        {/* end list of products */}
        </>
    )
}

export default OurProducts

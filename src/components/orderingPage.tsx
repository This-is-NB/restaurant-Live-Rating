import React, { useState } from 'react';
import MenuCategories from './MenuCategories';
// import food_deliverySrc from '/assets/food_delivery.png';
import food_deliverySrc from '../assets/fooddelivery.png';
import FeaturedProducts from './featuredProducts';

interface Product {
    id: number;
    categoryId: number;
    name: string;
    price: number;
    description: string;
    isVeg: boolean;
    isAvailable: boolean;
    availableTime?: string;
  }
  
  interface MenuCategory {
    id: number;
    name: string;
    count: number;
    imageUrl: string;
    isActive?: boolean;
    grayscale?: boolean;
    products: Product[];
  }
  



const OrderingPage: React.FC = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [orderType, setOrderType] = useState<number | null>(null);
  const menu: MenuCategory[] = require('../python-scripts/Menu.json');

  const handleCheckOut = () => {
    // Checkout logic here
  };

  const handleSetOrderType = (type: number, element: any) => {
    setOrderType(type);
    // Additional logic for setting order type
  };

  const kakeKababsProducts = [
    {
      id: 40938807,
      categoryId: 2099934,
      name: "Hara Bhara Kebab [5 Peices]",
      price: 429,
      description: "Kabab Made With Fresh Spinach Leaves, Green Peas And Potatos",
      isVeg: true,
      isAvailable: true
    },
    {
      id: 40938812,
      categoryId: 2099934,
      name: "Aloo Gobi Kabab [5 Peices]",
      price: 429,
      description: "Your Favourite Aloo Gobi As A Kebab",
      isVeg: true,
      isAvailable: true
    },
    // Add more products as needed
  ];

  return (
    <div className='space-top'>
    
        <div className="ordering-page wla-main-section">
        <div className="row m-0 w-100">
            <div className="col-lg-3 first-dv">
            <div className="fixed-black-screen"></div>
            <div className="fixed-cart-data">
                <div className="row m-0 justify-content-center">
                <div className="col-6 pr-2 text-center">
                    <button id="showTop" className="btn">
                    <span>{/* SVG placeholder for food tray */}</span> Menu
                    </button>
                </div>
                <div className="fixed-black-screen"></div>
                </div>

                <div className="view-cart-dv price-checkout shadow-none p-0" style={{ display: 'none !important' }}>
                <a onClick={handleCheckOut} id="showViewCart" className="cart-button animatebtn" style={{ display: 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span className="first-cb">
                        <span className="subTotalSpan"></span>
                        <span className="showCountItem" style={{ display: 'inline-block', marginLeft: '8px' }}>
                        |<span id="cartAmountCount"></span>
                        </span>
                    </span>
                    <span className="second-cb">
                        View Cart {/* SVG placeholder */}
                    </span>
                    </div>
                </a>
                </div>

                <div className="outletclosed" id="outlet_closed" style={{ display: isClosed ? 'block' : 'none' }}>
                <span className="cart-button">
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <span className="second-cb">Outlet is closed</span>
                    </div>
                </span>
                </div>

                <div className="d-flex d-lg-none align-items-center sticky-nav-men">
                <div>
                    <a href="https://kakedihatti.com/">
                    <span>{/* SVG placeholder */}</span>
                    <span className="d-block" style={{ lineHeight: '1.5em' }}>Home</span>
                    </a>
                </div>
                <div>
                    <a href="#" className="sticky-nav-men-active">
                    <span>{/* SVG placeholder */}</span>
                    <span className="d-block" style={{ lineHeight: '1.5em' }}>Order</span>
                    </a>
                </div>
                <div className="price_mobile">
                    <span onClick={handleCheckOut}>
                    {/* SVG placeholder */}
                    <span className="cart-number">
                        {/* SVG placeholder */}
                        <span id="cartItemCount"></span>
                    </span>
                    <span className="d-block" style={{ lineHeight: '1.5em' }}>Cart</span>
                    </span>
                </div>
                </div>
            </div>

            <div className="navigationtwo">
                {/* <div className="d-none d-lg-block" id="cloud_brand" style={{ display:"none" }}>
                    <nav className="brands-menu menu-nw">
                        <div className="overlay-tp-hd"></div>
                        <span className="backBtn" style={{ color: '#2d2b2d' }}>
                        <span><i className="las la-arrow-left"></i></span>Select Your Brands
                        </span>
                        <div className="sub-part-outer">
                        <span className="subcategoriestwo active align-items-center" data-toggle="modal" data-target="#change-brand" style={{ cursor: 'pointer' }}>
                            <div className="row">
                            <div className="col-11 pr-1" style={{ flex: '0 0 90%', maxWidth: '90%', paddingLeft: '0.8rem !important', display: 'flex' }}>
                                <section className="img-slider">
                                <div className="slider-container" id="brand_slideImg"></div>
                                </section>
                                <div>
                                <p className="switchp">
                                    <span id="selected_brand_title"></span>
                                    <span>
                                    <b style={{ fontWeight: 600, borderBottom: '1px solid var(--main-bg-color)', marginTop: '5px' }}>Switch Brand</b>
                                    <span id="brand_count" style={{ display: 'inline-block', marginLeft: '3px', marginTop: '5px' }}></span>
                                    </span>
                                </p>
                                </div>
                            </div>
                            <div className="col-1 pl-1 d-flex justify-content-end align-items-center" style={{ flex: '0 0 10%', maxWidth: '10%' }}>
                                SVG placeholder 
                            </div>
                            </div>
                        </span>
                        </div>
                    </nav>
                </div> */}
                <p className="categories-hd">Categories</p>
                <nav className="menu menu-top" id="sectionList">
                    <MenuCategories/>
                </nav>
            </div>
            </div>
            
            <div id="sticky-toggle"></div>
            <div id="sticky-anchor"></div>
            
            <div className="col-md-7 cart-center">
            <div className="new-cart-outer">
                <div className="new-cart">
                <div className="common-right-left top-card-new">
                    <div className="row m-0">
                    <div className="col-xl-6 pl-0 pr-0 pr-xl-1">
                        <div className="left-outlet-information">
                        <div className="outlet-names-div">
                            <div className="tp-outlet-detail">
                            <div className="outlet-image">
                                <img src="https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg" alt="Kake Di Hatti" width="400" height="400" />
                            </div>
                            <div className="outlet-detail d-flex align-items-center w-100">
                                <div className="w-100">
                                <h1 className="outlet-name mb-0 d-none">Kake Di Hatti - Banasankari, Bangalore</h1>
                                <span className="heading-1 mb-0">Kake Di Hatti</span>
                                <p className="outlet-name-two mb-0">Banasankari, Bangalore</p>
                                <span className="open-span">OPEN</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="outlet-icons">
                            <ul className="outlet-ul">
                            <li>
                                <span>
                                <a href="tel:9108127750" title="Call Outlet" id="contactLink">
                                    <i className="las la-phone"></i>
                                </a>
                                </span>
                            </li>
                            <li>
                                <span>
                                <a href="https://www.google.com/maps/dir//12.92588,77.54898/@12.92588,77.54898,17z" target="_blank" title="Locate Us">
                                    <i className="las la-map-marker-alt"></i>
                                </a>
                                </span>
                            </li>
                            <li>
                                <span>
                                <a href="#" data-toggle="modal" data-target="#moreinfo" title="More Info">
                                    <i className="las la-info-circle"></i>
                                </a>
                                </span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-6 pl-0 pl-xl-1 pr-0 d-none d-lg-block">
                        <div className="veg-toggle">
                        <div>
                            <div className="row veg-row m-0">
                            <div className="col-4 col-md-7 voggle-left pl-0 pr-1">
                                <span onClick={() => {}} style={{ cursor: 'pointer' }}>
                                <div className="search-div">
                                    <p>Search Menu</p>
                                    <span>
                                    <img src="https://kakedihatti.com/assets/wla_new/img/search-icn.png" alt="Search Icn" width="17" height="17" />
                                    </span>
                                </div>
                                </span>
                            </div>
                            
                            <div className="col-8 col-md-5 voggle-right pr-0 pl-1">
                                <div className="checkboxnew-outer" id="vegNonBoth">
                                    <div className="chek action">
                                        <label>
                                        <input type="checkbox" value="1" name="chkBestSeller" />
                                        <span>
                                            <div className="veg-flag"><span></span></div> Veg <i className="las la-times" style={{ marginLeft: '5px' }}></i>
                                        </span>
                                        </label>
                                    </div>
                                    
                                    <div className="chek comedy">
                                        <label>
                                        <input type="checkbox" value="2" name="chkBestSeller" />
                                        <span>
                                            <div className="non-vegflag"><span></span></div> Non-Veg <i className="las la-times" style={{ marginLeft: '5px' }}></i>
                                        </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="checkboxnew-outer" id="pureVegOnly" style={{ display: 'none' }}>
                                <div className="chek comedy">
                                    <label>
                                    <span>
                                        <div className="veg-flag"><span></span></div> Pure-Veg
                                    </span>
                                    </label>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="veg-toggle veg-toggle-two d-none d-lg-none brands-menu">
                    <div className="overlay-tp-hd"></div>
                    <div className="d-none d-lg-none brand-toggle d-none">
                    <span data-toggle="modal" data-target="#change-brand">
                        <div className="row">
                        <div className="col-11 pr-1 d-flex">
                            <section className="img-slider">
                            <div className="slider-container" id="switch_brand"></div>
                            </section>
                            <div>
                            <p className="switchp">
                                <span id="selected_brand_title_mob"></span>
                                <span>
                                <b style={{ fontWeight: 600, borderBottom: '1px solid var(--main-bg-color)', marginTop: '5px' }}>Switch Brand</b>
                                <span id="brand_length" style={{ display: 'inline-block', marginLeft: '3px', marginTop: '5px' }}></span>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="col-1 pl-1 d-flex justify-content-end align-items-center">
                            {/* SVG placeholder */}
                        </div>
                        </div>
                    </span>
                    </div>
                </div>
                
                <div className="veg-toggle d-block d-lg-none single-toggle">
                    <div>
                    <div className="row veg-row">
                        <div className="col-4 col-md-7 voggle-left">
                        <span onClick={() => {}} style={{ cursor: 'pointer' }}>
                            <div className="search-div">
                            <p>Search Menu</p>
                            <span>
                                <img src="https://kakedihatti.com/assets/wla_new/img/search-icn.png" alt="Search Icn" width="17" height="17" />
                            </span>
                            </div>
                        </span>
                        </div>
                        
                        <div className="col-8 col-md-5 voggle-right">
                        <div className="checkboxnew-outer" id="vegNonBoth_mob" style={{ display: 'none' }}>
                            <div className="chek action">
                            <label>
                                <input type="checkbox" value="1" name="chkBestSeller" />
                                <span>
                                <div className="veg-flag"><span></span></div> Veg <i className="las la-times" style={{ marginLeft: '5px' }}></i>
                                </span>
                            </label>
                            </div>
                            
                            <div className="chek comedy">
                            <label>
                                <input type="checkbox" value="2" name="chkBestSeller" />
                                <span>
                                <div className="non-vegflag"><span></span></div> Non-Veg <i className="las la-times" style={{ marginLeft: '5px' }}></i>
                                </span>
                            </label>
                            </div>
                        </div>
                        <div className="checkboxnew-outer" id="pureVegOnly_mob" style={{ display: 'none' }}>
                            <div className="chek comedy">
                            <label>
                                <span>
                                <div className="veg-flag"><span></span></div> Pure-Veg
                                </span>
                            </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="brownie-points-dv d-lg-none" id="count_brownie" style={{ display: 'none' }}>
                    <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                        <h3 className="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
                            Balance: <b id="points_remaning"></b>
                        </h3>
                        </div>
                        
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <p className="mb-0">
                            <span id="wallet_rule"></span><br/>1 = <i className="las la-rupee-sign"></i>1
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="tableNameDisplay veg-toggle justify-content-center" style={{ display: 'none' }}>
                    <h4 className="wla-outlet-name-md mb-0"><i className="las la-couch"></i> Table No: </h4>
                </div>
                </div>
            </div>
            
            <div className="promo-new common-top-bottom common-right-left offerDiv pb-1 pb-md-2 pt-1 pt-md-2">
                <h3 className="common-heading d-none d-md-block"><span>Promos</span></h3>
                
                <div className="simpleslider position-relative onlyone">
                <div className="common-coupen offers-slider product-list-container">
                    <div className="coupen-card" id="free-table-mode" style={{ cursor: "unset", display: "block" }}>
                        <div className="promo-dv">
                        {/* SVG code can be moved to a separate file if needed */}
                        <img src={food_deliverySrc} alt="Delivery" style={{marginTop:-45}} />
                        <div className="coupon-discription">
                            <h2>Free Delivery</h2>
                            <p className="mb-0">
                            on orders above <i className="la la-inr"></i>500
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div id="scrollLeft" className="scroll-icon">
                    <button className="slickk-prev slickk-arrow">previous</button>
                </div>
                
                <div id="scrollRight" className="scroll-icon">
                    <button className="slickk-next slickk-arrow">next</button>
                </div>
                </div>
            </div>
            
            <div className="active-orders common-top-bottom common-right-left pr-0" id="getOrderSiderOverviewOutler" style={{ display: 'none' }}>
                <h3 className="common-heading"><span>Active Orders</span></h3>
                <div className="active-order-div" id="getOrderSiderOverview"></div>
            </div>
            
            <div className="mid-section" data-offset="0">
                <div id="featuredProducts">
                <h3 className="common-heading"><span>Featured Items</span></h3>
                <div className="coupon-outer">
                    <div className="common-coupen pt-0" id="featuredList">

                    </div>
                </div>
                </div>

                <div id="productList">
                {menu.map((category) => (
                    <FeaturedProducts
                    key={category.id}
                    categoryName={category.name}
                    products={category.products}  // Assuming products are an array in each category
                    />
                ))}
                </div>

                <div id="hide_fssai" style={{ display: 'none' }}>
                <div className="fssai" style={{ padding: '0.5em', display: 'flex', alignItems: 'center' }}>
                    <img src="https://kakedihatti.com/assets/wla_new/img/fssai-logo.png" alt="Fssai Logo" width="450" height="221" style={{ maxWidth: '50px', display: 'block', marginBottom: '5px' }} />
                    <span className="d-inline-block" style={{ marginLeft: '10px' }}>License No. 11223334000486</span>
                </div>
                </div>
                
                <div id="manufaAddress" style={{ padding: '0.5em', display: 'none' }}>
                <span style={{ color: '#000' }}>Manufactured By:</span>
                <span style={{ marginLeft: '5px' }} id="manufAddress"></span>
                </div>

                <div className="fssai" id="manufaFssai" style={{ display: 'none' }}>
                <img src="https://kakedihatti.com/assets/wla_new/img/fssai-logo.png" alt="Fssai Logo" width="450" height="221" style={{ maxWidth: '50px', display: 'block', marginBottom: '5px' }} />
                <span className="d-inline-block" style={{ marginLeft: '10px' }}>
                    Licence No. <span id="manufFssai"></span>
                </span>
                </div>
            </div>
            </div>
            
            <div className="col-md-2 cart-last">
            <div className="wla-cart-dv">
                <h4 className="wla-outlet-name-md mb-0">Your Cart</h4>
                
                <div className="delivery-div">
                <div className="order-type">
                    <a onClick={(e) => handleSetOrderType(1, e.currentTarget)} data-option-type="1" className="animatebtn" id="delivery-tab">
                    <span className="order-type-inside">Delivery</span>
                    <span className="checked" id="chk_del" style={{ display: 'none' }}><i className="las la-check"></i></span>
                    <span id="chk_del_dis" style={{ display: 'none' }}><i className="las la-times-circle"></i></span>
                    <small className="d-block w-100">45 Mins</small>
                    </a>
                    
                    <a onClick={(e) => handleSetOrderType(2, e.currentTarget)} data-option-type="2" className="animatebtn" id="pickup-tab">
                    Pickup
                    <span className="checked" id="chk_pickup" style={{ display: 'none' }}><i className="las la-check"></i></span>
                    <span id="chk_pickup_dis" style={{ display: 'none' }}><i className="las la-times-circle"></i></span>
                    </a>
                    
                    <a onClick={(e) => handleSetOrderType(3, e.currentTarget)} data-option-type="3" className="animatebtn" id="dineInTag">
                    Dine-in
                    <span className="checked" id="chk_dine" style={{ display: 'none' }}><i className="las la-check"></i></span>
                    <span id="chk_dine_dis" style={{ display: 'none' }}><i className="las la-times-circle"></i></span>
                    </a>
                    
                    <a onClick={(e) => handleSetOrderType(4, e.currentTarget)} data-option-type="4" className="animatebtn" id="inCarTag">
                    In Car
                    <span className="checked" id="chk_incar" style={{ display: 'none' }}><i className="las la-check"></i></span>
                    <span id="chk_incar_dis" style={{ display: 'none' }}><i className="las la-times-circle"></i></span>
                    </a>
                </div>
                </div>
                
                <div className="cart-items-outer-main">
                <div id="cartDisplay"></div>
                <div id="AlreadycartDisplay"></div>
                </div>

                <div className="cart-btn cart-btn-tp price-checkout">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Subtotal</span> <span className="subTotalSpan"></span>
                </div>
                <div className="text-left d-none d-lg-block" style={{ color: '#848484', fontWeight: 300 }}>*exclusive of taxes</div>
                </div>
                
                <button onClick={handleCheckOut} className="cart-btn price-checkout animatebtn">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span>Checkout</span> <span className="totalSpan"></span>
                </div>
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default OrderingPage;
import React, { useState , useEffect} from 'react';
import MenuCategories from './MenuCategories';
// import food_deliverySrc from '/assets/food_delivery.png';
import food_deliverySrc from '../assets/fooddelivery.png';
import FeaturedProducts from './featuredProducts';
import SidebarMenu from './sidebarMenu';
import CartSidebar from './cart';

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
  const products : Product[] = menu.flatMap(category => category.products);

  const handleCheckOut = () => {
    // Checkout logic here
  };

  const handleSetOrderType = (type: number, element: any) => {
    setOrderType(type);
    // Additional logic for setting order type
  };

  const [votes, setVotes] = useState<Record<number, { likes: number; dislikes: number }>>(() => {
    const initialVotes: Record<number, { likes: number; dislikes: number }> = {};
    menu.forEach(category => {
      category.products.forEach(product => {
        initialVotes[product.id] = { likes: 0, dislikes: 0 };
      });
    });
    return initialVotes;
  });
    // products.forEach(product => {
    //   initialVotes[product.id] = { likes: 0, dislikes: 0 };
    // });
    // return initialVotes;
//   });


  useEffect(() => {
    const users = Array.from({ length: 50 }, (_, i) => `user_${i + 1}`);
  
    const interval = setInterval(() => {
      const updatedVotes = { ...votes };
  
      users.forEach(() => {
        // const randomProduct = products[Math.floor(Math.random() * products.length)];
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        // const randomProduct = menu[Math.floor(Math.random() * menu.length)].products[Math.floor(Math.random() * menu[0].products.length)];
        const isLike = Math.random() > 0.5;
  
        if (isLike) {
          updatedVotes[randomProduct.id].likes += 1;
        } else {
          updatedVotes[randomProduct.id].dislikes += 1;
        }
      });
  
      setVotes(updatedVotes);
      // sort the menu categories based on the difference of likes and disilikes of each product and also sort the products within each category
        menu.forEach(category => {
            category.products.sort((a, b) => {
            const aVotes = updatedVotes[a.id] || { likes: 0, dislikes: 0 };
            const bVotes = updatedVotes[b.id] || { likes: 0, dislikes: 0 };
            return (bVotes.likes - bVotes.dislikes) - (aVotes.likes - aVotes.dislikes);
            });
        });

        // sort the menu categories based on the difference of likes and disilikes of top product
        menu.sort((a, b) => {
            const aVotes = a.products[0] ? updatedVotes[a.products[0].id] : { likes: 0, dislikes: 0 };
            const bVotes = b.products[0] ? updatedVotes[b.products[0].id] : { likes: 0, dislikes: 0 };
            return (bVotes.likes - bVotes.dislikes) - (aVotes.likes - aVotes.dislikes);
        })
    }, 5000);
  
    return () => clearInterval(interval);
  }, [menu, votes]);

  return (
    <div className='space-top'>
    
        <div className="ordering-page wla-main-section">
        <div className="row m-0 w-100">
            <SidebarMenu menu={menu} isClosed={isClosed} handleCheckOut={handleCheckOut} />
          
            
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
                {/* <div id="featuredProducts">
                <h3 className="common-heading"><span>Featured Items</span></h3>
                    <div className="coupon-outer">
                        <div className="common-coupen pt-0" id="featuredList">

                        </div>
                    </div>
                </div> */}

                <div id="productList">
                {menu.map((category) => (
                    <FeaturedProducts
                    key={category.id}
                    categoryName={category.name}
                    products={category.products}
                    votes={votes}  // Assuming products are an array in each category
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
            
            <CartSidebar handleSetOrderType={handleSetOrderType} handleCheckOut={handleCheckOut} />

        </div>
        </div>
    </div>
  );
};

export default OrderingPage;
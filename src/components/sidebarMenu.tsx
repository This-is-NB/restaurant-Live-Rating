import React from 'react';
import MenuCategories from './MenuCategories';

interface SidebarMenuProps {
  menu: any[];
  isClosed: boolean;
  handleCheckOut: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menu, isClosed, handleCheckOut }) => (
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
          ...existing code...
      </div> */}
      <p className="categories-hd">Categories</p>
      <nav className="menu menu-top" id="sectionList">
        <MenuCategories categories={menu} onCategoryClick={(categoryName: string) => {
          const section = document.getElementById(categoryName.replace(/\s+/g, '-').toLowerCase());
          if (section) {
            const yOffset = -80;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }} />
      </nav>
    </div>
  </div>
);

export default SidebarMenu;
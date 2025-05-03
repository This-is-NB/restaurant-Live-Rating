import React from 'react';

interface CartSidebarProps {
  handleSetOrderType: (type: number, element: any) => void;
  handleCheckOut: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ handleSetOrderType, handleCheckOut }) => (
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
);

export default CartSidebar;
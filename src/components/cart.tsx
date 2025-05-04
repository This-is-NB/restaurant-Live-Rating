import React from 'react';

interface CartSidebarProps {
    orderType: number;
    handleSetOrderType: (type: number, element: any) => void;
    handleCheckOut: () => void;
    cart: Record<number, { product: any; quantity: number }>;
    cartTotal: number;
    onIncrease: (productId: number) => void;
    onDecrease: (productId: number) => void;
  }
  
const CartSidebar: React.FC<CartSidebarProps> = ({orderType, handleSetOrderType, handleCheckOut, cart, cartTotal , onIncrease, onDecrease}) => (
  
  
  <div className="col-md-2 cart-last">
    <div className="wla-cart-dv">
      <h4 className="wla-outlet-name-md mb-0">Your Cart</h4>
      <div className="delivery-div">
        <div className="order-type">
          <a onClick={(e) => handleSetOrderType(1, e.currentTarget)} data-option-type="1" className={"animatebtn" + (orderType === 1 ? ' active' : '')}  id="delivery-tab">
            <span className="order-type-inside">Delivery</span>
            <span className="checked" id="chk_del" style={{ display: 'none' }}><i className="las la-check"></i></span>
            <span id="chk_del_dis" style={{ display: 'none' }}><i className="las la-times-circle"></i></span>
            <small className="d-block w-100">45 Mins</small>
          </a>
          <a onClick={(e) => handleSetOrderType(2, e.currentTarget)} data-option-type="2" className={"animatebtn" + (orderType === 2 ? ' active' : '')} id="pickup-tab">
            Pickup
            <span className="checked" id="chk_pickup" style={{ display: 'none' }}><i className="las la-check"></i></span>
            <span id="chk_pickup_dis" style={{ display: 'none' }}><i className="las la-times-circle"></i></span>
          </a>
          <a onClick={(e) => handleSetOrderType(3, e.currentTarget)} data-option-type="3" className={"animatebtn" + (orderType === 3 ? ' active' : '')} id="dineInTag" style={{ display: 'none' }}>
            Dine-in
            <span className="checked" id="chk_dine" style={{ display: 'none' }}><i className="las la-check"></i></span>
            <span id="chk_dine_dis" style={{ display: 'none' }}><i className="las la-times-circle"></i></span>
          </a>
          <a onClick={(e) => handleSetOrderType(4, e.currentTarget)} data-option-type="4" className={"animatebtn" + (orderType === 4 ? ' active' : '')} id="inCarTag" style={{ display: 'none' }}>
            In Car
            <span className="checked" id="chk_incar" style={{ display: 'none' }}><i className="las la-check"></i></span>
            <span id="chk_incar_dis" style={{ display: 'none' }}><i className="las la-times-circle"></i></span>
          </a>
        </div>
      </div>
      <div className="cart-items-outer-main">
        <div id="cartDisplay">
        {Object.values(cart).length === 0 && <div>Your cart is empty.</div>}
          {Object.values(cart).map(item => (
            <div className="cart-items-outer" key={item.product.id}>
              <div className="row">
                <div className="col-8 cart-lft-btn">
                  <div>
                    <div className="veg-flag"><span></span></div>
                  </div>
                  <div>
                    <p className="item-small-hd">{item.product.name}</p>
                    <p className="item-price">
                      <span>{item.quantity} x ₹{item.product.price}</span>
                      <b style={{ display: 'inline-block', fontWeight: 500 }}>
                       = ₹{item.product.price * item.quantity}
                      </b>
                    </p>
                  </div>
                </div>
                <div className="col-4 cart-rgt-btn">
                  <div className="cart-new-btn">
                    <div className="quantity-btn">
                      <div className="_29Y5Z" id="qty_minus" onClick={() => onDecrease(item.product.id)}></div>
                      <input type="hidden" id={`act_sel_${item.product.id}`} value="update" className="1" />
                      <input
                        type="text"
                        id={`del-${item.product.id}`}
                        className=" _2zAXs qtyVal"
                        readOnly
                        value={item.quantity}
                      />
                      <div className="_1ds9T" id="qty_plus" onClick={() => onIncrease(item.product.id)}>+</div>
                    </div>
                    <div className="y9uHb theo-toggle" id={`upbar${item.product.id}`} style={{ display: 'none' }}></div>
                  </div>
                  <div className="available-next d-none">
                    <div style={{
                      textAlign: 'center',
                      border: '1px dashed #DA251C',
                      borderRadius: 10,
                      background: '#fae3e3',
                      color: '#DA251C',
                      position: 'absolute',
                      width: '95%',
                      bottom: 0,
                      left: 10
                    }}>
                      Next available at 12:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="AlreadycartDisplay"></div>
      </div>
      <div className="cart-btn cart-btn-tp price-checkout">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Subtotal </span> <span className="totalSpan"> ₹{cartTotal}</span>
        </div>
        <div className="text-left d-none d-lg-block" style={{ color: '#848484', fontWeight: 300 }}>*exclusive of taxes</div>
      </div>
      <button onClick={handleCheckOut} className="cart-btn price-checkout animatebtn">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span>Checkout</span> <span className="totalSpan">₹{cartTotal}</span>
        </div>
      </button>
    </div>
  </div>
);

export default CartSidebar;
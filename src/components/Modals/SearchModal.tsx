import React from "react";

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

interface SearchModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  products: Product[];
  cart: Record<number, { product: Product; quantity: number }>;
  onAddToCart: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
  show,
  setShow,
  products,
  cart,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [search, setSearch] = React.useState("");

  if (!show) return null;

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );


  const handleAddClick = (productId: number) => {
    onAddToCart(productId);
  };

  const handleDecrease = (productId: number) => {
    onRemoveFromCart(productId);
  };

  const handleIncrease = (productId: number, categoryId: number) => {
    onAddToCart(productId);
  };

  const openVariantModal = (productId: number, categoryId: number) => {
    // Implement if needed
  };

  return (
    <div className="modal modal-top pizza-popups search-modal full-height-modal bogo-popup fade show" tabIndex={-1} style={{display: "block", background: "rgba(0,0,0,0.3)"}}>
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title">Search Menu</span>
            <button type="button" className="close" onClick={() => setShow(false)} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.746872 0.546312C1.34167 -0.0484858 2.30603 -0.0484858 2.90083 0.546312L6.90077 4.54626L10.9007 0.546312C11.4955 -0.0484858 12.4599 -0.0484858 13.0547 0.546312C13.6495 1.14111 13.6495 2.10547 13.0547 2.70027L9.05473 6.70021L13.0547 10.7002C13.6495 11.295 13.6495 12.2593 13.0547 12.8541C12.4599 13.4489 11.4955 13.4489 10.9007 12.8541L6.90077 8.85417L2.90083 12.8541C2.30603 13.4489 1.34167 13.4489 0.746872 12.8541C0.152073 12.2593 0.152073 11.295 0.746872 10.7002L4.74682 6.70021L0.746872 2.70027C0.152073 2.10547 0.152073 1.14111 0.746872 0.546312Z" fill="#333333"></path>
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="search-div-oitr">
              <form className="form-search" onSubmit={e => e.preventDefault()}>
                <div className="input-group">
                  <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="form-control"
                    placeholder="Search for items or more..."
                    autoComplete="off"
                    maxLength={40}
                  />
                  <span className="input-group-btn">
                    <span>
                      <img src="https://kakedihatti.com/assets/wla_new/img/search-icn.png" alt="Search Icn" width="15" height="15" />
                    </span>
                  </span>
                </div>
              </form>
            </div>
            <div className="inner-sub-page-sec mt-3">
              <div className="row">
                {filtered.length === 0 && (
                  <div className="col-12 text-center text-muted py-4">No items found.</div>
                )}
                {filtered.map(product => (
                  <div key={product.id} className="col-12 item-card-design-new" id={`item-${product.id}`}>
                    <div className="item-card-design-new-start-outer">
                      <div className="item-card-design-new-start">
                        <div className="item-card-design-detail-new item-without-img">
                          <div>
                            <div className="d-flex align-items-center mb-2">
                              <div
                                className={product.isVeg ? 'veg-flag' : 'non-veg-flag'}
                                onClick={() => openVariantModal(product.id, product.categoryId)}
                              >
                                <span></span>
                              </div>
                            </div>
                            <div
                              className="item-heading"
                              onClick={() => openVariantModal(product.id, product.categoryId)}
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="item-tt-outer">
                                <h4 className="item-title">{product.name}</h4>
                              </div>
                            </div>
                            <p
                              className="price-p"
                              onClick={() => openVariantModal(product.id, product.categoryId)}
                            >
                              <i className="la la-inr"></i>{product.price}
                            </p>
                            <p className="heading-customize">{product.description}</p>
                            <div className="ratingp-tp-bg"></div>
                          </div>
                        </div>
                        <div className="item-card-placeholder-detail-new item-without-img-detail">
                          <div className="item-card-placeholder-nw-outer">
                            <div className="cart-new-btn rating-tp">
                              {!cart[product.id]?.quantity ? (
                                <div
                                  className="cart-count-add cart-btn"
                                  onClick={() => handleAddClick(product.id)}
                                  id={`btn-${product.id}`}
                                >
                                  ADD +
                                </div>
                              ) : (
                                <div className="quantity-btn" id={`div-${product.id}`}>
                                  <div
                                    className="_29Y5Z _20vNm"
                                    id="qty_minus"
                                    onClick={() => handleDecrease(product.id)}
                                  ></div>
                                  <input
                                    type="hidden"
                                    value="update"
                                    className="1"
                                  />
                                  <input
                                    type="text"
                                    id={`qty-input-${product.id}`}
                                    className="_2zAXs _2quy-"
                                    readOnly
                                    value={cart[product.id].quantity}
                                  />
                                  <div
                                    className="_1ds9T _2WdfZ"
                                    id="qty_plus"
                                    onClick={() => handleIncrease(product.id, product.categoryId)}
                                  >
                                    +
                                  </div>
                                </div>
                              )}
                              <div
                                className="y9uHb theo-toggle"
                                id={`bar${product.id}`}
                                style={{ display: 'none' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        {!product.isAvailable && (
                          <div
                            className="available-next"
                            style={{
                              textAlign: 'center',
                              border: '1px dashed #DA251C',
                              borderRadius: '10px',
                              background: '#fae3e3',
                              color: '#DA251C',
                              position: 'absolute',
                              width: '100%',
                              bottom: '0px',
                              left: '0px'
                            }}
                          >
                            Next available at {product.availableTime || '12:00 PM'}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
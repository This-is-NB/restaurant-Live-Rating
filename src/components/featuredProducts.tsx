import React, { useState } from 'react';

interface Product {
    id: number;
    categoryId: number;
    name: string;
    price: number;
    description: string;
    isVeg: boolean;
    isAvailable: boolean;
    availableTime?: string;
    likes?: number;
    dislikes?: number;
  }

  interface FeaturedProductsProps {
    categoryName: string;
    products: Product[];
    votes: Record<number, { likes: number; dislikes: number }>;
    onAddToCart: (productId: number) => void;
    cart: Record<number, { product: Product; quantity: number }>;
    onRemoveFromCart: (productId: number) => void;
    onLike: (productId: number) => void;         // <-- Add this
    onDislike: (productId: number) => void;  
    chatMessages: { user: string; comment: string; items: string[] }[];
  }


  const ReviewsModal: React.FC<{
    show: boolean;
    onClose: () => void;
    productName: string;
    reviews: { user: string; comment: string; items: string[] }[];
  }> = ({ show, onClose, productName, reviews }) => {
    if (!show) return null;
    return (
      <div className="modal-backdrop" style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'rgba(0,0,0,0.4)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="modal-content" style={{
          background: '#fff', borderRadius: 8, padding: 24, minWidth: 320, maxWidth: 400, maxHeight: 500, overflowY: 'auto', position: 'relative'
        }}>
          <button onClick={onClose} style={{
            position: 'absolute', top: 5, right: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 0
          }} aria-label="Close">
            <i className='la la-close' style={{ fontSize: 20, color: '#DA251C' }}></i>
            </button>
          <h4 style={{ marginBottom: 16 }}>Recent Reviews for <br/><span style={{ color: '#DA251C' }}>{productName}</span></h4>
          {reviews.length === 0 ? (
            <div style={{ color: '#888', fontSize: 14 }}>No reviews yet for this item.</div>
          ) : (
            <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
              {reviews.map((r, idx) => (
                <li key={idx} style={{ borderBottom: '1px solid #eee', marginBottom: 10, paddingBottom: 8 }}>
                  <div style={{ fontWeight: 500, fontSize: 13 , color: 'blue' , fontStyle:'italic'}}><i className='la la-user-circle' style={{ marginRight: 2}}></i>{r.user}</div>
                  <div style={{ fontSize: 13, color: "#444" }}>{r.comment}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };



const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ categoryName, products, votes, onAddToCart, cart, onRemoveFromCart , onLike, onDislike, chatMessages = []}) => {
//   const [quantities, setQuantities] = useState<Record<number, number>>({});

const [animating, setAnimating] = useState<{ [id: number]: 'like' | 'dislike' | null }>({});
  // Modal state
  const [showReviewsModal, setShowReviewsModal] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  // Handler to open modal and filter reviews for the product
  const handleSeeReviews = (product: Product) => {
    setModalProduct(product);
    setShowReviewsModal(true);
  };

  const handleLikeClick = (productId: number) => {
    setAnimating(a => ({ ...a, [productId]: 'like' }));
    onLike(productId);
    setTimeout(() => setAnimating(a => ({ ...a, [productId]: null })), 700); // match animation duration
  };

  const handleDislikeClick = (productId: number) => {
    setAnimating(a => ({ ...a, [productId]: 'dislike' }));
    onDislike(productId);
    setTimeout(() => setAnimating(a => ({ ...a, [productId]: null })), 700);
  };


  const handleAddClick = (productId: number) => {
    // setQuantities(prev => ({ ...prev, [productId]: 1 }));
    // const product = products.find(p => p.id === productId);
    // if (product) {
      onAddToCart(productId);
    // }
  };

  const handleDecrease = (productId: number) => {
    // setQuantities(prev => {
    //   const newQuantity = (prev[productId] || 0) - 1;
    //   if (newQuantity <= 0) {
    //     const newQuantities = { ...prev };
    //     delete newQuantities[productId];
    //     return newQuantities;
    //   }
    //   return { ...prev, [productId]: newQuantity };
    // });
    onRemoveFromCart(productId);
  };

  const handleIncrease = (productId: number, categoryId: number) => {
    // setQuantities(prev => ({ 
    //   ...prev, 
    //   [productId]: (prev[productId] || 0) + 1 
    // }));
    // Here you would typically call showVariant(productId, categoryId)
    onAddToCart(productId);
  };

  const openVariantModal = (productId: number, categoryId: number) => {
    // Implementation for opening variant modal
    console.log(`Opening variant modal for product ${productId}`);
  };




  return (
    <div className="page-section top_activ_elem" id={categoryName.replace(/\s+/g, '-').toLowerCase()}>
      <ReviewsModal
        show={showReviewsModal}
        onClose={() => setShowReviewsModal(false)}
        productName={modalProduct?.name || ''}
        reviews={
          chatMessages.filter(
            m => modalProduct && m.items.some(item => item.toLowerCase().includes(modalProduct.name.toLowerCase()))
          )
        }
      />
      <h3 className="wla-outlet-name-md-two w-100 common-heading mb-0">
        <span>{categoryName}</span>
      </h3>
      
      <div className="inner-sub-page-sec">
        <div className="row">
          <h4 
            className="w-100 text-center sub-heading" 
            style={{ color: '#4F4F4D', fontWeight: 300, fontSize: '16px' }}
          >
            {categoryName}
          </h4>
          
          {products.map(product => (
            <div key={product.id} className="col-md-6 item-card-design-new" id={`item-${product.id}`}>
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
                        <span
                          style={{color: '#007bff', textDecoration: 'underline', background: 'none', border: 'none', marginLeft: 8, cursor: 'pointer',padding: 0}}
                          onClick={() => handleSeeReviews(product)}
                        >
                          See recent reviews
                        </span>
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
                    {/* <div className="vote-section mt-2">
                        <span
                        style={{ color: 'green', marginRight: '10px', cursor: 'pointer' }}
                        onClick={() => onLike(product.id)}
                        title="Like"
                        >
                        👍 {votes[product.id]?.likes || 0}
                        </span>
                        <span
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => onDislike(product.id)}
                        title="Dislike"
                        >
                        👎 {votes[product.id]?.dislikes || 0}
                        </span>
                    </div>   */}
                    <div className="vote-section mt-2" style={{ position: 'relative', minHeight: 32 }}>
                        {/* Original Like/Dislike buttons */}
                        <span
                            className="like-btn"
                            style={{ color: 'green', marginRight: '10px', cursor: 'pointer', display: 'inline-block', position: 'relative', zIndex: 1 }}
                            onClick={() => handleLikeClick(product.id)}
                            title="Like"
                        >
                            👍 {votes[product.id]?.likes || 0}
                        </span>
                        <span
                            className="dislike-btn"
                            style={{ color: 'red', cursor: 'pointer', display: 'inline-block', position: 'relative', zIndex: 1 }}
                            onClick={() => handleDislikeClick(product.id)}
                            title="Dislike"
                        >
                            👎 {votes[product.id]?.dislikes || 0}
                        </span>

                        {/* Flying shadow for Like */}
                        {animating[product.id] === 'like' && (
                            <span
                            className="like-btn fly-up-shadow"
                            style={{
                                color: 'green',
                                marginRight: '10px',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                pointerEvents: 'none',
                                opacity: 0.7,
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                            }}
                            >
                            👍
                            </span>
                        )}

                        {/* Flying shadow for Dislike */}
                        {animating[product.id] === 'dislike' && (
                            <span
                            className="dislike-btn fly-down-shadow"
                            style={{
                                color: 'red',
                                position: 'absolute',
                                left: 40, // adjust if needed to match the thumbs down position
                                top: 0,
                                pointerEvents: 'none',
                                opacity: 0.7,
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                            }}
                            >
                            👎
                            </span>
                        )}
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
  );
};

export default FeaturedProducts;
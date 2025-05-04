import React, { useState , useEffect} from 'react';
import menuData from '../python-scripts/Menu.json';
import { useRef } from 'react';

const MAX_CHAT_MESSAGES = 500;

interface CartSidebarProps {
    orderType: number;
    handleSetOrderType: (type: number, element: any) => void;
    handleCheckOut: () => void;
    cart: Record<number, { product: any; quantity: number }>;
    cartTotal: number;
    onIncrease: (productId: number) => void;
    onDecrease: (productId: number) => void;
    chatMessages: { user: string; comment: string; items: string[] }[];
    setChatMessages: React.Dispatch<React.SetStateAction<{ user: string; comment: string; items: string[] }[]>>;
    liveRating: boolean;
  }

// Utility to get random int in range
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example user names and comments
const randomUsers = [
  "Ghansham", "Rahul", "Priya", "Aman", "Simran", "Rohit", "Neha", "Vikas", "Anjali", "Deepak",
  "Sakshi", "Karan", "Megha", "Saurabh", "Divya", "Arjun", "Sneha", "Manish", "Pooja", "Nitin",
  "Shreya", "Aarti", "Kunal", "Isha", "Harsh", "Tanvi", "Siddharth", "Riya", "Abhishek", "Payal",
  "Yash", "Komal", "Aditya", "Swati", "Raj", "Nisha", "Aakash", "Preeti", "Mohit", "Kavya",
  "Sandeep", "Rachit", "Tanya", "Gaurav", "Jatin", "Bhavna", "Akash", "Ritu", "Vipul", "Sonam"
];
const randomComments = [
  "Food slaps! 🔥", "Mid tbh.", "Not worth the hype 😒", "Absolutely bussin'!", "Too spicy for me 😭",
  "Vibes immaculate ✨", "Wouldn't order again.", "10/10, chef's kiss 😘", "Kinda bland ngl.", "So fresh, love it!",
  "Bro, this is next level!", "Disappointed, expected better.", "Portion too small 😤", "Delight in every bite!",
  "Overpriced for what you get.", "Ate it all, no crumbs left!", "Sauce game strong!", "Dry af.", "Super creamy, loved it!",
  "Not my taste, sorry.", "Perfect for a chill night.", "Too oily for me.", "Sweet tooth satisfied!", "Could eat this every day.",
  "Angry at how good this is!", "Waited too long for this 😡", "Presentation on point!", "Just okay, nothing special.",
  "Delighted! Will order again.", "Missing some flavor.", "Crunchy and yum!", "Soggy fries, not cool.", "Paneer was soft af!",
  "Broccoli haters stay away 😂", "Dessert was a banger!", "Zero regrets!", "Wish it was hotter.", "So comforting 🥰",
  "Not enough cheese 😩", "Loved the spice kick!", "Too salty.", "Perfectly balanced flavors.", "Bread was stale.",
  "Felt like home food.", "Gave me food coma!", "A little too sweet.", "Super angry, order was wrong!", "Delighted with the service!",
  "Food was cold, not happy.", "Best meal of the week!", "Just wow 🤩"
];

// Load products from Menu.json (import or require as needed)

const allProducts = menuData.flatMap((cat: any) => cat.products);

const getRandomItems = () => {
  const count = getRandomInt(1, 3);
  const shuffled = allProducts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((p: any) => p.name + ` x${getRandomInt(1, 3)}`);
};

const getRandomMessage = () => ({
  user: randomUsers[getRandomInt(0, randomUsers.length - 1)],
  comment: randomComments[getRandomInt(0, randomComments.length - 1)],
  items: getRandomItems(),
});
  
const CartSidebar: React.FC<CartSidebarProps> = ({orderType, handleSetOrderType, handleCheckOut, cart, cartTotal , onIncrease, onDecrease, chatMessages, setChatMessages,liveRating}) => {
  


  const [chatComment, setChatComment] = useState('');

  const chatBoxRef = useRef<HTMLDivElement>(null);
  const [isUserScrolled, setIsUserScrolled] = useState(false);

  useEffect(() => {
    const chatBox = chatBoxRef.current;
    if (!chatBox) return;
    if (!isUserScrolled) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [chatMessages, isUserScrolled]);

  useEffect(() => {

    setChatMessages(prev => {
      if (prev.length >= MAX_CHAT_MESSAGES) return prev;
      const initialMessages = Array.from({ length: MAX_CHAT_MESSAGES }, getRandomMessage);
      return initialMessages;
    });
  }, []);

  useEffect(() => {
    let timeoutId: any;
    console.log("liveRating", liveRating);
    if (liveRating) {
      const addRandomMessage = () => {
        setChatMessages(prev => {
          const updated = [...prev, getRandomMessage()];
          return updated.slice(-MAX_CHAT_MESSAGES);
        });
        const nextTimeout = getRandomInt(5000, 10000);
        timeoutId = setTimeout(addRandomMessage, nextTimeout);
      };
      addRandomMessage();
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [liveRating]);

  // Get current user's cart items as names
  const currentCartItems = Object.values(cart).map(
    (item) => `${item.product.name} x${item.quantity}`
  );

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatComment.trim()) return;
    setChatMessages(prev => {
      const updated = [...prev, { user: "You", comment: chatComment, items: [...currentCartItems] }];
      return updated.slice(-MAX_CHAT_MESSAGES);
    });
    setChatComment('');
  };
  return(   
  <div className="col-md-2 cart-last">
    <div className="wla-cart-dv" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
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

      {/* Chatbox */}
      <div className="cart-chatbox mt-3" style={{
          background: "#fff",
          border: "1px solid #eee",
          borderRadius: 8,
          padding: 12,
          maxHeight: 450,
          overflowY: "auto"
        }}>
          <h5 style={{ fontSize: 15, marginBottom: 8 }}>Live Comments</h5>
          <div ref={chatBoxRef} style={{ maxHeight: 300, overflowY: "auto", marginBottom: 8 }}>
            {chatMessages.length === 0 && (
              <div style={{ color: "#aaa", fontSize: 13 }}>No comments yet.</div>
            )}
            {chatMessages.map((msg, idx) => (
              <div key={idx} style={{ marginBottom: 10, borderBottom: "1px solid #f0f0f0", paddingBottom: 6 }}>
                <div style={{ fontWeight: 500, fontSize: 13, color: "blue" }}><i className="las la-user-circle"> </i> {msg.user}</div>
                <div style={{ fontSize: 13, color: "#444" }}>{msg.comment}</div>
                {msg.items.length > 0 && (
                  <div style={{ fontSize: 12, color: "#888" }}>
                    <span>Ordered: </span>
                    {msg.items.join(", ")}
                  </div>
                )}
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} style={{ display: "flex", flexDirection: "row", gap: 6 , alignItems: "center", marginBottom:0 }}>
            <textarea
              placeholder="Type your comment..."
              value={chatComment}
              onChange={e => setChatComment(e.target.value)}
              style={{ fontSize: 13, padding: 4, borderRadius: 4, border: "1px solid #ddd", resize: "none" }}
              rows={2}
              required
            />
            <button
              type="submit"
              className="btn btn-sm btn-primary"
              style={{ alignSelf: "center", fontSize: 13, padding: "2px ", borderRadius: 4 }}
            >
              <i className="las la-paper-plane"></i>
            </button>
          </form>
        </div>


    </div>
  </div>
);}

export default CartSidebar;
import { push, ref } from '@firebase/database';
import { Button } from '@material-tailwind/react';
import { useContext, useEffect, useReducer, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { NavLink, useParams } from 'react-router';
import AuthContext from '../../context/AuthContext';
import ProductsDetailsContext from '../../context/ProductsDetailsContext';
import { db } from '../../services/firebase/firebaseServise';
import OrderConfirmPopup from '../popup/OrderConfirmPopup';
const reducer = (state, action) => {
  if (action.type === 'incrementItem') {
    if (state < action.payload) {
      return state + 1;
    } else {
      return (state = action.payload);
    }
  } else if (action.type === 'decrementItem') {
    if (state > 1) {
      return state - 1;
    } else {
      return (state = 1);
    }
  } else {
    return state;
  }
};
const ProductBuyPage = () => {
  const [totalItem, dispatch] = useReducer(reducer, 1);
  const [product, setProduct] = useState(null);
  const [totalOrderPrice, setTotalOrderPrice] = useState(totalItem);
  const { productDetails } = useContext(ProductsDetailsContext);
  const { currentUser, userDetails } = useContext(AuthContext);
  const params = useParams();
  // const [readyOrderProduct, setReadyOrderProduct] = useState({});
  const [isOrderPopup, setIsOrderPopup] = useState(false);
  useEffect(() => {
    const findProduct = productDetails.find((item) => item.id === params.id);
    setProduct(findProduct);
    setTotalOrderPrice(
      findProduct?.withDiscountPrice > 0
        ? findProduct?.withDiscountPrice
        : findProduct?.price
    );
  }, [productDetails, params.id]);

  const handlePopupToggle = () => {
    setIsOrderPopup(false);
  };

  console.log(product?.productOwnerUID);

  const getData = (data) => {
    const submitOrderData = {
      ...data,
      customerImg: userDetails.profileImg,
      productImg: product.productImage,
      productName: product.productName,
      quantity: totalItem,
      customerName: userDetails.name,
      status: 'pending',
      ordered: new Date().toLocaleString(),
      prices: totalOrderPrice * totalItem,
      customerUid: currentUser.uid,
    };
    push(ref(db, `artisanOrders/${product.productOwnerUID}`), submitOrderData);
  };

  const totalAmount = (quantity, price) => {
    return price * quantity;
  };

  return (
    <div>
      {isOrderPopup && (
        <OrderConfirmPopup
          productName={productDetails.productName}
          quantity={totalItem}
          totalPrice={totalAmount(totalItem, totalOrderPrice)}
          onClose={handlePopupToggle}
          getData={getData}
        />
      )}
      {product ? (
        <div className="w-full overflow-hidden grid grid-cols-2 gap-8 px-10 py-6 bg-white relative">
          <div className="avatar-img absolute top-2 left-2 w-10 h-10 rounded-full overflow-hidden">
            {/* product owner image */}
            <img
              className="w-full h-full object-cover object-center"
              src={product.productOwnerImg}
              alt={product.productOwnerName}
            />
          </div>
          <div className="close-button absolute top-3 right-5 cursor-pointer">
            <NavLink to={'/shop'}>
              <IoMdClose />
            </NavLink>
          </div>
          {/* Left side - Product Image */}
          <div className="flex items-center justify-center max-h-[60vh]">
            <img
              src={product.productImage}
              alt={product.productName}
              className="rounded-2xl h-[80%] object-cover"
            />
          </div>

          {/* Right side - Product Info */}
          <div className="flex flex-col justify-between">
            {/* Top - Product Info */}
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-gray-900">
                {product.productName}
              </h2>
              <p className="text-sm text-gray-500">
                By {product.productOwnerName}
              </p>
              <p className="text-sm text-gray-500">
                Type: {product.productType} | Sub: {product.subProductType}
              </p>

              <div className="mt-2">
                {product.withDiscountPrice > 0 ? (
                  <div>
                    <p className="text-gray-400 line-through text-sm">
                      ৳{product.price}
                    </p>
                    <p className="text-green-600 font-semibold text-sm">
                      {product.discount}% Discount
                    </p>
                    <p className="text-xl font-bold text-gray-800">
                      ৳{product.withDiscountPrice}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-900 text-lg">{product.price}৳</p>
                )}
              </div>

              <p>Quantity: {product.quantity}</p>

              <p className="text-sm text-gray-600 mt-2">
                <strong>Short:</strong> {product.shortDescription}
              </p>

              <p className="text-sm text-gray-600">
                <strong>Description:</strong> {product.description}
              </p>
            </div>

            {/* Bottom - Actions */}
            <div className="flex flex-col sm:flex-row items-end justify-between mt-6 gap-6">
              {/* Quantity & Total Price */}
              <div className="flex flex-col items-center justify-center gap-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  Total Price:{' '}
                  <span className="text-green-600">
                    ৳{totalOrderPrice * totalItem}
                  </span>
                </h3>
                <div className="flex items-center gap-0 bg-gray-100 rounded-full shadow">
                  <button
                    onClick={() => dispatch({ type: 'decrementItem' })}
                    disabled={totalItem === 1}
                    className="text-xl select-none font-bold bg-gray-800 text-white hover:bg-gray-700 px-4 py-1 rounded-l-full transition"
                  >
                    −
                  </button>
                  <span className="px-4 py-1 text-base font-semibold text-gray-800 bg-white">
                    {totalItem}
                  </span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'incrementItem',
                        payload: product.quantity,
                      })
                    }
                    className="text-xl select-none font-bold bg-gray-800 text-white hover:bg-gray-700 px-4 py-1 rounded-r-full transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setIsOrderPopup(true)}
                  className="cursor-pointer flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition text-white px-6 py-2 rounded-lg text-sm font-semibold shadow"
                >
                  Order Now
                </button>

                <Button
                  color="gray"
                  className="cursor-pointer flex items-center justify-center gap-2 bg-gray-200 text-gray-800 shadow-none hover:shadow px-6 py-2 text-sm font-medium rounded-lg"
                >
                  <MdOutlineShoppingCart /> Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductBuyPage;

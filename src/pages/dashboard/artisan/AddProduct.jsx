import { Button } from '@material-tailwind/react';
import { push, ref } from 'firebase/database';
import { useContext, useEffect, useState } from 'react';
import InputComponent from '../../../components/ui/InputGroup/InputComponent';
import SelectField from '../../../components/ui/selectGroup/SelectField';
import AuthContext from '../../../context/AuthContext';
import { db } from '../../../services/firebase/firebaseServise';
import skills from '../../../utils/skills';
const initFormValue = {
  productName: '',
  price: '',
  quantity: '',
  deliveryDays: '',
  productImage: '',
  discount: '0',
  description: '',
  shortDescription: '',
  productType: '',
  subProductType: '',
};
const AddProduct = () => {
  const [formValue, setFormValue] = useState({ ...initFormValue });
  const [productTypeState, setProductTypeState] = useState();
  const [subProductTypeState, setSubProductTypeState] = useState(null);
  const { loading, setLoading, currentUser, userDetails } =
    useContext(AuthContext);
  useEffect(() => {
    setProductTypeState(Object.keys(skills));
  }, []);

  const {
    productName,
    price,
    quantity,
    deliveryDays,
    productImage,
    discount,
    description,
    shortDescription,
    productType,
    subProductType,
  } = formValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'productType') {
      const subProduct = Object.keys(skills[value].subSkills);
      setSubProductTypeState(subProduct ?? []);
    }
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const numericPrice = Number(price);
    const numericDiscount = Number(discount);
    const discountPrice =
      numericDiscount > 0
        ? numericPrice - (numericPrice * numericDiscount) / 100
        : 0;

    try {
      await push(ref(db, `products`), {
        productName,
        price: numericPrice,
        quantity: Number(quantity),
        deliveryDays: Number(deliveryDays),
        productImage,
        discount: numericDiscount,
        description,
        shortDescription,
        productType,
        subProductType,
        productOwnerImg: userDetails.profileImg,
        productOwnerName: userDetails.name,
        withDiscountPrice: discountPrice,
        productOwnerUID: currentUser.uid,
      });
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
    setFormValue({ ...initFormValue });
  };

  // product components
  const inputItem = [
    {
      htmlFor: 'productName',
      name: 'productName',
      text: 'Product Name',
      placeholder: 'Enter product name',
      type: 'text',
      value: productName,
    },
    {
      htmlFor: 'price',
      name: 'price',
      text: 'Price',
      placeholder: 'Enter price',
      type: 'number',
      value: price,
    },
    {
      htmlFor: 'quantity',
      name: 'quantity',
      text: 'Quantity',
      placeholder: 'Enter quantity',
      type: 'number',
      value: quantity,
    },
    {
      htmlFor: 'productImage',
      name: 'productImage',
      text: 'Product Image URL',
      placeholder: 'https://image.com',
      type: 'text',
      value: productImage,
    },
    {
      htmlFor: 'deliveryDays',
      name: 'deliveryDays',
      text: 'Estimated Delivery Days',
      placeholder: 'e.g. 5',
      type: 'number',
      value: deliveryDays,
    },
    {
      htmlFor: 'discount',
      name: 'discount',
      text: 'Discount Price %',
      placeholder: '3',
      type: 'number',
      value: discount,
    },
    {
      htmlFor: 'shortDescription',
      name: 'shortDescription',
      text: 'Short Description',
      placeholder: 'It is a Tangaile Shari',
      type: 'text',
      value: shortDescription,
    },
    {
      htmlFor: 'description',
      name: 'description',
      text: 'Description',
      placeholder: 'It is a Tangaile Shari.And It is very expensive!',
      type: 'textarea',
      value: description,
    },
  ];

  const productTypeOptions = productTypeState?.map((item) => ({
    value: item,
    label: skills[item].name,
  }));

  const subProductTypeOptions = subProductTypeState?.map((item) => ({
    label: skills[productType]?.subSkills[item],
    value: item,
  }));
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-zinc-800 mb-6">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit}>
          {inputItem.map((item) => (
            <InputComponent
              key={item.name}
              htmlFor={item.htmlFor}
              name={item.name}
              text={item.text}
              placeholder={item.placeholder}
              type={item.type}
              value={item.value}
              onChange={handleChange}
            />
          ))}

          {/* ✅ Category & Sub-category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-1 text-zinc-700">
                Category
              </label>
              <SelectField
                defaultOpt={'Select Product Type'}
                name={'productType'}
                value={productType}
                options={productTypeOptions}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-zinc-700">
                Sub-category
              </label>
              {/* <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"> */}
              <SelectField
                defaultOpt={'Select Sub Product Type'}
                name={'subProductType'}
                value={subProductType}
                options={subProductTypeOptions}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* ✅ Submit Button */}
          <Button
            type="submit"
            className="w-full py-3 mt-4 rounded-lg bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition"
          >
            {loading ? 'Creating...' : 'Upload'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

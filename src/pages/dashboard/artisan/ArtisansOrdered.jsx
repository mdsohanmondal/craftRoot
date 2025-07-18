import { useContext } from 'react';
import ArtisanOrderCard from '../../../components/productCards/ArtisanOrderCard';
import ArtisanOrderDetailsContext from '../../../context/ArtisanOrderDetailsContext';

const ArtisansOrdered = () => {
  const { products } = useContext(ArtisanOrderDetailsContext);
  return (
    <div className="w-full min-h-screen bg-[#eaeaea] p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((item) => (
          <ArtisanOrderCard key={item.id} items={item} />
        ))}
      </div>
    </div>
  );
};

export default ArtisansOrdered;

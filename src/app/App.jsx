import ArtisanOrderDetailsProvider from '../context/ArtisanOrderDetailsProvider';
import AuthProvider from '../context/AuthProvider';
import ProductsDetailsProvider from '../context/ProductsDetailsProvider';
import Router from '../routes/Router';

const App = () => {
  return (
    <>
      <AuthProvider>
        <ProductsDetailsProvider>
          <ArtisanOrderDetailsProvider>
            <Router />
          </ArtisanOrderDetailsProvider>
        </ProductsDetailsProvider>
      </AuthProvider>
    </>
  );
};

export default App;

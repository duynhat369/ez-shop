import productApi from 'api/productApi';
import { useEffect, useState } from 'react';

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //fetch product by productId clicked
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const product = await productApi.get(productId);
        setProduct(product);
      } catch (error) {
        console.log('Failed to fetch product', error);
      }
      setIsLoading(false);
    })();
  }, [productId]);

  return { product, isLoading };
}

import { useRouter } from 'next/router';
import React from 'react';

// import { Container } from './styles';

const Product: React.FC = () => {
  const { query } = useRouter();

  return <div>teste{JSON.stringify(query)}</div>;
};

export default Product;

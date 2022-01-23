import { useState, useEffect } from 'react';
import paginate from './paginate';
import { IFollower } from './App';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};

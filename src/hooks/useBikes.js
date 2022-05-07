import { useEffect, useState } from "react";

const useBikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const url = `https://limitless-mountain-78144.herokuapp.com/bike`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return [bikes, setBikes];
};

export default useBikes;

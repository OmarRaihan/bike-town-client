import { useEffect, useState } from "react";

const useBikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const url = `http://localhost:7000/bike`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return [bikes, setBikes];
};

export default useBikes;

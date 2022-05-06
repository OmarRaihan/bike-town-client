import { useEffect, useState } from "react";

const useBikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {

    fetch("http://localhost:7000/bike")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return [bikes, setBikes];
};

export default useBikes;

import React, { useEffect, useState } from "react";

const withLoader = (Element, url) => {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const getData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      };

      getData();
    }, []);

    if (!data) {
      return <div className="animate-pulse text-xl text-black">Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
};

export default withLoader;

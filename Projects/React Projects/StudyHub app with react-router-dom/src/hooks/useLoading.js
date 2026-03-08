import React, { useEffect } from "react";

function useLoading(delay = 500) {
  const [loading, setLoading] = React.useState(false);
  // Show loading...
  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => {
      setLoading(false);
    }, delay);
    return function () {
      clearTimeout(timer);
    };
  }, [delay]);

  return loading;
}

export default useLoading;

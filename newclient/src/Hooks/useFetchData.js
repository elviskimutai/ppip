import React from "react";

const useFetchData = (url) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": window.sessionStorage.getItem("xtoken"),
      },
    })
      .then((res) => res.json())
      .then((Data) => {
        if (Data.length > 0) {
          setResponse(Data);
          setIsLoading(true);
        } else {
          setResponse(Data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError(error);
      });
  }, []);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await fetch(url, options);
  //       const json = await res.json();
  //       setResponse(json);
  //       setIsLoading(false)
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return { response, error, isLoading };
};

export default useFetchData;

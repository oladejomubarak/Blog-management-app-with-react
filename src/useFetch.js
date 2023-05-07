import { useEffect, useState } from "react";
const useFetch = (url) =>{

  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      fetch(url).then(res =>{
        if(!res.ok){
          throw Error("Can't fetch data");
        }
 return res.json();
}).then(fetchedData =>{
  setData(fetchedData);
  setPending(false);
  setError(null)
}).catch(err =>{
  setPending(false);
  setError(err.message);
})

    }, 1000)
  }, [url])

  return {data, isPending, error}
}
export default useFetch;
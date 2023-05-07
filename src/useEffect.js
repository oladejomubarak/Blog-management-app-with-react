
const useEffect = () =>{

  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      fetch("http://localhost:8000/blogs").then(res =>{
        if(!res.ok){
          throw Error("Can't fetch data");
        }
 return res.json();
}).then(data=>{
  setData(data);
  setPending(false);
  setError(null)
}).catch(err =>{
  setPending(false);
  setError(err.message);
})

    }, 1000)
  }, [])

  return {data, isPending, error}
}
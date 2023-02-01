import {useEffect,useState} from 'react';



export const fetch = () => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        if(!res.ok) {
          throw{
            err:true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText

          }
        }
let data = await res.json();
        setIsPending(false);
        setData(data)
        setError({err:false});

      } catch (err) {
       setIsPending(true);
        setError(true)
      }
    }

getData(url)
  }, [url])
return {data, isPending, error}
}

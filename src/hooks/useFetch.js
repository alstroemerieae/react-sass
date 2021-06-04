import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      // Return a promise
      .then(response => {
        // Response object
        // console.log(response)
        if(!response.ok) {
          throw Error('Could not fetch the data for that resource')
        }
        // Returning this will make this return another promise, which will be used in the .then below
        return response.json()
      })
      // This data below isn't the same as the one from the useState hook, it's a local version, so it doesn't matter if the names clash
      .then(data => {
        // console.log(data);
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        // If the error is equal to AbortError then don't update the state
        if(err.name === 'AbortError') {
          console.log("Fetch aborted")
        }
        // Otherwise, update the state (setIsLoading, setError)
        else {
          // console.log(err.message);
          setIsLoading(false);
          setError(err.message);
        }
      })
  }, [url]);

  return{ data, isLoading, error}
}

export default useFetch;
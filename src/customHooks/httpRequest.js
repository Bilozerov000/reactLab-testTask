import { useState, useEffect } from 'react'

const URL =
  'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'

export default function useFetch() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
        throw err
      })
  }, [])

  return [data, setData, loading, error]
}

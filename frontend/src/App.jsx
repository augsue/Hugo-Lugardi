import {useState, useEffect} from 'react'

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [status, setStatus] = useState('')

  useEffect(() => {
    fetch(`${API_URL}/`)
    .then(res => res.json())
    .then(data => setStatus(data.status))
    .catch(() => setStatus('Erro ao conectar'))
  }, [])

  return <div>Status: {status}</div>

}

export default App
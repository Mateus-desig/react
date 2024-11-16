import { useState } from "react"

function App() {

  const [msg, setMessage] = useState('Olá mundo!')

  return <div>
    <h1>{msg}</h1>
    <button onClick={() => {
      
      setMessage('Boa noite mundo') 

    }}>Mudar Mensagem</button>
  </div>

}

export default App
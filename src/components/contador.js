import React, {useState} from 'react'

export default function Contador() {
  const initialValue = 0;
  const [contador, setContador] = useState(initialValue);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const reiniciar = () => setContador(initialValue);

  return (
    <div className='contador'>
      <h1>Contador dinámico</h1>
      <p>El contador vale: {contador}</p>
      <div className='contenedorBotones'>
        <button className='btn' onClick={incrementar}>Incrementar</button>
        <button className='btn' onClick={decrementar}>Decrementar</button>
        <button className='btn' onClick={reiniciar}>Reiniciar</button>
      </div>
    </div>
  )
}

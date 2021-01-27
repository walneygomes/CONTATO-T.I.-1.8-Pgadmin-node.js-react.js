import './App.css';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
function App() {
  const [comentarios, setComentarios] = useState([]);

 
 
  useEffect(() => {
    axios.get('http://192.168.1.254:3100/comentarios').then(response => {
       console.log(response.data);
       setComentarios(response.data);

    })
}, []);
console.log(comentarios[0])
 
  return (
    <div className="App">
                      < img  src = "https://i.pinimg.com/originals/48/be/ee/48beeee39f667deb22649a41d8c66b54.png" />
                      <h1> CONTATO TI </h1>

      <header className="App-header">

    <div class="conteudo">

      <div className="form-container sign-in-container">
		<form action="#">
			
			<h3>Seu nome</h3>
			<input type="Nome" placeholder="Nome" />
			
      <h3>Seu comentario</h3>
			<textarea cols="40">Escreva aqui seu  comentário .</textarea>
      <button class="button1" >ENVIAR  </button>




		</form>

    


	</div>
        
        </div>
       
    
      </header>
      <div className="comenta" background-color="#f3f3" ><b>COMENTARIOS</b></div>
         {
       }
    
    <table border="2" width="100%" border="6" cellspacing="10" cellpadding="4" bgcolor=" #d3d3d3">
    <tr>
        <th>Nome</th>
        <th>Comentario</th>
    
    </tr>
    {comentarios.map(comentario =><tr width="10%" border="1" cellspacing="0" cellpadding="4">
        <td >{comentario.nome}</td>
        <td>{comentario.productname}</td>
       
    </tr> )
    }
</table>
       
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const RegistroForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');


  return (
    
    <form>
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <br/>
      

      <label>Apellido:</label>
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <br/>

      <label>Correo Electrónico:</label>
      <input
        type="email"
        value={correoElectronico}
        onChange={(e) => setCorreoElectronico(e.target.value)}
      />
      <br/>

      <label>Teléfono:</label>
      <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      <br/>

      <label>Contraseña:</label>
      <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      <br/>

      <label>Confirmar Contraseña:</label>
      <input
        type="password"
        value={confirmarContrasena}
        onChange={(e) => setConfirmarContrasena(e.target.value)}
      />
      <br/>

      <button type="submit">Registrar</button>
    </form>
    
  );
};

export default RegistroForm;
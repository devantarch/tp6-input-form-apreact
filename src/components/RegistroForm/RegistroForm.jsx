import { useState } from 'react';

const RegistroForm = () => {

    const initialState = {
        nombre: '',
        apellido: '',
        correoElectronico: '',
        telefono: '',
        contrasena: '',
        confirmarContrasena: '',
    };

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [formularioEnviado, setFormularioEnviado] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !correoElectronico || !telefono || !contrasena || !confirmarContrasena) {
            alert('Por favor, complete todos los campos.');
            return;
        }

       if (contrasena !== confirmarContrasena) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        setFormularioEnviado(true);

        setNombre(initialState.nombre);
        setApellido(initialState.apellido);
        setCorreoElectronico(initialState.correoElectronico);
        setTelefono(initialState.telefono);
        setContrasena(initialState.contrasena);
        setConfirmarContrasena(initialState.confirmarContrasena);
    };

    return (
        <div className='registro-form-container'>
           <form className='formulario' onSubmit={handleSubmit}>
                <h1 className='title'> Formulario </h1>

                <label> <p className='titulos-label'>Nombre:</p></label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <br />

                <label><p className='titulos-label'>Apellido:</p></label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                <br />

                <label><p className='titulos-label'>Correo Electrónico:</p></label>
                <input
                    type="email"
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                />
                <br />

                <label><p className='titulos-label'>Teléfono:</p></label>
                <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                <br />

                <label><p className='titulos-label'>Contraseña:</p></label>
                <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                <br />

                <label><p className='titulos-label'>Confirmar Contraseña: </p></label>
                <input
                    type="password"
                    value={confirmarContrasena}
                    onChange={(e) => setConfirmarContrasena(e.target.value)}
                />
                <br />

                <button className= 'btn' type="submit">Enviar</button>
           {formularioEnviado && 
                <p className='enviado'>Registro enviado. ¡Gracias!</p>
            } </form>
        </div>
    );
};

export default RegistroForm;
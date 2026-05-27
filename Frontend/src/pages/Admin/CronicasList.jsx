import { useLocation } from 'react-router-dom';

function CronicasList() {

    const location = useLocation();

    const esEditar = location.pathname.includes('editar');
    const esEliminar = location.pathname.includes('eliminar');

    const cronicasAdmin = [
        {
            id: 1,
            titulo: "Primera noticia",
            autor: "Brandon OG",
            fecha: "2026-05-05"
        },
        {
            id: 2,
            titulo: "Segunda noticia",
            autor: "Naty Pelusa",
            fecha: "2024-12-09"
        },
        {
            id: 3,
            titulo: "Tercera Noticia",
            autor: "Robert Fripp",
            fecha: "1997-08-21"
        },
    ];

    return (
        <div className="admin-container">
            <h2>Listado de cronicas</h2>

            {cronicasAdmin.map((cronicas) => (
                <div key={cronicas.id}>
                    <p>{cronicas.titulo}</p>
                    <p>{cronicas.autor}</p>
                    <p>{cronicas.fecha}</p>

                    {esEditar && <button>Editar</button>}
                    {esEliminar && <button>Eliminar</button>}
                </div>
            ))}
        </div>
    );
}

export default CronicasList;
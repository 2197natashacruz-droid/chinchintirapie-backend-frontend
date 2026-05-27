import { useLocation } from 'react-router-dom';

function NoticiasList() {

    const location = useLocation();

    const esEditar = location.pathname.includes('editar');

    const noticiasAdmin = [
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
            <h2>Listado de noticias</h2>

            {noticiasAdmin.map((noticia) => (
                <div key={noticia.id} style={{ marginBottom: '20px' }}>
                    <p>{noticia.titulo}</p>
                    <p>{noticia.autor}</p>
                    <p>{noticia.fecha}</p>

                    {esEditar && (
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                            <button className="btn btn-primary">
                                Editar
                            </button>

                            <button className="btn btn-primary">
                                Eliminar
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default NoticiasList;
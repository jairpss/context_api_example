import React, {useState} from 'react';

//Creamos contexto = estado global
const ContextoTema = React.createContext();

const ProveedorTema = ({children}) => {
    const [tema, cambiarTema] = useState(
        {
            alineado: 'left',
            fuente: 20
        }
    );

    const aumentarFuente = () => cambiarTema({...tema, fuente: tema.fuente + 1});
    const disminuirFuente = () => cambiarTema({...tema, fuente: tema.fuente - 1});

    const alinearIzq = () => cambiarTema({...tema, alineado: 'left'});
    const alinearCentro = () => cambiarTema({...tema, alineado: 'center'});
    const alinearDerecha = () => cambiarTema({...tema, alineado: 'right'});

    return(
        <ContextoTema.Provider value={{tema, aumentarFuente, disminuirFuente, alinearIzq, alinearCentro, alinearDerecha}}>
            {children}
        </ContextoTema.Provider>
    );
}

export {ContextoTema, ProveedorTema};
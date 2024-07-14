import Cabecalho from "componentes/Cabecalho";
import Container from "componentes/Container";
import FavoritosProvider from "componentes/Contextos/Favoritos";
import Rodape from "componentes/Rodape";


import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
                </FavoritosProvider>
            <Rodape/>
        </main>
    )
}

export default PaginaBase;

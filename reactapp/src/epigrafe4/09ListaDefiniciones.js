import {Fragment} from "react";

function ListaDefiniciones({terminos}) {
  return (
    <dl>
      {
      terminos.map( ({id, descripcion}) => (
        <Fragment key={id}>
          <dt>{id}</dt>
          <dd>{descripcion}</dd>
        </Fragment>
      ))
    }
    </dl>
  );
}

export default ListaDefiniciones;
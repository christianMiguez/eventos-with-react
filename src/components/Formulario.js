import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

  nombreEventoRef = React.createRef();
  categoriaEventoRef = React.createRef();

  buscarEvento = (e) => {
    e.preventDefault();

    const datosBusqueda = {
      nombre: this.nombreEventoRef.current.value,
      categoria: this.categoriaEventoRef.current.value
    }

    this.props.obtenerEventos(datosBusqueda)

  }

  mostrarOpciones = (key) => {
    const categoria = this.props.categorias[key];
    const {id, name_localized} = categoria;
    if(!id || !name_localized) return null
    return (
      <option key={key} value={id}>{name_localized}</option>
    )
  }



  render() {

    const categorias = Object.keys(this.props.categorias);
    return (
      <form onSubmit={this.buscarEvento}>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por nombre o categoría
          </legend>

          <div className="uk-column-1-3@m uk-margin">
            <div className="uk-margin" uk-margin="true">
              <input ref={this.nombreEventoRef} type="text" placeholder="Nombre de Evento o Ciudad" className="uk-input"/>
            </div>

            <div className="uk-margin" uk-margin="true">
              <select className="uk-select" ref={this.categoriaEventoRef}>
                {categorias.map(this.mostrarOpciones)}
              </select>
            </div>

            <div className="uk-margin" uk-margin="true">
              <button className="uk-button uk-button-danger">Buscar</button>
            </div>
          </div>


        </fieldset>

      </form>
     );
  }
}

Formulario.propTypes = {
  obtenerEventos: PropTypes.func.isRequired,
  categorias: PropTypes.array.isRequired
}

export default Formulario;

import React from 'react';
function EstudiantesList(props) {
  return (
    <article className="card">
      <img className="card__img" src={props.img} />
      <p className="card__id">ID: {props.id}</p>
      <p className="card__name">name: {props.name}</p>
      <p className="card__group">Group: {props.group}</p>
    </article>
  );
}

export default EstudiantesList;

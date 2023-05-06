import React from 'react';
import './style.css';
import EstudiantesList from './components/EstudiantesList/EstudiantesList';

const estudiantes = [
  {
    img: 'https://laverdadnoticias.com/__export/1601390084754/sites/laverdad/img/2020/09/29/naruto_principales_oponentes_enfrentados_por_itachi_uchiha_.jpg_1315959808.jpg',
    id: 1,
    name: 'Itachi Uchiha',
    group: 24,
  },
  {
    img: 'https://i.blogs.es/bc1dd2/naruto/1366_2000.png',
    id: 2,
    name: 'Naruto Uzumaki',
    group: 32,
  },
  {
    img: 'https://4kwallpapers.com/images/wallpapers/sasuke-uchiha-2880x1800-10831.jpg',
    id: 3,
    name: 'Sasuke Uchiha',
    group: 32,
  },
  {
    img: 'https://codigoespagueti.com/wp-content/uploads/2022/07/Naruto-Por-que-Kakashi-no-puede-desactivar-su-Sharingan.jpg',
    id: 4,
    name: 'Kakashi Hatake',
    group: 20,
  },
];

function App() {
  return (
    <main>
      {estudiantes.map((estudiantes) => {
        const { img, id, name, group } = estudiantes;
        return <EstudiantesList img={img} id={id} name={name} group={group} />;
      })}
    </main>
  );
}
export default App;

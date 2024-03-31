import React from "react";
import Header from "../../components/Header/Header"; // Asegúrate de ajustar la ruta de importación según sea necesario

// Este es un ejemplo de cómo podrías estructurar tu página Home
const Home: React.FC = () => {
  return (
    <div>
      <Header favoritesCount={5} />
      {/* Ajusta el conteo de favoritos según sea necesario */}
      {/* Aquí puedes agregar más contenido a tu página Home */}
      <main>
        <h1>Bienvenido a la página de inicio</h1>
        {/* Agrega más contenido aquí como secciones, imágenes, etc. */}
      </main>
    </div>
  );
};

export default Home;

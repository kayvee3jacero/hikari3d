
import { useState } from "react";


const productos = [
  {
    id: 1,
    nombre: "Aros de One piece",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de logo de one piece",
    imagen: "/Aros/aros1.jpg",
    imagenes: [
      "/Aros/aros1.jpg",
      "/Aros/aros2.jpg"
    ]
  },
  {
    id: 2,
    nombre: "Aros de Plataforma 9 3/4",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de plataforma 9 3/4",
    imagen: "/Aros/aros2.jpg"
  },
  {
    id: 3,
    nombre: "Aros de Logo Baby Metal",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de logo de baby metal",
    imagen: "/Aros/aros3.jpg"
  },
  {
    id: 4,
    nombre: "Aros Wayfinder",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de Kingdom hearts wayfinder",
    imagen: "/Aros/aros4.jpg"
  },
  {
    id: 5,
    nombre: "Aros de Jack Skellington",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros del extraño mundo de Jack",
    imagen: "/Aros/aros5.jpg"
  },
  {
    id: 6,
    nombre: "Aros de Tairn y Adarna",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de Alas de Sangre",
    imagen: "/Aros/aros6.jpg"
  },
  {
    id: 7,
    nombre: "Aros de Tairn y Adarna juntos",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de Alas de Sangre",
    imagen: "/Aros/aros7.jpg"
  },
  {
    id: 8,
    nombre: "Aros de Tanjiro Kamado",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de Kimetsu no Yaiba",
    imagen: "/Aros/aros8.jpg"
  },
  {
    id: 9,
    nombre: "Set Aros y llavero Baby Metal",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros y llavero de Baby Metal",
    imagen: "/Aros/setaros1.jpg"
  },
  {
    id: 10,
    nombre: "Set Aros y llavero de One piece",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros y llavero de One piece",
    imagen: "/Aros/setaros2.jpg"
  },
  {
    id: 11,
    nombre: "Set Aros y llavero de Sombrero de Luffy",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros y llavero de One piece",
    imagen: "/Aros/setaros3.jpg"
  },
  {
    id: 12,
    nombre: "LLavero Gorillaz",
    categoria: "Geek",
    precio: 3000,
    descripcion: "LLavero de Gorillaz",
    imagen: "/Llaveros/llavero1.jpg"
  },
  {
    id: 13,
    nombre: "Aros de Plataforma 9 3/4",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de plataforma 9 3/4",
    imagen: "/Aros/aros2.jpg"
  },
  {
    id: 14,
    nombre: "Aros de Logo Baby Metal",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de logo de baby metal",
    imagen: "/Aros/aros3.jpg"
  },
  {
    id: 15,
    nombre: "Aros Wayfinder",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de Kingdom hearts wayfinder",
    imagen: "/Aros/aros4.jpg"
  },
  {
    id: 16,
    nombre: "Aros de Jack Skellington",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros del extraño mundo de Jack",
    imagen: "/Aros/aros5.jpg"
  },
  {
    id: 17,
    nombre: "Aros de Tairn y Adarna",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de Alas de Sangre",
    imagen: "/Aros/aros6.jpg"
  },
  {
    id: 18,
    nombre: "Aros de Tairn y Adarna juntos",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de Alas de Sangre",
    imagen: "/Aros/aros7.jpg"
  },
  {
    id: 19,
    nombre: "Aros de Tanjiro Kamado",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros de Kimetsu no Yaiba",
    imagen: "/Aros/aros8.jpg"
  },
  {
    id: 20,
    nombre: "Set Aros y llavero Baby Metal",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros y llavero de Baby Metal",
    imagen: "/Aros/setaros1.jpg"
  },
  {
    id: 21,
    nombre: "Set Aros y llavero de One piece",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros y llavero de One piece",
    imagen: "/Aros/setaros2.jpg"
  },
  {
    id: 22,
    nombre: "Set Aros y llavero de Sombrero de Luffy",
    categoria: "Geek",
    precio: 3000,
    descripcion: "Aros y llavero de One piece",
    imagen: "/Aros/setaros3.jpg"
  }
];


const categorias = ["Todos", "Geek","Funcional", "Otros"];

const formatoPrecio = (precio) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(precio);

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [indiceImagen, setIndiceImagen] = useState(0);

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaActiva === "Todos" ||
      producto.categoria === categoriaActiva;

    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

 const cambiarImagen = (direccion) => {
  if (!imagenAmpliada) return;

  const imagenes = imagenAmpliada.imagenes || [
    imagenAmpliada.imagen
  ];

  const nuevoIndice =
    (indiceImagen + direccion + imagenes.length) %
    imagenes.length;

  setIndiceImagen(nuevoIndice);
};

  const whatsappNumber = "56978192670";

  return (
    <div className="app">
      <header className="navbar">
        <a href="#inicio">
          <img
            src="/Hikari3dstorelogo.png"
            alt="Hikari 3D"
            className="logo-image"
          />
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">Sobre nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">

  <img
    src="/hikari-logo.jpeg"
    alt="Hikari 3D"
    className="hero-background-logo"
  />

  <p className="eyebrow">IMPRESIÓN 3D · HIKARI 3D</p>

  <h1>
    Pequeñas ideas,
    <br />
    <span>grandes creaciones.</span>
  </h1>

  <p className="hero-description">
    Descubre accesorios, decoración y productos
    inspirados en el mundo geek y la vida cotidiana.
  </p>

  <a className="main-button" href="#catalogo">
    Explorar catálogo
  </a>

</section>

        <section className="catalog" id="catalogo">
          <p className="eyebrow">DESCUBRE HIKARI 3D</p>
          <h2>Nuestro catálogo</h2>
          <p>Encuentra algo especial para ti.</p>

          <input
            className="search-input"
            type="search"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          <div className="category-filters">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={
                  categoriaActiva === categoria
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setCategoriaActiva(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>

          <div className="product-grid">
  {productosFiltrados.map((producto) => (
    <article className="product-card" key={producto.id}>
      <img
        className="product-photo"
        src={producto.imagen}
        alt={producto.nombre}
        loading="lazy"
        onClick={() => {
  setImagenAmpliada(producto);
  setIndiceImagen(0);
}}
      />

                <span className="product-category">
                  {producto.categoria}
                </span>

                <h3>{producto.nombre}</h3>

                <p>{producto.descripcion}</p>

                <strong className="product-price">
                  {formatoPrecio(producto.precio)}
                </strong>

                {whatsappNumber && (
                <a
                className="product-button"
                 href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `¡Hola! Me interesa el producto "${producto.nombre}" que vi en Hikari 3D. ¿Está disponible?`
                 )}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                 Consultar producto
                 </a>
                )}
              </article>
            ))}
          </div>

          {productosFiltrados.length === 0 && (
            <div className="empty-catalog">
              <h3>
                {productos.length === 0
                  ? "¡Próximamente nuevos productos!"
                  : "No encontramos productos."}
              </h3>
              <p>
                {productos.length === 0
                  ? "Estamos preparando nuestro catálogo Hikari 3D."
                  : "Prueba con otra categoría o búsqueda."}
              </p>
            </div>
          )}
        </section>

        <section className="about" id="nosotros">
          <h2>Bienvenido al mundo Hikari 3D</h2>
          <p>
            Acercamos el mundo geek y la creatividad de la impresión 3D a tu día a día, 
            con accesorios, decoración y productos funcionales para todos los gustos.
          </p>

          <p>

            Somos de Chile y realizamos entrega en Rancagua y alrededores, además de envíos a todo el país.
          </p>
          
        </section>

        
<section id="contacto" className="contact">
  <h2>¡Hablemos!</h2>
  <p className="contact-description">
    ¿Te gustó alguno de nuestros productos?
    Escríbenos y conversemos.
  </p>

  <div className="contact-links">
    <a
      className="contact-button instagram-button"
      href="https://www.instagram.com/hikari3d_store/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/Instagramlogo.png"
        alt="Instagram"
        className="contact-icon"
      />
      <span>
        <strong>Instagram</strong>
        <small>@hikari3d_store</small>
      </span>
    </a>

    <a
      className="contact-button whatsapp-button"
      href="https://wa.me/56978192670?text=Hola%21%20Quisiera%20consultar%20por%20sus%20productos."
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/whatsapplogo.png"
        alt="WhatsApp"
        className="contact-icon"
      />
      <span>
        <strong>WhatsApp</strong>
        <small>Escríbenos directamente</small>
      </span>
    </a>
  </div>
</section>
      </main>

      {imagenAmpliada && (
  <div
    className="image-modal"
    onClick={() => setImagenAmpliada(null)}
  >
    <button
      className="image-modal-close"
      onClick={() => setImagenAmpliada(null)}
      aria-label="Cerrar imagen"
    >
      ×
    </button>

    <button
      className="image-modal-nav prev"
      onClick={(e) => {
        e.stopPropagation();
        cambiarImagen(-1);
      }}
      aria-label="Producto anterior"
    >
      ❮
    </button>

   <img
  src={
    (imagenAmpliada.imagenes || [imagenAmpliada.imagen])[indiceImagen]
  }
  alt={imagenAmpliada.nombre}
  className="image-modal-photo"
  onClick={(e) => e.stopPropagation()}
/>

    <button
      className="image-modal-nav next"
      onClick={(e) => {
        e.stopPropagation();
        cambiarImagen(1);
      }}
      aria-label="Producto siguiente"
    >
      ❯
    </button>

    <p>{imagenAmpliada.nombre}</p>
  </div>
)}

      <footer>
        <p>© 2026 Hikari 3D · Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

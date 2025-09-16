// === Año en el footer ===
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// === Menú hamburguesa ===
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
  });
}

// === Datos (puedes editar el texto a tu gusto) ===

const MAPS = {
  hab: {
    H1: 'Lenguajes y Desarrollo Web: Manejo sólido de HTML5, CSS3 y JavaScript para la construcción de interfaces responsivas, accesibles y funcionales. Experiencia inicial con React para crear componentes reutilizables y modernos, y dominio de buenas prácticas de maquetación para asegurar compatibilidad en distintos dispositivos y navegadores.',
    H2: 'Bases de Datos y Backend: Conocimiento en diseño y modelado de bases de datos relacionales. Experiencia con MySQL y SQL Server para estructuración de datos, creación de consultas optimizadas y procedimientos almacenados. Manejo de Node.js para construir servicios backend y APIs REST que conecten las aplicaciones con las bases de datos.',
    H3: 'Business Intelligence y Data Analytics: Desarrollo de procesos ETL con SSIS/SSDT para integrar, transformar y cargar datos de múltiples fuentes. Elaboración de dashboards y reportes interactivos en Power BI para dar soporte a la toma de decisiones estratégicas. Capacidad para identificar patrones y generar insights a partir de datos complejos, Uso y administración de Jira servisce desk y service Management.',
    H4: 'Gestión de Proyectos: Aplicación de metodologías ágiles como Scrum y Kanban en proyectos académicos y de práctica profesional. Experiencia en la definición de alcance, cronogramas y gestión de entregables. Habilidad para coordinar tareas en equipo, gestionar la comunicación y asegurar la calidad en los resultados.',
    H5: 'Calidad de Software: Conocimiento de normas ISO/IEC 25010, 12207 y 14764 para la evaluación de calidad, mantenimiento y mejora continua del software. Enfoque en pruebas funcionales, corrección de errores y aseguramiento de la satisfacción del usuario final mediante estándares reconocidos internacionalmente.',
    H6: 'Soft Skills: Competencias interpersonales clave como liderazgo, comunicación efectiva, trabajo en equipo y adaptabilidad. Capacidad para resolver problemas bajo presión, organizar prioridades y fomentar un ambiente de colaboración. Habilidad para aprender de manera autónoma y mantenerse en constante actualización tecnológica.'
  },
  logro: {
    l1: 'Título Técnico Profesional: Titulada en Enero del 2024 como Analista Programador de Inacap sede Renca',
    l2: 'Certificaciones: Certificación en  Desarrollo FullStack, Soporte Computacional, Diseño y Gestión de Bases de Datos emitidos por INACAP. Certificados  en TI ESCENCIAL y TI ESCENCIAL2 emitidos por CISCO. Cerificado Google Workspace Administator, emitido por Google.',
    l3: 'Proyectos Destacados y Premios: Seleccionada Nacional  en Hackaton Nasa Space 2023 con Proyecto relacionado con la predicción de incendios forestales, como líder de uno de los grupos representando  a INACAP.',
    l4: 'Labor Social y Líderazgo: Presidenta de comité de vivienda Aía¿da Gonzalez, que resultó en otorgar viviendas sociales a 214 personas de escasos recursos, Dirigenta y cradora del Club deportivo, social y cultural Los Diamantes,  realizando un trabajo especial al alejar a los niños entre los 5 y 17 años de la delincuencia y las drogas  administrando  y gestionando oportunidades de  Arte, Lectura y Deporte. Delegada Estudiantil durante 2023 y 2024 procurando una correcta representación de la sección, Actualmente Dirigenta de Junta de Vecinos, fomentando  proyectos de seguridad comunitaria.'
  },
  gusto: {
    g1: 'Lectura:  Disfruto mucho de la Lectura,  en especial los generos de ciencia ficción, fantasía y romance, si lo mezcla todo, mucho mejor, mi saga de libros favoritos se llama "Cronicas Lunares"  es una mezcla de cuentos clásicos, como Blancanieves, Cenicienta y Caperucita Roja en una versión interplanetaria, que incluye robots, androides, seres mutados y naves espaciales.',
    g3: 'Pintura:  Pinto desde los 13 años,  principalmente con oleo,  el dibujo y la pintura son parte importante de mi vida',
    g4: 'Juegos de Rol: Desde mi adolescencia soy fanatica de los juegos de rol como Calabozos y Dragones, Vampiros la Mascarada o Tierra media,  principalmente en mesa,  sin embargo el rol en vivo  es una de las mejores cosas de ver, de un momento a otro pasas de ser un oficinista a ser un mago nivel 10 en medio de una cruzada para rescatar a tu pueblo de un dragón que se oculta en las cabernas bajo el pueblo.'
  }
};


// === Modal (común para habilidades, logros y gustos) ===
(function initModals(){
  const modal = document.getElementById('modal');
  if (!modal) return; // si la página no tiene modal, no hacemos nada

  const body = document.getElementById('modal-body');
  const title = document.getElementById('modal-title');
  const closeBtn = document.getElementById('modal-close');
  const backdrop = document.getElementById('modal-backdrop');

  const openModal = (texto, titulo='Detalle') => {
    if (title) title.textContent = titulo;
    if (body) body.textContent = texto;
    modal.classList.add('open');
  };
  const closeModal = () => modal.classList.remove('open');

  closeBtn && closeBtn.addEventListener('click', closeModal);
  backdrop && backdrop.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

  // Un solo listener para todos los tipos de botón:
  document.querySelectorAll('[data-hab], [data-logro], [data-gusto]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.hab || btn.dataset.logro || btn.dataset.gusto;
      const type = btn.dataset.hab ? 'hab' : (btn.dataset.logro ? 'logro' : 'gusto');
      const titulo = type === 'hab' ? 'Habilidad' : (type === 'logro' ? 'Logro' : 'Gusto');
      const texto = (MAPS[type] && MAPS[type][id]) ? MAPS[type][id] : 'Sin descripción.';
      openModal(texto, titulo);
    });
  });
})();

// === Formulario de contacto (index.html) ===
(function initContactForm(){
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    // Mensaje requerido para el usuario
    if (status) {
      status.textContent = 'Sus datos han sido enviados, Daniela se pondrá en contacto con usted a la brevedad';
    }

    // Opción 1: EmailJS (comenta/activa si lo configuras)
    /*
    try {
      await emailjs.send('service_xxx', 'template_xxx', {
        nombre: data.nombre,
        telefono: data.telefono,
        correo: data.correo,
        destino: 'daniela.escobar14@inacapmail.cl'
      });
      console.log('EmailJS: enviado');
    } catch (err) {
      console.error('EmailJS error', err);
    }
    */

    // Opción 2: mailto de respaldo
    const asunto = encodeURIComponent('Nuevo contacto desde la landing');
    const cuerpo = encodeURIComponent(`Nombre: ${data.nombre}\nTeléfono: ${data.telefono}\nCorreo: ${data.correo}`);
    window.location.href = `mailto:daniela.escobar14@inacapmail.cl?subject=${asunto}&body=${cuerpo}`;

    form.reset();
  });
})();

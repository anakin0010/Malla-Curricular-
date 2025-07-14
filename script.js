// script.js
const cursos = [
  { nombre: "Introducción al Derecho", prerequisitos: [] },
  { nombre: "Teoría del Estado", prerequisitos: [] },
  { nombre: "Teoría de la Constitución", prerequisitos: ["Teoría del Estado"] },
  { nombre: "Personas", prerequisitos: [] },
  { nombre: "Derecho Romano", prerequisitos: [] },
  { nombre: "Expresión Oral y Escrita", prerequisitos: [] },
  { nombre: "Libre Elección I", prerequisitos: [] },
  { nombre: "Libre Elección II", prerequisitos: [] },
  { nombre: "Cátedra Institucional Ciencia y Libertad", prerequisitos: [] },
  { nombre: "Análisis del Discurso y Argumentación Jurídica", prerequisitos: [] },
  { nombre: "Dogmática Constitucional", prerequisitos: ["Teoría de la Constitución"] },
  { nombre: "Bienes I: Derechos Patrimoniales", prerequisitos: [] },
  { nombre: "Bienes II: Modos de Adquirir", prerequisitos: ["Bienes I: Derechos Patrimoniales"] },
  { nombre: "Metodologías Activas para la Comprensión de Problemas", prerequisitos: [] },
  { nombre: "Legaltech", prerequisitos: ["Metodologías Activas para la Comprensión de Problemas"] },
  { nombre: "Fundamentos Del Derecho Penal", prerequisitos: [] },
  { nombre: "Teoría del Delito", prerequisitos: ["Fundamentos Del Derecho Penal"] },
  { nombre: "Teoría de las Relaciones del Trabajo", prerequisitos: [] },
  { nombre: "Derecho Laboral", prerequisitos: ["Teoría de las Relaciones del Trabajo"] },
  { nombre: "Hermenéutica Jurídica", prerequisitos: [] },
  { nombre: "Orgánica Constitucional", prerequisitos: ["Dogmática Constitucional"] },
  { nombre: "Teoría del Negocio Jurídico", prerequisitos: ["Bienes II: Modos de Adquirir"] },
  { nombre: "Seguridad Social", prerequisitos: ["Derecho Laboral"] },
  { nombre: "Derecho Penal Especial", prerequisitos: ["Teoría del Delito"] },
  { nombre: "Filosofía del Derecho", prerequisitos: [] },
  { nombre: "Teoría del Derecho Administrativo", prerequisitos: ["Orgánica Constitucional"] },
  { nombre: "Hacienda Pública", prerequisitos: [] },
  { nombre: "Teoría de las Obligaciones", prerequisitos: ["Teoría del Negocio Jurídico"] },
  { nombre: "Contratos Civiles", prerequisitos: ["Teoría de las Obligaciones"] },
  { nombre: "Contratos Comerciales", prerequisitos: ["Teoría de las Obligaciones", "Comercial General"] },
  { nombre: "Teoría de la Prueba", prerequisitos: [] },
  { nombre: "Consultorio Jurídico I", prerequisitos: ["Teoría de la Prueba", "Derecho Procesal Penal", "Derecho Procesal Civil General", "Derecho de Familia"] },
  { nombre: "Comercial General", prerequisitos: [] },
  { nombre: "Derecho de los Algoritmos", prerequisitos: [] },
  { nombre: "Laboratorio de Innovación Legal", prerequisitos: ["Derecho de los Algoritmos"] },
  { nombre: "Protección Internacional de Derechos", prerequisitos: [] },
  { nombre: "Derecho Administrativo Colombiano", prerequisitos: ["Teoría del Derecho Administrativo"] },
  { nombre: "Derecho Procesal Penal", prerequisitos: ["Teoría General del Proceso"] },
  { nombre: "Derecho Procesal Civil General", prerequisitos: ["Teoría General del Proceso"] },
  { nombre: "Teoría General del Proceso", prerequisitos: [] },
  { nombre: "Derecho de Familia", prerequisitos: [] },
  { nombre: "Sucesiones", prerequisitos: ["Derecho de Familia"] },
  { nombre: "Derecho Procesal Civil Especial", prerequisitos: ["Derecho Procesal Civil General"] },
  { nombre: "Derecho Procesal Administrativo", prerequisitos: ["Derecho Procesal Civil General"] },
  { nombre: "Derecho Procesal Laboral", prerequisitos: ["Derecho Procesal Civil General"] },
  { nombre: "Medios Probatorios Especiales", prerequisitos: ["Teoría de la Prueba", "Derecho Procesal Civil Especial", "Derecho Procesal Administrativo", "Derecho Procesal Laboral"] },
  { nombre: "Sociedades", prerequisitos: ["Contratos Comerciales"] },
  { nombre: "Propiedad Intelectual", prerequisitos: ["Contratos Comerciales"] },
  { nombre: "Consultorio Jurídico II", prerequisitos: ["Consultorio Jurídico I"] },
  { nombre: "Deontología Jurídica", prerequisitos: [] },
  { nombre: "Títulos Valores", prerequisitos: [] },
  { nombre: "Derecho Ambiental", prerequisitos: ["Derecho Procesal Administrativo"] },
  { nombre: "Ciclo de especialización", prerequisitos: [] },
  { nombre: "Práctica", prerequisitos: [] },
];

const estado = {};
cursos.forEach(c => (estado[c.nombre] = false));

function renderMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";
  cursos.forEach(curso => {
    const bloqueado = curso.prerequisitos.some(p => !estado[p]);
    const div = document.createElement("div");
    div.className = "curso" + (estado[curso.nombre] ? " aprobado" : bloqueado ? " bloqueado" : "");
    div.innerText = curso.nombre;
    if (!bloqueado) {
      div.onclick = () => {
        estado[curso.nombre] = !estado[curso.nombre];
        renderMalla();
      };
    }
    malla.appendChild(div);
  });
}

renderMalla();
    

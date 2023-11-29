// Función para agregar una nueva tarea
function agregarTarea() {
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const listaTareas = document.getElementById("listaTareas");
  const nuevaTareaTexto = nuevaTareaInput.value.trim();
  console.log(nuevaTareaTexto);
  if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function () {
      listaTareas.removeChild(nuevaTarea);
    };
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
  }
}

// Función para marcar una tarea como completada
function marcarCompletada(tarea) {
  tarea.classList.toggle("completed");
}

// Agregar evento de clic a las tareas para marcarlas como completadas;
document
  .getElementById("listaTareas")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      marcarCompletada(event.target);
    }
  });

// Función para mostrar solo las tareas completadas
function mostrarCompletadas() {
  const listaTareas = document.getElementById("listaTareas");
  const tareasCompletadas = listaTareas.querySelectorAll("li.completed");
  //Ocultar todas las tareas que no son completadas
  listaTareas.querySelectorAll("li:not(.completed)").forEach(function (tarea) {
    tarea.style.display = "none";
  });
  tareasCompletadas.forEach(function (tarea) {
    tarea.style.display = "flex";
  });
}

// Función para mostrar solo las tareas pendientes
function mostrarPendientes() {
  const listaTareas = document.getElementById("listaTareas");
  const tareasCompletadas = listaTareas.querySelectorAll("li.completed");

  // Ocultar las tareas completadas
  tareasCompletadas.forEach(function (tarea) {
    tarea.style.display = "none";
  });

  // Mostrar todas las tareas restantes
  listaTareas.querySelectorAll("li:not(.completed)").forEach(function (tarea) {
    tarea.style.display = "flex";
  });
}

// Agregar evento de clic al botón "Agregar"
document.getElementById("agregar").addEventListener("click", agregarTarea);

//Agregar evento de clic al botón "mostrar pendientes"
document
  .getElementById("mostrarPendientes")
  .addEventListener("click", mostrarPendientes);

// Agregar evento de clic al botón "mostrar completadas"
document
  .getElementById("mostrarCompletadas")
  .addEventListener("click", mostrarCompletadas);

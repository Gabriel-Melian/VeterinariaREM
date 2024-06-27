document.addEventListener('DOMContentLoaded', () => {//Cuando el DOM este listo obtengo los elementos
    const nuevaMascotaBtn = document.getElementById('nueva-mascota-btn');
    const modalContainer = document.getElementById('modal-container');
    const cancelarBtn = document.getElementById('cancelar-btn');
  
    nuevaMascotaBtn.addEventListener('click', (e) => {
      e.preventDefault();//Prevenir el envio del formulario
      modalContainer.classList.remove('hidden');//Mostrar el modal
    });
  
    cancelarBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modalContainer.classList.add('hidden');//Ocultar el modal
    });
  
    //Cerrar el modal al hacer clic fuera de él
    window.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        modalContainer.classList.add('hidden');//Ocultar el modal
      }
    });
});
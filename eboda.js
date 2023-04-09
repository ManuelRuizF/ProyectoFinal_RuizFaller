
const manFirstNameInput = document.querySelector('#man-first-name');
const manLastNameInput = document.querySelector('#man-last-name');
const womanFirstNameInput = document.querySelector('#woman-first-name');
const womanLastNameInput = document.querySelector('#woman-last-name');
const findButton = document.querySelector('#find-button');


findButton.addEventListener('click', function() {
  const manFirstName = manFirstNameInput.value;
  const manLastName = manLastNameInput.value;
  const womanFirstName = womanFirstNameInput.value;
  const womanLastName = womanLastNameInput.value;

  localStorage.setItem('manFirstName', manFirstName);
  localStorage.setItem('manLastName', manLastName);
  localStorage.setItem('womanFirstName', womanFirstName);
  localStorage.setItem('womanLastName', womanLastName);

  const savedManFirstName = localStorage.getItem('manFirstName');
  const savedManLastName = localStorage.getItem('manLastName');
  const savedWomanFirstName = localStorage.getItem('womanFirstName');
  const savedWomanLastName = localStorage.getItem('womanLastName');


  Swal.fire({
    icon: 'success',
    title: `Bienvenido a la boda de ${savedWomanFirstName} y ${savedManFirstName}`,
    text: `Ahora te encuentras en la página de productos de ${savedManFirstName} ${savedManLastName} y ${savedWomanFirstName} ${savedWomanLastName}. Regresa al menú principal para elegir los regalos`,
    imageUrl: 'https://images.unsplash.com/photo-1549062572-b4280938a25f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
});
let cajaTexto = document.querySelector(".email");
let enviarEmail = document.querySelector(".enviar");
let mensajeError = document.querySelector(".error");

function mostrarMensajeErrorEmail() {
  mensajeError.style.display = "flex";
}
function envioExitoso() {
  mensajeError.style.display = "none";
  cajaTexto.value = "";
}

function validarEmail(email) {
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}

enviarEmail.addEventListener("click", function (event) {
  event.preventDefault();

  if (!validarEmail(cajaTexto.value)) {
    mostrarMensajeErrorEmail();
  } else {
    envioExitoso();
  }
});

let barraMobile = document.querySelector(".barra_movil");
let abrirMenuMobile = document.querySelector(".icon_abrir");
let cerrarMenuMobile = document.querySelector(".icon_cerrar");
let contendorLinks = document.querySelector(".hero_nav");
let efectoBody = document.querySelector("#body");
let estado = false;

barraMobile.addEventListener("click", function () {
  if (estado == false) {
    efectoBody.classList.add("efecto_body");
    contendorLinks.classList.add("efecto_hero_nav");
    abrirMenuMobile.style.display = "none";
    cerrarMenuMobile.style.display = "block";
    estado = true;
  } else {
    efectoBody.classList.remove("efecto_body");
    contendorLinks.classList.remove("efecto_hero_nav");
    abrirMenuMobile.style.display = "block";
    cerrarMenuMobile.style.display = "none";
    estado = false;
  }
});

// function setupPersons() {
//   let personsItems = document.querySelectorAll(".item_person");
//   let algunoSelec = false;

//   personsItems[0].classList.add("fecto_item_person");

//   for (let i = 0; i < personsItems.length; i++) {
//     personsItems[i].addEventListener("click", function () {
//       if (algunoSelec == false) {
//         for (let n = 0; n < personsItems.length; n++) {
//           personsItems[n].classList.toggle(
//             "fecto_item_person",
//             personsItems[n] == this
//           );
//         }
//       }
//     });
//   }

//   let person1 = document.querySelector(".person1");
//   let person2 = document.querySelector(".person2");
//   let person3 = document.querySelector(".person3");
//   let person4 = document.querySelector(".person4");
//   let item_person1 = document.querySelector(".item_person1");
//   let item_person2 = document.querySelector(".item_person2");
//   let item_person3 = document.querySelector(".item_person3");
//   let item_person4 = document.querySelector(".item_person4");

//   person1.style.display = "flex";

//   function abrirInfo(info) {
//     if (info.style.display !== "flex") {
//       info.style.display = "flex";
//     }
//   }

//   function closeInfo(item) {
//     const infosPersons = document.querySelectorAll(".section3_person");
//     for (let i = 0; i < infosPersons.length; i++) {
//       if (infosPersons[i] !== item && infosPersons[i].style.display == "flex") {
//         infosPersons[i].style.display = "none";
//       }
//     }
//   }

//   item_person1.addEventListener("click", function () {
//     abrirInfo(person1);
//     closeInfo(person1);
//   });
//   item_person2.addEventListener("click", function () {
//     abrirInfo(person2);
//     closeInfo(person2);
//   });
//   item_person3.addEventListener("click", function () {
//     abrirInfo(person3);
//     closeInfo(person3);
//   });
//   item_person4.addEventListener("click", function () {
//     abrirInfo(person4);
//     closeInfo(person4);
//   });
// }

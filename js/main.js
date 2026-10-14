// Asigna las URL de config.js a los enlaces. No guarda nada en el navegador.
(function () {
  "use strict";

  document.querySelectorAll("[data-registro]").forEach(function (el) {
    el.href = FORM_URL;
  });

  document.querySelectorAll("[data-privacidad]").forEach(function (el) {
    el.href = PRIVACY_URL;
  });

  // Aviso visible mientras el enlace del formulario siga siendo el de ejemplo.
  if (FORM_URL.indexOf("PENDIENTE") !== -1) {
    var aviso = document.getElementById("aviso-demo");
    if (aviso) { aviso.hidden = false; }
  }
})();

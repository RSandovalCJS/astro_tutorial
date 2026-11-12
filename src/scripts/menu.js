
// Script javascript que sirve para detectar los click sobre el boton "Menu". Asi mostrar u ocultar las opciones "Inicio", "Sobre Mi", "Mi Blog"
const menu = document.querySelector(".menu"); // document. (documento html index.astro), querySelector(.menu) signfica: "Buscar usando el selector CSS .menu", es decir el elemento que tenga class="menu".

      // "?" -> encadenamiento opcional, y se usa para verificar que existe el botón menu antes de agregarle el detector de click (addEventListener)
      menu?.addEventListener("click", () => {
        const isExpanded = menu.getAttribute("aria-expanded") === "true";
        menu.setAttribute("aria-expanded", `${!isExpanded}`);
      });
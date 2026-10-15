# Diagnóstico relámpago · Acambaro.com.mx

Sitio estático de demostración para el stand “Diagnóstico relámpago” en Conexión Emprendedora UnADM 2026 (18 al 20 de noviembre de 2026, CDMX).

El sitio **no recaba datos**: explica el servicio y dirige a un formulario externo. Sin analytics, cookies, fuentes externas ni scripts de terceros.

> Este material fue elaborado con asistencia de Claude (Anthropic) y revisado por [nombre].

## Estructura

| Archivo | Función |
|---|---|
| `index.html` | Página principal |
| `aviso-privacidad.html` | Aviso de privacidad (borrador, pendiente de revisión legal) |
| `css/styles.css` | Estilos; colores de marca como variables al inicio |
| `js/config.js` | Constantes `FORM_URL` y `PRIVACY_URL` |
| `js/main.js` | Asigna las URL a los botones; no guarda nada en el navegador |
| `.github/workflows/pages.yml` | Despliega `main` a GitHub Pages |

## Cambiar FORM_URL y PRIVACY_URL

Edita `js/config.js`:

```js
const FORM_URL = "https://…";        // enlace del formulario
const PRIVACY_URL = "aviso-privacidad.html"; // o la URL del aviso final
```

Si `FORM_URL` vuelve a contener la palabra `PENDIENTE`, la página muestra un aviso amarillo de demostración.

Otros pendientes en el código: busca `PENDIENTE` en todos los archivos (colores de marca, domicilio, correo ARCO, plazo de conservación, fecha del aviso, confirmación de la lista de datos contra el formulario final).

Mantén sincronizados el formulario y la sección 2 del aviso de privacidad: si cambian los campos del formulario, actualiza el aviso.

## Probar en local

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000`.

## Publicar

1. Sube el proyecto a un repositorio de GitHub con la rama `main`.
2. En *Settings → Pages*, elige **Source: GitHub Actions**.
3. Cada push a `main` ejecuta el workflow y publica el sitio.

## Generar el código QR

1. La URL de la página es `https://atapia9.github.io/diagnostico-relampago/` (cámbiala si se configura un dominio propio).
2. Genera el QR con cualquier generador que no exija registro, o desde terminal:

   ```bash
   pip install qrcode[pil]
   qr "https://atapia9.github.io/diagnostico-relampago/" > qr-diagnostico.png
   ```
3. Imprímelo al menos de 8 × 8 cm, con margen blanco, y **escanéalo con dos teléfonos distintos** antes de imprimir en cantidad.

## Checklist previo al evento

- [ ] Sitio funcionando en la URL pública (abre en datos móviles y en Wi‑Fi)
- [ ] `FORM_URL` real configurada y formulario probado de punta a punta
- [ ] Aviso de privacidad final revisado legalmente y sin textos `PENDIENTE`
- [ ] QR impreso, escaneado y probado en Android e iOS
- [ ] Tablet con batería completa, cargador y conexión (plan de datos de respaldo)
- [ ] Aviso de privacidad visible en el stand (impreso o abierto en la tablet)

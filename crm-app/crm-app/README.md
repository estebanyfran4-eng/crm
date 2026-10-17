# MiCRM — CRM genérico (PWA)
HTML + CSS + JS vanilla, datos en IndexedDB, sin backend ni dependencias.

## Estructura
- `index.html` — pantalla única y contenedores.
- `manifest.json`, `sw.js` — PWA e uso offline.
- `css/style.css`, `css/responsive.css` — estilos mobile-first y adaptación a tablet/PC.
- `js/utils.js` — constantes, fechas, formato, toasts. `js/storage.js` — IndexedDB. `js/app.js` — clientes, dashboard, seguimiento, estadísticas, backup.
- `assets/icons/` — iconos PWA.

## 1. Abrir
Abrí la carpeta en VS Code (`File > Open Folder`).
## 2. Ejecutar
El service worker requiere servidor (no `file://`). Opciones: extensión **Live Server** (clic derecho en `index.html > Open with Live Server`) o `npx serve .` / `python -m http.server 8080` y abrir `http://localhost:8080`.
## 3. Publicar (Vercel)
Subí la carpeta a un repo de GitHub → vercel.com → *Add New Project* → importá el repo → *Framework: Other* → *Deploy*. O con CLI: `npm i -g vercel` y `vercel --prod` dentro de la carpeta. Vercel sirve HTTPS, necesario para la PWA.
## 4. Instalar como PWA (Android)
Abrí la URL publicada en Chrome → menú ⋮ → **Instalar aplicación** (o botón en Configuración). En iPhone: Safari → Compartir → *Agregar a inicio*.
## 5. Convertir a APK con Capacitor
```
npm init -y
npm i @capacitor/core @capacitor/cli @capacitor/android
npx cap init MiCRM com.tuempresa.micrm --web-dir=www
mkdir www && cp -r index.html manifest.json sw.js css js assets www/    # (Windows: copiá las carpetas a mano)
npx cap add android
npx cap sync
```
Cada vez que cambies el código: copiá de nuevo a `www/` y ejecutá `npx cap sync`.
## 6. Generar el APK en Android Studio
`npx cap open android` → esperá que termine Gradle → **Build > Build Bundle(s)/APK(s) > Build APK(s)** → el APK queda en `android/app/build/outputs/apk/debug/`. Para publicar en Play Store: **Build > Generate Signed Bundle / APK**.

## Cómo probar todo
Crear/editar/eliminar (botón + en Clientes, ✏️, 🗑️ en la ficha); buscar y filtrar en Clientes; cambiar estado en la ficha (pipeline y estadísticas se actualizan); 📅 Programar; ✅ Marcar realizado (pide nueva fecha); Estadísticas; Configuración para exportar/importar JSON, CSV y eliminar los datos de ejemplo.

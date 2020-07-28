# CoolApp
Proyecto desarrollado en Angular y Bootstrap
Listo para ser publicado
Temas desarrollados:
- Módulos
- Componentes
    `ng g c products`
    `ng g c home`
    `ng g c notFound`
    `ng g c detailsProduct`
    `ng g c productList`
- Rutas y parámetros
- Servicios
    `ng g s shared/data`
- Inyeccion de dependencias


## Development server
Ejecuta `npm install` para reconstruir el proyecto luego:
Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`.


## Despliege coolApp
- `ng add angular-cli-ghpages` Agrega la dependencia Angular CLI ghpages de npm al proyecto
- `ng build --prod` Prepara la app para ser publicada en internet(genera una carpeta llamada "dist")
- `ng deploy --base-href=/cool-app-angular/` para subir los ficheros al Host.
- ==> Pagina disponible en: https://enrique-13.github.io/cool-app-angular/


## Further help (Ayuda adicional)
Curso desarrollado en Angular - desde: https://www.udemy.com/course/angular-9-para-principiantes/

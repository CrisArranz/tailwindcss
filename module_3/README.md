# Configuraciones Previas
Antes de empezar a usar tailwind te recomiendo, si estas usando Visual Studio Code, que te instales el siguiente plugin:
## Tailwind CSS intelliSense
Este Plugin basicamente lo que va a hacer es traerte todas las clases que tiene tailwind, te abrirá un menu contextual y podras ver cada clase y ademas el valor que va a aplicar, vamos una herramienta practicamente indispensable!

# Instalacion
Para instalar Tailwind dentro de nuestro proyecto con CRA (Create React App) deberemos ejecutar los siguiente comandos:
## 1º Instalar dependencia como dependencia de desarrollo
```
npm i -D tailwindcss
```

## 2º Inicializar tailwindcss
```
npx tailwindcss init
```

## 3º Configurar el archivo tailwind.config.js que nos acaba de generar
<
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
>

## 4º Añadir las directivas de tailwind a nuestro index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 5º Ejecutar nuestra aplicacion y disfrutar de Tailwind!
```
npm run start
```

Todas estas configuraciones tambien las podeis tener en la pagina oficial de Tailwind, os dejo el enlace a continuacion:
https://tailwindcss.com/docs/guides/create-react-app
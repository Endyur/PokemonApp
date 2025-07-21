
# 🧪 Pokémon Angular App

Aplicación web desarrollada con Angular que muestra información de Pokémon consumiendo una API pública.

## 🚀 Requisitos

- Node.js (versión recomendada: >= 18)
- Angular CLI
- Git
- Docker (opcional, para ejecución en contenedor)

---

## 📥 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/pokemon-angular-app.git
cd pokemon-angular-app
```

---

## 📦 2. Instalar dependencias

Instala las dependencias del proyecto con NPM:

```bash
npm install
```

---

## 🧾 3. Ejecutar el proyecto localmente

Usa Angular CLI para iniciar el servidor de desarrollo:

```bash
ng serve
```

Luego abre tu navegador en:

```
http://localhost:4200
```

---

## 🐳 4. Construir el contenedor Docker

Primero asegúrate de haber generado el build de producción:

```bash
npm run build --prod
```

Después, construye la imagen Docker:

```bash
docker build -t angular-pokemon .
```

---

## 🧱 5. Ejecutar la imagen Docker y acceder a la app

Lanza el contenedor en el puerto 8080 (puedes cambiarlo si lo necesitas):

```bash
docker run -d -p 8080:80 angular-pokemon
```

Abre el navegador en:

```
http://localhost:8080
```

---

## 📁 Estructura del proyecto

```
pokemon-angular-app/
├── src/                 # Código fuente de Angular
├── dist/                # Build de producción (después de compilar)
├── Dockerfile           # Archivo de configuración Docker
├── nginx.conf           # Configuración personalizada de Nginx
├── package.json         # Dependencias y scripts
└── README.md            # Instrucciones de uso
```

---

## 🛠️ Construido con

- Angular
- TypeScript
- HTML/CSS
- Docker + Nginx

---

By Ender Dominguez

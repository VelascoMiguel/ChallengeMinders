# Usa una imagen base de Node.js
FROM node:18-alpine

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json (o yarn.lock) al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de tu aplicación al contenedor
COPY . .

# Compila el proyecto
RUN npm run build

# Expone el puerto 3001 para que la app sea accesible
EXPOSE 3001

# Comando para ejecutar la app
CMD ["npm", "run", "start:prod"]

# Usa la imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos del proyecto
COPY . .

# Compila la aplicación de React
RUN npm run build

# Instala el servidor web para servir los archivos estáticos
RUN npm install -g serve

# Expone el puerto 80
EXPOSE 80

# Comando para ejecutar la aplicación
CMD ["serve", "-s", "build", "-l", "80"]

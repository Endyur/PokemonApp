
FROM node:20-alpine AS builder

WORKDIR /app


COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration=production


RUN ls -la /app/dist/
RUN ls -la /app/dist/pokemon-prueba/


FROM nginx:alpine

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf


COPY --from=builder /app/dist/pokemon-prueba /usr/share/nginx/html

# Exponer el puerto por defecto de Nginx
EXPOSE 80

# Mantener Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
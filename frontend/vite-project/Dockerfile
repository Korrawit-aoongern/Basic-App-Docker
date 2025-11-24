# Frontend Dockerfile - build with Node, serve dist with nginx (production-style)
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies (copy package files first to leverage cache)
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# Runner: nginx serves the built static files
FROM nginx:stable-alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html

# Add SPA fallback and basic caching
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# First stage: build distribution
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
WORKDIR /app/packages/api
RUN npm install
RUN npm run build

# Copy shared utils
FROM node:18-alpine
WORKDIR /
COPY packages/utils ./utils

# Copy built app code and install production dependencies
WORKDIR /app
COPY --from=builder ./app/packages/api/dist ./dist
COPY packages/api/package.json .
RUN npm install --production

# Copy non-source code dirs
COPY packages/api/migrations ./migrations
COPY packages/api/public ./public

# Set PORT and expose for service
ARG SERVICE_PORT
ENV PORT=$SERVICE_PORT
EXPOSE $PORT

# Start service
ENTRYPOINT ["node", "."]
FROM node:18.18.2-alpine

# Copy the dist folder from our machine to the container at /dist
COPY ../../dist ./dist

# Set the working directory to /dist/apps/api so that we can run npm install
WORKDIR /dist/apps/api

# Install the dependencies from the package.json file,
# --omit=dev flag omits dev dependencies from install
# --omit=optional flag omits optional dependencies from install
# --loglevel verbose flag means that we log everything
RUN npm install --omit=dev --omit=optional --loglevel verbose

ENV NODE_ENV=production

# Run the server
CMD node ./main.js



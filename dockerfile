# # Use the official Node.js image as the base image
# FROM node:18-alpine

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code to the working directory
# COPY . .

# # Build the Next.js application
# RUN npm run build

# # Expose the default port used by Next.js (usually 3000)
# EXPOSE 3000

# # Start the Next.js application
# CMD ["npm", "start"]

# Use an official Node.js runtime as a parent image
FROM gcr.io/distroless/nodejs:16

# Install bash or sh if not already included
RUN apk add --no-cache bash
# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]


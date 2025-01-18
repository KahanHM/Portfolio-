# Use an official Node.js runtime as a parent image
FROM gcr.io/distroless/nodejs:16

# Set the working directory inside the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed dependencies
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000


# Run the application when the container starts
CMD ["npm", "start"]


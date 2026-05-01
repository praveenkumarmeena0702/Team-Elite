# =======================================================
# Build the Spring Boot Backend
# =======================================================
FROM maven:3.9.6-eclipse-temurin-17 AS build-backend
WORKDIR /app/backend

# Copy the pom.xml and source code
COPY backend/pom.xml ./
COPY backend/src ./src

# Build the Spring Boot JAR (skip tests to speed up the process)
RUN mvn clean package -DskipTests

# =======================================================
# Run the Application
# =======================================================
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build-backend /app/backend/target/cafena-backend-1.0.0.jar app.jar

# Render assigns a PORT environment variable dynamically (defaults to 8080 if not set)
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["sh", "-c", "java -Dserver.port=${PORT:-8080} -jar app.jar"]

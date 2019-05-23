FROM openjdk:10-jre-slim 
COPY ./target/customer-info-api-0.0.1-SNAPSHOT.jar /usr/src/app/ 
WORKDIR /usr/src/app
EXPOSE 8080 
CMD ["java", "-jar", "customer-info-api-0.0.1-SNAPSHOT.jar"]

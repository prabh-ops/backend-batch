import swaggerJSDoc from 'swagger-jsdoc';

const definition = {
openapi: "3.0.0",
info: {
title: "Dummy",
version: "1.0.0",
description: "My API Description",
},
};

const options = {
swaggerDefinition :definition,
apis: ['swagger.yaml'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);


export default swaggerSpec;
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
openapi: "3.0.0",
info: {
title: "Dummy",
version: "1.0.0",
description: "My API Description",
},
};

const options = {
swaggerDefinition,
apis: ['swagger.yaml'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);


export default swaggerSpec;
import swaggerJSDoc from 'swagger-jsdoc';

const definition = {
definition:{
openapi: "3.0.0",
info: {
title: "Dummy",
version: "1.0.0",
description: "My API Description",
},
},
apis: ['swagger.yaml'],
};

// const options = {
//  // Path to the API docs
// swaggerDefinition :definition,
// };

const swaggerSpec = swaggerJSDoc(definition);


export default swaggerSpec;
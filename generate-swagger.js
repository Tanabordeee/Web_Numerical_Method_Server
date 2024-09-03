const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./Routes/*.js'];

const config = {
    info: {
        title: 'API Documentation',
        description: 'Detailed API Documentation',
    },
    tags: [],
    host: 'localhost:3000',
    schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, config).then(() => {
    console.log('Swagger documentation generated');
}).catch(err => {
    console.error('Error generating Swagger documentation:', err);
});
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Express API',
      version: '1.0.0',
      description: 'A simple Express API documented with Swagger',
    },
    components: {
      schemas: {
        Note: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'Unique identifier' },
            title: { type: 'string', description: 'Note title' },
            content: { type: 'string', description: 'Note content' },
            createdAt: { type: 'string', format: 'date-time', description: 'ISO creation date' },
            updatedAt: { type: 'string', format: 'date-time', description: 'ISO updated date' },
          },
          required: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
        },
        NoteInput: {
          type: 'object',
          properties: {
            title: { type: 'string', description: 'Note title' },
            content: { type: 'string', description: 'Note content' },
          },
          required: ['title', 'content'],
        },
        NoteUpdate: {
          type: 'object',
          properties: {
            title: { type: 'string', description: 'Note title' },
            content: { type: 'string', description: 'Note content' },
          },
        },
      }
    },
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;

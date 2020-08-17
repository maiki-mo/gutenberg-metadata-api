const fastify = require('fastify')({ logger: false });

const routes = require('../api');

const RUN_ENVIRONMENT = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;

fastify.register(routes.textsRoutes)
    .register(routes.healthRoutes);

const listen = () => {
    console.log('gutenberg metadata api is running on port', PORT, 'in the', RUN_ENVIRONMENT.toUpperCase(), 'environment');
    fastify.listen(PORT, '0.0.0.0');
};

module.exports = {
    listen,
    RUN_ENVIRONMENT,
};

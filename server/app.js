'use strict';

const path = require('node:path');
const AutoLoad = require('@fastify/autoload');
const fastifyStatic = require('@fastify/static');

const options = {
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        singleLine: true,
        colorize: true,
      },
    },
  },
};

module.exports = async function (fastify, opts) {
  // if (process.env.NODE_ENV === 'production') {
  fastify.register(fastifyStatic, {
    prefix: '/',
    root: path.join(__dirname, '../web/dist'),
  });
  // }

  fastify.setNotFoundHandler((req, reply) => {
    reply.sendFile('index.html');
  });

  void fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'shared'),
    options: Object.assign({}, opts),
  });

  void fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'modules'),
    options: Object.assign({}, opts),
  });
};

module.exports.options = options;


module.exports = (o) => {

  const search = require('./handlers/search.js')(o.Mongo);

  return [
    {
      method: 'GET',
      path: '/search',
      handler: search,
    }
  ];
};

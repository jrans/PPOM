
'use strict';

require('./_bootstrap/run_helper.js').postgresRunSeed();
// ----------------------------------------------------------
require('./api/server.test.js');
require('./api/models/queries.test.js');
require('./api/handlers/search.test.js');
require('./api/handlers/stream.test.js');
require('./api/handlers/party.test.js');
require('./api/handlers/hit.test.js');
require('./api/handlers/add.test.js');
require('./api/handlers/slice.test.js');
require('./api/services/hum.test.js');
require('./api/services/utils.test.js');
// ----------------------------------------------------------
require('./_bootstrap/run_helper.js').end();

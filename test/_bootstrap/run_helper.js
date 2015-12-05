

const test = require('tape');

module.exports = {
  end: function () {
    test('setting: terminate tests', function (t) {
      
      t.end();
      console.log('It took ', process.uptime(), 's to run the tests' );
      process.exit();
    });
  }
}

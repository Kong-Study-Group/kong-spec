const frisby = require('frisby');
const prefix = "http://172.28.32.186:8001/"

it('kong version', function (done) {
  frisby.get(prefix)
    .expect('status', 200)
    .expect('json', 'version', '0.11.0')
    .done(done);
});

it('kong tagline', function (done) {
  frisby.get(prefix)
    .expect('status', 200)
    .expect('json', 'tagline', 'Welcome to kong')
    .done(done);
});

it('used plugins ', function (done) {
  frisby.get(prefix)
    .expect('status', 200)
    .expect('json', 'plugins.available_on_server', {
        "basic-auth": true,
        "key-auth": true,
        "acl": true,
        "cors": true,
        "ip-restriction": true,
        "rate-limiting": true,
        "correlation-id": true,
        "file-log": true,
        "tcp-log": true,
        "http-log": true,
    })
    .done(done);
});

const passport = require('passport');
const path = require('path');

module.exports = app => {
  app.get('/', function(req, res) {
    res.sendFile(path.resolve('index.html'));
  });

  // google ile bağlantı kurulan path
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // Kullanıcı hesabını seçmesinden sonra buraya gelecek
  app.get('/auth/google/callback', passport.authenticate('google'));
};

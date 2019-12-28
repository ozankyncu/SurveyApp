const passport = require('passport');

module.exports = app => {
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

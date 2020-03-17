import express = require('express');
import serveIndex = require('serve-index');
import session = require('express-session');
import { sso, sspi } from 'node-expose-sspi';

const app = express();

app.use((req, res, next) => {
  console.log('req.url', req.url);
  next();
});

app.use(express.json());
app.use(
  session({
    secret: 'this is my super secreeeeeet!!!!!',
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/ws/protected', (req, res, next) => {
  if (!req.session.sso) {
    return res.status(401).end();
  }
  next();
});

app.use('/ws/protected/secret', (req, res, next) => {
  res.json({ hello: 'word!' });
});

app.get('/ws/connect-with-sso', sso.auth(), (req, res, next) => {
  console.log(req.sso);
  if (!req.sso) {
    return res.status(401).end();
  }
  req.session.sso = req.sso;
  return res.json({
    sso: req.sso,
  });
});

app.post('/ws/connect', (req, res, next) => {
  console.log('connect', req.body);
  const domain = sso.getDefaultDomain();
  console.log('domain: ', domain);

  const credentials: sspi.UserCredential = {
    domain,
    user: req.body.login,
    password: req.body.password,
  };
  console.log('credentials: ', credentials);
  const ssoObject = sso.connect(credentials);
  if (ssoObject) {
    req.session.sso = ssoObject;
    return res.json({
      sso: req.session.sso,
    });
  }
  return res.status(401).json({
    error: 'bad login/password.',
  });
});

app.get('/ws/disconnect', (req, res, next) => {
  delete req.session.sso;
  return res.json({});
});

app.get('/ws/is-connected', (req, res, next) => {
  if (req.session.sso) {
    return res.json({ sso: req.session.sso });
  }
  return res.status(401).end();
});

const www = '../front/dist/front';
app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(3500, () => console.log('Server started on port 3500'));

// Local preview only. No packages or build step required.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.json':'application/json','.jpg':'image/jpeg','.svg':'image/svg+xml','.png':'image/png','.mp3':'audio/mpeg'};
http.createServer((req,res) => {
  let file;
  try {const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);file = path.resolve(root, '.' + (urlPath === '/' ? '/index.html' : urlPath));}
  catch {res.writeHead(400);res.end();return;}
  if (!file.startsWith(root + path.sep)) {res.writeHead(403);res.end();return;}
  fs.readFile(file,(err,body) => {res.writeHead(err ? 404 : 200, {'Content-Type':mime[path.extname(file)] || 'application/octet-stream'});res.end(err ? 'Not found' : body);});
}).listen(8766,'127.0.0.1', () => console.log('CaravanOz preview: http://localhost:8766'));

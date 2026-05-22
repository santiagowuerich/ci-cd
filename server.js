// server.js
// Servidor HTTP simple para Render
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    status: 'ok',
    message: 'Pipeline CI/CD funcionando',
    timestamp: new Date().toISOString()
  }));
});

const PORT = process.env.PORT || 4004;
server.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
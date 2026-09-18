// SpaceEdu — Pure Node.js backend (Express)
// Same API as the platform backend: GET /api/planets, GET /api/planets/:bodyId
// Run locally:  cd node-backend && yarn install && yarn start   → http://localhost:8001

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 8001;
const bodies = JSON.parse(fs.readFileSync(path.join(__dirname, 'planet-data.json'), 'utf-8'))
  .sort((a, b) => a.position - b.position);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/planets', (req, res) => res.json(bodies));

app.get('/api/planets/:bodyId', (req, res) => {
  const body = bodies.find((b) => b.bodyId === req.params.bodyId);
  if (!body) return res.status(404).json({ detail: 'Body not found' });
  res.json(body);
});

// If you built the frontend (yarn build in ../frontend), serve it too:
const buildDir = path.join(__dirname, '..', 'frontend', 'build');
if (fs.existsSync(buildDir)) {
  app.use(express.static(buildDir));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(buildDir, 'index.html'));
  });
}

app.listen(PORT, () => console.log(`SpaceEdu Node backend running on http://localhost:${PORT}`));

# PulseNet Disaster AI

A demo web application for disaster prediction, response coordination, and historical scenario replay for Uttarakhand, India.

## Features
- AI-powered landslide and flood prediction (TensorFlow.js)
- Real-time rescue asset coordination
- Interactive terrain and risk zone map (Leaflet)
- 2013 Kedarnath disaster timeline replay
- Mobile PWA: offline, push notifications

## Folder Structure
```
pulsenet-disaster-ai/
├── index.html
├── manifest.json
├── README.md
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── ai-prediction-engine.js
│   ├── disaster-response-network.js
│   ├── uttarakhand-map.js
│   ├── kedarnath-replay.js
│   └── mobile-pwa.js
├── data/
│   ├── uttarakhand-terrain.json
│   ├── kedarnath-2013-timeline.json
│   ├── weather-patterns.json
│   ├── population-data.json
│   └── emergency-contacts.json
├── ai-models/
│   ├── landslide-prediction-model.json
│   ├── flash-flood-algorithm.js
│   └── ensemble-ai-engine.js
```

## Setup & Demo
1. Open `index.html` in a browser (Chrome recommended)
2. For full PWA features, serve via local web server (e.g. `npx serve`)
3. See README for details on each module

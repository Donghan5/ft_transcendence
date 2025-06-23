# Project Tree

ft_transcendence/
├── docker-compose.yml
├── .env
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       └── server.ts
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── index.html
│   └── src/
│       └── PongGame3D.ts
├── admin/
│   ├── Dockerfile
│   └── index.php
├── blockchain/
│   ├── Dockerfile
│   ├── package.json
│   ├── hardhat.config.js
│   └── contracts/
│       └── PongRewards.sol
├── database/
│   └── schema.sql
├── monitoring/
│   ├── prometheus/
│   │   └── prometheus.yml
│   └── grafana/
│       └── provisioning/
└── nginx/
    ├── Dockerfile
    └── nginx.conf

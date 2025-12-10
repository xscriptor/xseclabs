# Backend PHP

## General Structure

```
Backed/ (in development htdocs)
│
├── public/
│     ├── index.php
│     └── .htaccess
│
├── routes/
│     ├── api.php
│     └── internal.php
│
├── src/
│     ├── Controllers/
│     │     ├── AuthController.php
│     │     ├── ScanController.php
│     │     ├── EventController.php
│     │     ├── DeviceController.php
│     │     └── SecurityController.php
│     │
│     ├── Services/
│     │     ├── AuthService.php
│     │     ├── ScanService.php
│     │     ├── EventService.php
│     │     ├── DeviceService.php
│     │     └── SecurityService.php
│     │
│     ├── Repositories/
│     │     ├── UserRepository.php
│     │     ├── ScanRepository.php
│     │     ├── EventRepository.php
│     │     └── DeviceRepository.php
│     │
│     ├── Models/
│     │     ├── User.php
│     │     ├── Scan.php
│     │     ├── Event.php
│     │     └── Device.php
│     │
│     └── Helpers/
│           ├── Response.php
│           ├── Validator.php
│           ├── Security.php
│           ├── Logger.php
│           └── Sanitizer.php
│
├── config/
│     ├── database.php
│     ├── security.php
│     ├── app.php
│     └── env.php
│
├── storage/
│     ├── logs/
│     │     ├── system.log
│     │     ├── scan.log
│     │     └── .gitkeep
│     │
│     ├── events/
│     │     └── .gitkeep
│     │
│     └── uploads/
│           └── .gitkeep
│
├── vendor/
│
└── composer.json
```

Next.js consumes the API normally using `fetch`.


# Backend Internal Flow

### 1. HTTP Request

It can be:

- A user authenticating.
- A device sending data.
- The dashboard querying results.
- An internal module running an analysis.

Examples:

`POST /scan/run` `GET /scan/results` `POST /device/register` `GET /events/recent`

The server points to:

`xseclabs-backend/public/`

### 2. Entry via public/index.php

This file:

- Loads the API and internal routers.
- Identifies whether the request is public or private.
- Initializes the environment, API keys, global validations.

Conceptual example:

`require __DIR__ . '/../routes/api.php'; require __DIR__ . '/../routes/internal.php'; $router->dispatch();`

### 3. Route Loading

X Sec Labs separates public and private routes:

`routes/api.php        ← normal usage`
`routes/internal.php   ← analysis, auditing, internal cron`

Examples:

api.php:

`$router->post('/auth/login', 'AuthController@login'); $router->post('/scan/run', 'ScanController@run');`

internal.php:

`$router->post('/internal/collect', 'SecurityController@collect'); $router->get('/internal/audit', 'SecurityController@audit');`

Internal routes usually require an API key or master token.

### 4. Hand-off to Controller

The controller:

- Processes the input.
- Applies basic checks.
- Calls the corresponding service.
- Throws exceptions if permissions are missing.

Example:

`class ScanController {     public function run() {         $service = new ScanService();         return $service->execute($_POST);     } }`

### 5. Processing in Services

Services in X Sec Labs handle heavier tasks:

- Scans.
- Pattern detection.
- Data collection.
- Deep sanitization.
- Signatures, simple heuristic analysis.
- Coordination of internal flows.

Example:

`class ScanService {     public function execute($input) {         $clean = Sanitizer::clean($input);         $repo = new ScanRepository();         $repo->logScan($clean);         return $this->analyze($clean);     } }`

### 6. Data Access in Repositories/

PDO is used:

`class ScanRepository {     public function logScan($data) {         $db = Database::getConnection();         $stmt = $db->prepare("INSERT INTO scans (...) VALUES (...)");         $stmt->execute([...]);     } }`

### 7. Auxiliary Processes in Helpers

X Sec Labs uses additional helpers:

- Logger (security logs)
- Sanitizer (input cleaning)
- Validator (advanced rules)
- Response (uniform output format)
- Security (API key management)

Example:

`Logger::write('scan.log', json_encode($data));`

### 8. Persistence in storage/

Analysis results, logs and events are stored in:

`storage/logs/` `storage/events/` `storage/uploads/`

This enables later audits.

### 9. Response to the Client

All output is JSON:

`{   "scan_id": 35,   "status": "completed",   "findings": [] }`

Integrates with:

- X Sec Labs Next.js dashboard.
- Scripts.
- External software.


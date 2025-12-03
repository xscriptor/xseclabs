# Backend php

## Estructura general

```
 xseclabs-backend/
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

Next.js consume la API de manera normal mediante fetch.


# Flujo interno del backend

### 1. Petición HTTP

Puede ser:

- Usuario autenticándose.
    
- Dispositivo enviando datos.
    
- Dashboard consultando resultados.
    
- Un módulo interno ejecutando un análisis.
    

Ejemplos:

`POST /scan/run GET /scan/results POST /device/register GET /events/recent`

El servidor apunta a:

`xseclabs-backend/public/`

### 2. Entrada por public/index.php

Este archivo:

- Carga el router de API e interno.
    
- Identifica si la petición es pública o privada.
    
- Inicializa el entorno, claves API, validaciones globales.
    

Ejemplo conceptual:

`require __DIR__ . '/../routes/api.php'; require __DIR__ . '/../routes/internal.php'; $router->dispatch();`

### 3. Carga de rutas

X Sec Labs separa rutas públicas y privadas:

`routes/api.php        ← uso normal routes/internal.php   ← análisis, auditoría, cron interno`

Ejemplos:

api.php:

`$router->post('/auth/login', 'AuthController@login'); $router->post('/scan/run', 'ScanController@run');`

internal.php:

`$router->post('/internal/collect', 'SecurityController@collect'); $router->get('/internal/audit', 'SecurityController@audit');`

Las rutas internas suelen requerir clave API o token maestro.

### 4. Paso a Controlador

El controlador:

- Procesa la entrada.
    
- Aplica verificaciones básicas.
    
- Llama al servicio correspondiente.
    
- Lanza excepciones si faltan permisos.
    

Ejemplo:

`class ScanController {     public function run() {         $service = new ScanService();         return $service->execute($_POST);     } }`

### 5. Procesamiento en Servicios

Los servicios en X Sec Labs contienen tareas más pesadas:

- Escaneos.
    
- Detección de patrones.
    
- Recolección de datos.
    
- Sanitización profunda.
    
- Firmas, análisis heurísticos simples.
    
- Coordinación de flujos internos.
    

Ejemplo:

`class ScanService {     public function execute($input) {         $clean = Sanitizer::clean($input);         $repo = new ScanRepository();         $repo->logScan($clean);         return $this->analyze($clean);     } }`

### 6. Acceso a datos en Repositories/

Se utiliza PDO:

`class ScanRepository {     public function logScan($data) {         $db = Database::getConnection();         $stmt = $db->prepare("INSERT INTO scans (...) VALUES (...)");         $stmt->execute([...]);     } }`

### 7. Procesos auxiliares en Helpers

X Sec Labs usa helpers adicionales:

- Logger (registros de seguridad)
    
- Sanitizer (limpieza de entradas)
    
- Validator (reglas avanzadas)
    
- Response (formato uniforme de salida)
    
- Security (gestión de claves API)
    

Ejemplo:

`Logger::write('scan.log', json_encode($data));`

### 8. Persistencia en storage/

Los resultados de análisis, logs y eventos se guardan en:

`storage/logs/ storage/events/ storage/uploads/`

Esto permite auditorías posteriores.

### 9. Respuesta al cliente

Toda salida es JSON:

`{   "scan_id": 35,   "status": "completed",   "findings": [] }`

Integrable con:

- Dashboard Next.js de X Sec Labs.
    
- Scripts.
    
- Softwares externos.

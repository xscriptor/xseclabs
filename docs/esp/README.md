## **Frontend (Next.js + Tailwind CSS)**

## Estructura

- `auth` — módulo común de sesión
    
- `dashboard` — panel base reutilizable
    
- `files` — módulo genérico para contenidos/config
    
- `versions` — versión de cualquier entidad
    
- `activity` — registro universal
    
- `settings` — configuración global
    

## Diseño

- Tailwind
    
- Componentes reutilizables exportados entre proyectos
    
- JSX
    
- Layout modular orientado a paneles
    

## Comunicación con backend

- Cliente central `lib/api.js`
    
- Fetch
    
- Token enviado automáticamente desde capa de cliente
    

## Protección de rutas

- Middleware compartido
    
- Validación genérica de sesión
    
- Redirección si es necesario
    

## Estado

- Hooks unificados:
    
    - `useAuth`
        
    - `useEntity`
        
    - `useVersions`
        
    - `useActivity`
        

## Organización

```
/components
/app
/lib
```

---

# **Backend (PHP)**

## Funcionalidades

- Autenticación centralizada
    
- JWT
    
- Módulos intercambiables
    
- Gestión de entidades genéricas (archivos, reglas, configs)
    
- Versionado común
    
- Registro de actividad común
    

## Operativa principal

- Endpoints organizados por módulo
    
- Validación genérica por middleware
    
- Subidas con `move_uploaded_file` cuando corresponde
    
- Plantilla base para módulos adicionales
    

## Estructura de almacenamiento

```
/storage/{module}/{entity_id}/version_{n}
```

---

# **Base de datos (MySQL)**

### **users**

```
id, email, password_hash, created_at
```

### **entities**

```
id, module, name, created_at
```

### **entity_versions**

```
id, entity_id, version_number, file_path, created_at
```

### **activity_log**

```
id, user_id, action, module, entity_id, created_at
```

---

# **CLI opcional (Node.js)**

## Comandos

- `xcore login`
    
- `xcore push`
    
- `xcore pull`
    
- `xcore versions`
    
- `xcore logout`
    

## Tecnologías

- commander.js
    
- axios
    

---

# **Flujo general**

1. Usuario hace login.
    
2. Backend genera JWT.
    
3. Frontend valida antes de renderizar.
    
4. Módulos consumen endpoints genéricos.
    
5. Cada acción queda en `activity_log`.
    
6. CLI usa los mismos endpoints unificados.
    

---

# **Traducción estática (subdirectorios)**

- Enfoque: subdirectorios por idioma con páginas pre-renderizadas.

## Lenguajes

- `es` (por defecto), `en`.

## Configuración

- Usar `app/page.jsx` para español y `app/en/page.jsx` para inglés.
- Sin middleware ni librerías de i18n en tiempo de ejecución.
- Las diferencias de contenido se gestionan directamente en cada ruta.

## Estructura

- `app/page.jsx` — contenido en español.
- `app/en/page.jsx` — contenido en inglés.

## Rutas

- `/` sirve contenido en español.
- `/en` sirve contenido en inglés.

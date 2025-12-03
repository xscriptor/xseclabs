## **Frontend (Next.js + Tailwind CSS)**

## Structure

- `auth` — common session module
- `dashboard` — reusable base panel
- `files` — generic module for content/config
- `versions` — versioning for any entity
- `activity` — universal log
- `settings` — global configuration

## Design

- Tailwind
- Reusable components exported between projects
- JSX/TSX
- Modular dashboard-oriented layout

## Backend Communication

- Central client `lib/api.ts`
- Typed fetch
- Token automatically sent from client layer

## Route Protection

- Shared middleware
- Generic session validation
- Redirection if necessary

## State

- Unified hooks:
    - `useAuth`
    - `useEntity`
    - `useVersions`
    - `useActivity`

## Organization

```
/components
/app
/lib
```

---

# **Backend (PHP)**

## Features

- Centralized authentication
- JWT
- Interchangeable modules
- Generic entity management (files, rules, configs)
- Common versioning
- Common activity logging

## Core Operations

- Endpoints organized by module
- Generic validation via middleware
- Uploads with `move_uploaded_file` when applicable
- Base template for additional modules

## Storage Structure

```
/storage/{module}/{entity_id}/version_{n}
```

---

# **Database (MySQL)**

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

# **Optional CLI (Node.js)**

## Commands

- `xcore login`
- `xcore push`
- `xcore pull`
- `xcore versions`
- `xcore logout`

## Technologies

- commander.js
- axios

---

# **General Flow**

1. User logs in.
2. Backend generates JWT.
3. Frontend validates before rendering.
4. Modules consume generic endpoints.
5. Every action is recorded in `activity_log`.
6. CLI uses the same unified endpoints.

---

# **Native Translation (Next.js)**

- Technology: `next-intl` (App Router).

## Languages:

- `es` (default), `en`.

## Configuration

The project uses `next-intl` with App Router and Middleware for localized route management.

### Structure

- `messages/`: JSON files with translations (`es.json`, `en.json`).
- `src/i18n/`: `next-intl` configuration (`request.ts`, `navigation.ts`).
- `src/middleware.ts`: Middleware for redirection and locale detection.
- `app/[locale]/`: Dynamic routes based on language.

### Routes

- `/es` (or `/` redirects to `/es` by default) serves content in Spanish.
- `/en` serves content in English.

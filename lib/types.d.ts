export type ID = string;

export interface Entity {
  id: ID;
  module: string;
  name: string;
  created_at?: string;
}

export interface EntityVersion {
  id: ID;
  entity_id: ID;
  version_number: number;
  file_path?: string;
  created_at?: string;
}

export interface ActivityItem {
  id: ID;
  user_id: ID;
  action: string;
  module: string;
  entity_id?: ID;
  created_at?: string;
}

export interface AuthState {
  token: string | null;
  authenticated: boolean;
}

export type ApiHeaders = Record<string, string>;

export interface ApiOptions<TBody = unknown> {
  method?: string;
  headers?: ApiHeaders;
  body?: TBody;
}

export interface Api {
  get<T>(path: string): Promise<T>;
  post<T, TBody = unknown>(path: string, body: TBody): Promise<T>;
  put<T, TBody = unknown>(path: string, body: TBody): Promise<T>;
  del<T>(path: string): Promise<T>;
}

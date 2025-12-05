"use client";
import { useState, useCallback } from "react";
import { api } from "../lib/api";

export type EntityVersion = {
  id: string;
  entity_id: string;
  version_number: number;
  file_path?: string;
  created_at?: string;
};

export function useVersions(entityId?: string) {
  const [versions, setVersions] = useState<EntityVersion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVersions = useCallback(async (): Promise<void> => {
    if (!entityId) return;
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<EntityVersion[]>(`/entities/${entityId}/versions`);
      setVersions(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [entityId]);

  return { versions, loading, error, fetchVersions };
}

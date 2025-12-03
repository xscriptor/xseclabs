"use client";
import { useState, useCallback } from "react";
import { api } from "../lib/api";

export type Entity = {
  id: string;
  module: string;
  name: string;
  created_at?: string;
};

export function useEntity() {
  const [entities, setEntities] = useState<Entity[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEntities = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<Entity[]>("/entities");
      setEntities(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { entities, loading, error, fetchEntities };
}

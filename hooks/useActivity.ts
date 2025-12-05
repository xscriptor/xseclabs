"use client";
import { useState, useCallback } from "react";
import { api } from "../lib/api";

export type ActivityItem = {
  id: string;
  user_id: string;
  action: string;
  module: string;
  entity_id?: string;
  created_at?: string;
};

export function useActivity() {
  const [items, setItems] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchActivity = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<ActivityItem[]>("/activity");
      setItems(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { items, loading, error, fetchActivity };
}

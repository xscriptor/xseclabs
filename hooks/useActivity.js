"use client";
import { useState, useCallback } from "react";
import { api } from "../lib/api";

export function useActivity() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchActivity = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      /** @type {import('../lib/types').ActivityItem[]} */
      const data = await api.get("/activity");
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

"use client";
import { useState, useCallback } from "react";
import { api } from "../lib/api";

export function useEntity() {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEntities = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      /** @type {import('../lib/types').Entity[]} */
      const data = await api.get("/entities");
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

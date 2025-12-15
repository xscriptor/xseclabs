"use client";
import { useState, useCallback } from "react";
import { api } from "../lib/api";

export function useVersions(entityId) {
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVersions = useCallback(async () => {
    if (!entityId) return;
    setLoading(true);
    setError(null);
    try {
      /** @type {import('../lib/types').EntityVersion[]} */
      const data = await api.get(`/entities/${entityId}/versions`);
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

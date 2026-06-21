import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useBootNavigate() {
  const navigate = useNavigate();
  const [pendingPath, setPendingPath] = useState(null);

  const navigateWithBoot = useCallback((path) => {
    setPendingPath(path);
  }, []);

  const onBootDone = useCallback(() => {
    if (pendingPath) {
      navigate(pendingPath);
      setPendingPath(null);
    }
  }, [pendingPath, navigate]);

  return { isBooting: !!pendingPath, navigateWithBoot, onBootDone };
}

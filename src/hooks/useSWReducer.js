import { useEffect } from 'react';
import useSwr from 'swr';

const fetcher = (keyword) => {
  return JSON.parse(
    window.localStorage.getItem('usehook_' + keyword) || JSON.stringify(init)
  );
};

export const useSWReducer = (key, init = {}) => {
  const { data, error } = useSwr(key, fetcher, { refreshInterval: 1000 });
  const isLoading = !error && !data;
  const dispatch = (value) => {
    window.localStorage.setItem(
      'usehook_' + key,
      JSON.stringify(value || init)
    );
  };
  useEffect(() => {
    if (!isLoading && !data) {
      window.localStorage.setItem('usehook_' + key, JSON.stringify(init));
    }
  }, [data, isLoading]);
  return { data, isLoading, dispatch };
};

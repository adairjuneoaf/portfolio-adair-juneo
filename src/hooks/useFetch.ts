import useSWR from "swr";

export default function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
    {
      refreshInterval: 900000,
    }
  );

  return { data, error };
}

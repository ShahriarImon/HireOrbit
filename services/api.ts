interface FetchAPIOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function fetchAPI<T>(
  endpoint: string,
  token: string | null = null,
  options: FetchAPIOptions = {}
): Promise<T> {
  const url = `${"https://dummy-1.hiublue.com/api/"}${endpoint}`;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json() as Promise<T>;
}

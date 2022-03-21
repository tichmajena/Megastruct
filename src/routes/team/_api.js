export const BASE = import.meta.env.VITE_BASE;
const base = BASE;

export async function getJSON(event, resource, data) {
  const res = await fetch(`${base}/${resource}`, {
    method: event.request.method,
    headers: {
      "content-type": "application/json",
    },
    body: data && JSON.stringify(data),
  });

  if (
    res.ok &&
    event.request.method !== "GET" &&
    event.request.headers.accept !== "application/json"
  ) {
    return {
      status: 303,
      headers: {
        location: "/team",
      },
      body: "", // TODO https://github.com/sveltejs/kit/issues/1047
    };
  }

  return {
    status: res.status,
    body: await res.json(),
  };
}

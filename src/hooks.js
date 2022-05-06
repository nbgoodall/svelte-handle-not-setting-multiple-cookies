export async function handle({ event, resolve }) {
  const response = await resolve(event);

  response.headers.set("set-cookie", ["a=b;", "b=c;", "c=d;"]);

  return response;
}

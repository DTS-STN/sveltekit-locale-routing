export async function handle({ event, resolve }) {
  let locale = event?.url?.pathname?.split("/")?.[1] || 'en';
  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(/<html.*>/, `<html lang="${locale}">`),
  });
}

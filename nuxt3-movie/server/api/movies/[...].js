export default defineEventHandler((event) => {
  const id = [...event.node.req.url.split('/')].pop()
  const config = userRuntimeConfig(user)
  return $fetch(`${config.apiBaseUrl}/search/movie?query=${id}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${config.apiKey}` },
  })
})

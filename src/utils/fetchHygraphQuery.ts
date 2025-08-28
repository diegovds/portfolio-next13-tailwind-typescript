export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate: number = 0, // por padrão, sem cache
): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    next: {
      revalidate,
    },
    body: JSON.stringify({ query }),
  })

  const { data } = await response.json()

  return data
}

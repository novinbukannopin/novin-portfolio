export function getParam(
  searchParams: URLSearchParams,
  key: string,
  fallback = '',
) {
  const val = searchParams.get(key);
  return val ? val : fallback;
}

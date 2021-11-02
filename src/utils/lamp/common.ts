export function handleFetchParams<T = unknown>(t: T): t is T{
  return {
    size: t.pageSize,
    current: t.current,
    sort: t.sort,
    order: t.order,
    model: t
  };
}

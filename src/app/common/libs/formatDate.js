export function formatDateLong(base) {
  return new Intl.DateTimeFormat("uk-UA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
    .format(base.createDate)
    .replace(" р.", " року");
}

export function formatDateShort(base) {
  return new Intl.DateTimeFormat("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(base.createDate);
}

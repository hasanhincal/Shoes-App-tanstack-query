function formatParams(params: Record<string, string>): string {
  const queryParts: string[] = [];

  Object.keys(params).forEach((key) => {
    const values = params[key].split(",");
    values.forEach((value) => {
      if (key === "price") {
        queryParts.push(`${key}_lte=${value}`);
      } else if (key === "size" || key === "color") {
        queryParts.push(`${key}_like=${value}`);
      } else {
        queryParts.push(`${key}=${value}`);
      }
    });
  });

  return `?${queryParts.join("&")}`;
}
export default formatParams;

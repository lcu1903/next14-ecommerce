//fetch products data
export async function fetchProductData() {
  const res = await fetch(`/api/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    return Error("Failed to fetch products data");
  }
}

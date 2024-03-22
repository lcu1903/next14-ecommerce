//fetch user data
export async function fetchUserData() {
  const res = await fetch(`http://localhost:3000/api/users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 10 },
  });

  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    return Error("Failed to fetch user data");
  }
}

const getData = async () => {
  try {
    const res = await fetch(
      "https://grove-server-one.vercel.app/api/content/page/hero"
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <section>
        {data.map((item) => (
          <div key={item._id}>
            {item.key.includes("title") && <h1>{item.value}</h1>}
            {item.key.includes("description") && <p>{item.value}</p>}
            {item.image && <img src={item.image} alt={item.key} />}
          </div>
        ))}
      </section>
    </div>
  );
}

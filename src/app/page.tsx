export default async function Home() {
  const num = await fetch(
    "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1"
  )
    .then((r) => r.json())
    .then((r) => {
      console.log(r[0]);
      return r[0];
    });
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Random number: {num}</h1>
    </div>
  );
}

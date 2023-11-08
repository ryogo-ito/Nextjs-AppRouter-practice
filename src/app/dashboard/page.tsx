import { Suspense } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getPosts();

  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <Suspense fallback={<p>...loading</p>}>
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </Suspense>
    </>
  );
}

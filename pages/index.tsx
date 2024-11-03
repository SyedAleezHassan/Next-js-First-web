// // import Head from "next/head";
// // import Image from "next/image";
// import localFont from "next/font/local";
// // import styles from "@/styles/Home.module.css";
// // import Link from "next/link";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function Home() {
//   return (
//     <>
//       <h1>Welcome Syed kia kar rae ho syed ALLAH  apko hamesha khush or ameer rakhy ameen syed</h1>
//       <ul>
       
//       </ul>
//     </>
//   );
// }


import { GetStaticProps } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define the type for a post
type Post = {
  id: number;
  title: string;
  body: string;
};

interface HomeProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <h1>Welcome Syed! May you always be happy and prosperous. Ameen.</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

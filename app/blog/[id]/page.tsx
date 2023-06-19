import React from 'react'


async function handleData(){
"use server"
console.log("test");
}

export default async function page({ params }: { params: { id: string } }) {
    const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const data = await res.json();
    return (
        <div>
        {
          <div key={data.id}>
            <h1>Post ID: {data.id}</h1>
            <p>Title: {data.title}</p>
            <p>Content:{data.body}</p>
          </div>
        }

        <form action={handleData}>
        <button>click me</button>
        </form>
      </div>
    )
}


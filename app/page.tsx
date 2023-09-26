'use client'


export default function Home() {
  // const session = await getServerSession(authOptions)
  
  return (
    <main>
      {/* <h1>hello { session && <span>{session.user!.name}</span>}</h1> */}
      {/* <Link href="/users">Users</Link> */}
      {/* <ProductCard /> */}
      <h1>Hello world</h1>
      <button onClick={async () => {
        const _ = (await import('lodash')).default
        const users = [
          { name: 'c' },
          { name: 'b' },
          { name: 'a' },
        ];

        const sorted = _.orderBy(users, ['name'])
        console.log(sorted)
      }}>Show</button>
    </main>
  )
}

// export async function generateMetadata(): Promise <Metadata> {
//   const product = await fetch('');

//   return {
//     title: 'product.title',
//     description: '....'
//   }
// }

//   return (
//     <main className='relative h-screen'>
//       <Image
//        src="https://bit.ly/react-cover" 
//        alt='screenshot'
//        fill
//        className="object-cover"
//        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
//        quality={100}
//        priority
//        />
//     </main>
//   )
// }
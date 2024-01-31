import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/"style={{color: "#3b00ff"}}>Return Home</Link>
    </div>
  )
}
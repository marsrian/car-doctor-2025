import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center'>
      <Image src="/assets/images/notFound.png" alt="404" width={788} height={490} />
      <Link href="/" className='text-red-500 text-lg font-semibold rounded-lg p-4 border border-red-500 mt-5'>Return Home</Link>
    </div>
  )
}
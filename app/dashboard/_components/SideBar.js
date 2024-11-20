import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Layout, Shield } from 'lucide-react'
import Image from 'next/image'

function SideBar() {
  return (
    <div className='shadow-md h-screen p-7'>
        <Image src={'/logo.svg'} alt='logo' width={150} height={120} />

        <div className='mt-10'>
          <Button className="w-full">+ Upload PDF</Button>
        </div>
        <div className='flex gap-2 items-center p-5 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>
          <Layout/>
          <h2>WorkSpace</h2>
          <div className='flex gap-2 items-center p-3 mt-2 hover:bg-slate-100 rounded-lg cursor-pointer'>
              <Shield/>
              <h2>Upgrade</h2>
          </div>
        </div>
        <div className='absolute bottom-24 w-[90%]'>
        <Progress value={33} />

        <p className='text-sm mt-1'>2 out of 3 Pdf Uploaded.</p>

        <p className='text-sm text-gray-400 mt-2'>Upgrade to Upload more PDF.</p>

        </div>
    </div>
  )
}

export default SideBar

"use client"
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { api } from '@/convex/_generated/api'
import { useMutation } from 'convex/react'
import { Loader2Icon } from 'lucide-react'
import { useState } from 'react'


  

function UploadPdfDialog({children}) {

    const generateUploadUrl=useMutation(api.fileStorage.generateUploadUrl);
    const [file,setFile]=useState();
    const [loading, setLoading]=useState(false);
    const OnFileSelect=(event)=>{
        setFile(event.target.files[0]);

    }
    const OnUpload=async()=>{
        setLoading(true);

        // Step 1: Get a short-lived upload URL
    const postUrl = await generateUploadUrl();

    // Step 2: POST the file to the URL
    const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file?.type },
        body: file,
      });
      const { storageId } = await result.json();
      console.log('StorageId',storageId);

      setLoading(false);

    }

  return (
    <Dialog>
  <DialogTrigger>{children}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Upload Pdf File</DialogTitle>
      <DialogDescription asChild>
        <div className=''>
        <h2 className='mt-5'> Please Select a file to upload</h2>
            <div className='flex mt-5 gap-2 p-3 round-md border '>
                
                <input type='file' accept='application/pdf'
        
                onChange={(event)=>OnFileSelect(event)}/>
            </div>
            <div className='mt-2'>
                <label>File Name *</label>
                <Input placeholder="File Name"/>
            </div>
           

        </div>
        
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button onClick={OnUpload}>
            {loading?
            <Loader2Icon className='animate-spin'/>:'Upload'

}
            
    </Button>
        </DialogFooter>
    
  </DialogContent>
</Dialog>

  )
}

export default UploadPdfDialog
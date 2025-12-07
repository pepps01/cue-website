'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { Input } from '@/components/ui/input';
import { Formik, Field, Form } from 'formik';
import { cn } from '@/components/ui/utils';


function page() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleDelete(values:any) {
      const confirmDelete = confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      );

      if (!confirmDelete) return;

      setLoading(true);
      setInterval(running,3000)

      setLoading(false);

      // await fetch("/api/account/delete", {
      //   method: "DELETE",
      // })
      // .then(response => {
      //   if (!response.ok) {
      //   // Handle non-successful HTTP responses (e.g., 404 Not Found, 500 Internal Server Error)
      //       throw new Error(`HTTP error! status: ${response.status}`);
      //   }
      //   router.push("/goodbye");
      // })
      // .then(data => {
      //     console.log('Resource deleted successfully:', data);
      //    setLoading(false);

      // })
      // .catch(error => {
      //     console.error('Error during DELETE request:', error);
      // });
    }

    const running = ()=>{
      console.log("running...")
      router.push("/goodbye");

    }

  return (
    <div className="max-w-md mx-auto py-20">
      <h1 className="text-2xl font-bold mb-4">Delete Account</h1>
      <p className="text-gray-600 mb-6">
        Deleting your account is permanent. All data will be removed.
      </p>

       <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={async (values) => {
            // await new Promise((r) => setTimeout(r, 500));

            // alert(JSON.stringify(values, null, 2));
            handleDelete(values)
            console.log(values)
          }}
       >
      <Form>
          <div className='mb-4'>
            <label className='mb-4'>Email Address</label>
            <Field id="email" name="email" placeholder="Enter Email Address" 
              className={
                cn(
                    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                  )
              }
            />

          </div>
            
          <button
            disabled={loading}
            className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 disabled:opacity-50 w-full"
            type='submit'
          >
            {loading ? "Deleting..." : "Delete Account"}
          </button>
      </Form>
    </Formik>


      
    </div>
  );
}


export default page
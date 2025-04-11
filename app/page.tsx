import Image from "next/image"
import Link from "next/link"

import ClientForm from "@/components/forms/ClientForm"

const home = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="no-scrollbar relative flex-1 overflow-y-auto px-[5%] my-auto">
        <div className="mx-auto flex size-full flex-col py-10 max-w-[496px] ">
            <Image src="/assets/images/logo.png"
              alt="padel"
              width={1000}
              height={1000}
              className="mb-12 h-10 w-fit" 
              />
              <ClientForm />
              <div className="text-[14px] font-normal mt-20 flex justify-between">
                  <p className="justify-items-end text-gray-400 xl:text-left ">
                  © copyright 2025 PadelUp
                  </p>
                  <Link href="/?admin=true" className="text-green-500">
                      Admin
                  </Link>
    
              </div>

        </div>

      </section>
      <Image src="/assets/images/onboarding-img.webp"
      alt="padel"
      width={1000}
      height={1000}
      className="hidden h-full object-cover md:block max-w-[50%]" 
      />

      
    </div>
  )
}

export default home
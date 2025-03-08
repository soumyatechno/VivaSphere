import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';
import NavItems from './NavItems';


const MobileNavItem = () => {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <Image src="/assets/icons/menu.svg" alt="menu" height={24} width={24} className="cursor-pointer"/>
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-3 bg-white md:hidden'>
          <Image src="/assets/images/logo.svg" height={38} width={128} alt="logo" />
          <Separator className='border border-gray-50'/>
          <NavItems/>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNavItem
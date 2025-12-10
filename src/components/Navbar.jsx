import { Menu, Moon, Sun } from 'lucide-react'
import React from 'react'
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const { setTheme, theme } = useTheme()
  return (
    <div className='flex items-center justify-between sticky top-0 bg-fore p-5 md:px-20 border-b z-50 backdrop-blur-3xl'>
      <h1 className='text-2xl font-bold'>Resonance</h1>
      <div className='flex items-center'>
        <ul className='gap-5 hidden  md:flex'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Contact</li>

        </ul>
        <div className='flex ml-10 items-center gap-2'>
          <Sun />
          <Switch checked={theme == 'dark'} onCheckedChange={(checked) => (setTheme(checked ? "dark" : "light"))} />
          <Moon />
          <Sheet>
            <SheetTrigger>
              <Menu className=' md:hidden cursor-pointer' />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <ul className='text-xl flex flex-col items-center justify-center mt-20'>
                    <li className='cursor-pointer text-center gap-5 text-foreground hover:bg-blue-500 px-5 py-2 rounded-lg'>Home</li>
                    <li className='cursor-pointer text-center gap-5 text-foreground hover:bg-blue-500 px-5 py-2 rounded-lg'>About</li>
                    <li className='cursor-pointer text-center gap-5 text-foreground hover:bg-blue-500 px-5 py-2 rounded-lg'>Contact</li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Navbar

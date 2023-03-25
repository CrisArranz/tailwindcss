import { Button } from "../../"

export default function Navbar({ handleDark }) {
  return (
    <nav className='h-20 flex justify-between items-center px-4'>
      <a className='transition ease-in-out rounded border-emerald-300 delay-150 bg-slate-700 text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-2' href='/'>Home</a>
      <span className='hover:animate-pulse text-3xl'>Hello IronHackers!</span>
      <Button handleDark={handleDark}/>
    </nav>
  )
}
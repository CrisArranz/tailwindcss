function App() {
  return (
   <main>
    <nav className='h-20 bg-gradient-to-tr from-cyan-600 to-teal-600 flex justify-between items-center px-4'>
      <a href='/'>Home</a>
      <p className='text-3xl'>Hello World!</p>
      <button className='flex flex-col justify-center w-12 h-12 border-0 bg-transparent gap-[14px] group'>
        <div className='bg-black h-[2px] w-full rounded-md transition-all duration-[.5s] origin-left group-hover:first:rotate-45'></div>
        <div className='bg-black h-[2px] w-full rounded-md transition-all duration-[.5s] origin-left group-hover:even:opacity-0'></div>
        <div className='bg-black h-[2px] w-full rounded-md transition-all duration-[.5s] origin-left group-hover:last:rotate-[-45deg]'></div>
      </button>
    </nav>
   </main>
  );
}

export default App;

'use client'
import PerfilUsuario from '@/components/PerfilUsuario'
import { useState } from 'react'
import { RiSearchLine, RiStarFill } from 'react-icons/ri'
export default function Home () {
  const [SearchData, setSearchData] = useState<string>('')

  function handleSubmit (event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const search = formData.get('search')?.toString() ?? ''
    setSearchData(search)
  }

  return (
    <main className='h-screen flex justify-center items-center w-screen bg-gray-500/5'>
      <section className='bg-white h-[50rem] rounded-lg  w-full md:w-[37.5rem] lg:w-[70rem] mx-4 p-8 shadow-sm'>
        <h2 className='text-gray-700 text-2xl font-medium'>
          Lista de Usuarios{' '}
        </h2>
        <div className='flex gap-5 mt-5 items-center h-14'>
          <form className='relative w-full md:w-[50%]' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Search...'
              className='w-full  rounded-lg py-3 px-4  mt-2 border focus:outline-none focus:border-gray-600/40'
              name='search'
            />

            <RiSearchLine className='absolute text-gray-400 top-1/2 -translate-y-1/2 mt-1 right-1  text-xl h-10 w-10 p-2      cursor-pointer' />
          </form>

          <button type='button'>
            <RiStarFill className='text-2xl text-gray-600 hover:text-gray-900 mt-2' />
          </button>
        </div>

        {SearchData && <PerfilUsuario userName={SearchData} />}
      </section>
    </main>
  )
}

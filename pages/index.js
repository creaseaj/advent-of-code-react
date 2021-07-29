import Head from 'next/head'
import Image from 'next/image'
import AocDayTemplate from '../components/aocDayTemplate'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 leading-normal">Advent of Code 2020</h1>
        <p className="text-gray-500">in Next.JS</p>
      </div>

      <AocDayTemplate />
    </>
  )
}

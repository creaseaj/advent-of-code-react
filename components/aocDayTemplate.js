import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const AocDayTemplate = (day) => {
  const [answer, setAnswer] = useState(null)
  const [input, setInput] = useState(null)
  console.log(day)
  return (
    <div className="m-20 rounded-md p-10" style={{ background: day.day.colourPrimary }}>
      <div className="flex flex-col items-center justify-center text-2xl ">
        <a href={day.day.link}>{day.day.title}</a>
        <button className="px-10 py-5 m-5 w-56 rounded-md text-white bg-black bg-opacity-50" onClick={() => setAnswer(day.day.solution1(input))}>Run Part 1</button>
        <button className="px-10 py-5 m-5 w-56 rounded-md text-white bg-black bg-opacity-50" onClick={() => setAnswer(day.day.solution2(input))}>Run Part 2</button>

        <button className="px-10 py-5 m-5 w-56 rounded-md text-white bg-black bg-opacity-50" onClick={() => setAnswer('')}>Clear</button>
      </div>
      <div className="grid grid-cols-2 h-72 gap-10">
        <div >
          <textarea onChange={(v) => setInput(v.target.value)} className="w-full h-full rounded-md resize-none p-5" />
        </div>
        <div>
          <textarea value={answer} className="w-full h-full rounded-md resize-none p-5" />
        </div>
      </div>
    </div >
  )

}

export default AocDayTemplate
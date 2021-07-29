import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const AocDayTemplate = (day) => {
  const [answer, setAnswer] = useState(null)
  const [input, setInput] = useState(null)
  return (
    <div className="bg-purple-200 m-20 rounded-md p-10">
      <div className="flex flex-col items-center justify-center text-2xl ">
        <a href={day.day.link}>{day.day.title}</a>
        <button className="bg-purple-700 px-10 py-5 m-5 w-56 rounded-md text-white" onClick={() => setAnswer(input)}>Run Day</button>
      </div>
      <div className="grid grid-cols-2 h-72 gap-10">
        <div >
          <textarea onChange={(v) => setInput(v.target.value)} className="w-full h-full rounded-md resize-none p-5" />
        </div>
        <div>
          <textarea value={answer} className="w-full h-full rounded-md resize-none p-5" />
        </div>
      </div>
    </div>
  )

}

export default AocDayTemplate
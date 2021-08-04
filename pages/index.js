import Head from 'next/head'
import Image from 'next/image'
import AocDayTemplate from '../components/aocDayTemplate'
import day1p1 from '../components/dayFunctions'
import styles from '../styles/Home.module.css'

class Day {

  constructor(link, solution, title, colour) {
    this.title = title
    this.link = link
    this.solution = solution
    this.colourPrimary = colour
    this.colourSecondary = colour
  }
}
export default function Home() {

  return (
    <>
      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 leading-normal">Advent of Code 2020</h1>
        <p className="text-gray-500">in Next.JS</p>
      </div>

      <AocDayTemplate day={new Day('https://adventofcode.com/2020/day/1', day1p1, 'Day 1', '#ff00ff')} />
    </>
  )
}

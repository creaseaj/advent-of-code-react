import Head from 'next/head'
import Image from 'next/image'
import AocDayTemplate from '../components/aocDayTemplate'
import dayFunctions from '../components/dayFunctions'
import styles from '../styles/Home.module.css'

class Day {

  constructor(link, solution1, solution2, title, colour) {
    this.title = title
    this.link = link
    this.solution1 = solution1
    this.solution2 = solution2
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

      <AocDayTemplate day={new Day('https://adventofcode.com/2020/day/1', dayFunctions.day1p1, dayFunctions.day1p2, 'Day 1', '#ff00ff')} />
      <AocDayTemplate day={new Day('https://adventofcode.com/2020/day/2', dayFunctions.day1p1, dayFunctions.day1p2, 'Day 2', '#ff0099')} />

    </>
  )
}

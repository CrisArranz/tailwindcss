import "./Loading.css"

export default function Loading({ color, tone }) {
  return (
    <span className={`loader after:border-lime-200 after:border-2 after:border-solid before:border-lime-200 before:border-2 before:border-solid`} ></span>
  )
}
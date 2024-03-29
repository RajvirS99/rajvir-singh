import React from "react"
import { SVGProps } from "react"

const Copyrights = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" />
    <path d="M15.536 8.464A1 1 0 0 0 16.95 7.05a7 7 0 1 0 0 9.9 1 1 0 0 0-1.414-1.414 5 5 0 1 1 0-7.072Z" />
  </svg>
)
export default Copyrights

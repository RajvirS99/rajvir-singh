import * as React from "react"
import { SVGProps } from "react"

const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-269.231v-33.846h640v33.846H160Zm0-193.846v-33.846h640v33.846H160Zm0-193.846v-33.846h640v33.846H160Z" />
  </svg>
)
export default Hamburger

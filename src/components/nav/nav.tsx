import ImgLogo from "~/media/images/logo.svg?jsx"
import { component$, useStylesScoped$ } from "@builder.io/qwik"
import navStyle from "./nav.css?inline"

export const Nav = component$(() => {
  useStylesScoped$(navStyle)
  return (
    <ul>
      <li>
        <a href="/">
          <ImgLogo alt="" class="logo" />
        </a>
      </li>
      <li>
        <a href="/about">about</a>
      </li>
      <li>
        <a href="/packages">packages</a>
      </li>
      <li>
        <a href="/contact">contact</a>
      </li>
    </ul>
  )
})

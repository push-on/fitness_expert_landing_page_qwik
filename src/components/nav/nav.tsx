import ImgLogo from "~/media/images/logo.svg?jsx"
import { component$ } from "@builder.io/qwik"

export const Nav = component$(() => {
  return (
    <nav >
      <ul>
        <li>
          <a href="/">
            <ImgLogo alt="" class="logo" />
          </a>
        </li>
        <li>
          <a href="/">MENU</a>
        </li>
      </ul>
    </nav>
  )
})

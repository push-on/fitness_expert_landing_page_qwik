import { component$, useStylesScoped$ } from "@builder.io/qwik"
import footerStyle from "./footer.css?inline"

export const Footer = component$(() => {
  useStylesScoped$(footerStyle)

  return (
    <footer>
      <h1>Footer</h1>
    </footer>
  )
})

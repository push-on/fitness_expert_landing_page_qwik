import { component$, useStylesScoped$ } from "@builder.io/qwik"
import contactStyle from "./contact.css?inline"
import { Footer } from "~/components/footer/footer"
import { Nav } from "~/components/nav/nav"

export default component$(() => {
  useStylesScoped$(contactStyle)
  return (
    <>
      <Nav />
      <main>
        <h1>Contact</h1>
      </main>
      <Footer />
    </>
  )
})

import { component$, useStylesScoped$ } from "@builder.io/qwik"
import aboutStyle from "./about.css?inline"
import { Footer } from "~/components/footer/footer"
import { Nav } from "~/components/nav/nav"

export default component$(() => {
  useStylesScoped$(aboutStyle)
  return (
    <>
      <Nav />
      <main>
        <h1>About</h1>
      </main>
      <Footer />
    </>
  )
})

import { component$, useStylesScoped$ } from "@builder.io/qwik"
import packagesStyle from "./packages.css?inline"
import { Footer } from "~/components/footer/footer"
import { Nav } from "~/components/nav/nav"

export default component$(() => {
  useStylesScoped$(packagesStyle)
  return (
    <>
      <Nav />
      <main>
        <h1 >Packages</h1>
      </main>
      <Footer />
    </>
  )
})

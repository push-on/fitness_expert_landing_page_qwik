import { component$ } from "@builder.io/qwik"
import { Footer } from "~/components/footer/footer"
import { Nav } from "~/components/nav/nav"

export default component$(() => {
  return (
    <>
      <Nav />
      <main>
        <h1>Packages</h1>
      </main>
      <Footer />
    </>
  )
})

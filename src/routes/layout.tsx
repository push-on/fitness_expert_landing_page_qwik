import { component$, Slot } from "@builder.io/qwik"
import type { RequestHandler } from "@builder.io/qwik-city"
import { Footer } from "~/components/footer/footer"
import { Nav } from "~/components/nav/nav"

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  })
}

export default component$(() => {
  return (
    <div>
      <Nav />
      <Slot />
      <Footer />
    </div>
  )
})

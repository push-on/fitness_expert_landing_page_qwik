import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { Footer } from "~/components/footer/footer"
import { Hero } from "~/components/hero/hero"
import { Nav } from "~/components/nav/nav"

export default component$(() => {
  return (
    <>
      <Nav />
      <Hero />
      <Footer />
    </>
  )
})

export const head: DocumentHead = {
  title: "Fitness Coach | Zafir Anam",
  meta: [
    {
      name: "Zafir Anam, a fitness coach",
      content: "Certified Fitness Expert",
    },
  ],
  links: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/logo.svg",
    }
  ]
}

import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { Hero } from "~/components/hero/hero"
import { HeroMid } from "~/components/hero/heroMid"
import { HeroOverlay } from "~/components/hero/heroOverlay"

export default component$(() => {
  return (
    <>
      <Hero />
      <HeroMid />
      <HeroOverlay/>
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

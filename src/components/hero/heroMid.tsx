import { component$, useStylesScoped$ } from "@builder.io/qwik"
import styles from "./heroMid.css?inline"
import fontStyle from "./font.css?inline"

export const HeroMid = component$(() => {
  useStylesScoped$(styles)
  useStylesScoped$(fontStyle)

  return (
    <div class="py-10  m-scroll overflow-hidden bg-base-300">
      <h1 class="text-9xl whitespace-nowrap text-stroke text-transparent m-scroll__title uppercase">
        WEIGHT LOSS / MUSCLE GAIN / HEATHLY LIFESTYLE / WEIGHT LOSS / MUSCLE
        GAIN / HEATHLY LIFESTYLE / WEIGHT LOSS / MUSCLE GAIN / HEATHLY LIFESTYLE
        / WEIGHT LOSS / MUSCLE GAIN / HEATHLY LIFESTYLE
      </h1>
    </div>
  )
})

import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik"
import styles from "./heroMid.css?inline"

export const HeroMid = component$(() => {
  useStylesScoped$(styles)
  const header = useSignal<HTMLHeadingElement>()
  

  
  return (
    <div class=" py-10  m-scroll overflow-hidden">
      <h1
        ref={header}
        class="  text-6xl lg:text-9xl font-bold whitespace-nowrap text-stroke text-transparent m-scroll__title">
        WEIGHT LOSS / MUSCLE GAIN / HEATHLY LIFESTYLE /
      </h1>
    </div>
  )
})

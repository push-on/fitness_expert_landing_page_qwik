import {
  component$,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik"
import styles from "./font.css?inline"

export const HeroOverlayM = component$(() => {
  useStylesScoped$(styles)
  const animate = useSignal(false)

  useVisibleTask$(() => {
    animate.value = true
    
  })
  return (
    <main
      class="hero min-h-screen bg-base-300 "
      style="background-image: url(./images/bg_overlay_one.webp);">
      <div class="hero-overlay bg-opacity-80 backdrop-blur-sm  bg-base-300"></div>

      <div class="flex gap-1 p-4 justify-center items-center lg:items-start flex-col lg:flex-row-reverse ">
        <div class=" max-w-md">
          <h1
            class={`${
              animate.value && "animate-fade-right"
            } animate-delay-700 animate-duration-1000 text-9xl uppercase`}>
            WHAT WE DO
          </h1>

          <p
            class={`${
              animate.value && "animate-fade-right"
            } animate-delay-1000 animate-duration-1000 py-6 text-lg`}>
            Custom training programs, nutrition coaching, fitness assessments,
            goal setting, progress tracking, motivation, and accountability.
          </p>
          <div class="">
            <button
              class={`${
                animate.value && "animate-fade-right"
              } btn btn-outline btn-primary animate-delay-1000 animate-duration-1000 uppercase`}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  )
})

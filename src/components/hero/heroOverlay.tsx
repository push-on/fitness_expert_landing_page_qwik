import {
  component$,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik"
import styles from "./font.css?inline"

export const HeroOverlay = component$(() => {
  useStylesScoped$(styles)
  const animate = useSignal(false)

  useVisibleTask$(() => {
    animate.value = true
  })
  return (
    <main class="hero min-h-screen bg-base-300 py-20">
      <div class="flex gap-1 p-4 justify-center items-center lg:items-start flex-col lg:flex-row-reverse ">
        <img
          decoding="async"
          loading="lazy"
          srcSet="./images/heroOverlay.webp"
          alt="hero"
          width="400"
          height="550"
          class={`${
            animate.value && "animate-fade-left"
          } animate-delay-300 animate-duration-1000 max-w-sm rounded-lg shadow-2xl shadow-black object-cover object-center`}
        />
        <div class="max-w-xl ">
          <h1
            class={`${
              animate.value && "animate-fade-right"
            } animate-delay-500 animate-duration-1000 text-8xl `}>
            EXPERIENCE THE BENEFITS OF PERSONAL TRAINER
          </h1>
          <p
            class={`${
              animate.value && "animate-fade-right"
            } animate-delay-700 animate-duration-1000 py-6 text-lg`}>
            Zafir Anam is an Expert in fitness, nutrition, and wellness
            dedicated to understanding your unique fitness needs and goals. We
            offer personalised target-driven training programs that will help
            you reach your goals quickly and sustainably. The concept is unique.
            We combine the best equipment and coaches with bespoke fitness and
            nutrition plans to power your progress, If you bring the
            determination, we promise we'll achieve your goals together.
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

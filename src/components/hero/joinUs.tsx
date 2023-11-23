import {
  component$,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik"
import styles from "./font.css?inline"
export const JoinUs = component$(() => {
  useStylesScoped$(styles)
  const animate = useSignal(false)

  useVisibleTask$(() => {
    animate.value = true
  })
  return (
    <main class="hero min-h-screen bg-base-300 ">
      <div class={`${
              animate.value && "animate-fade"
            } animate-delay-1000 animate-duration-1000 hero-overlay bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 from-0% to-base-300 to-70%`}></div>

      <div class="flex gap-1 p-4 justify-center items-center lg:items-start flex-col lg:flex-row-reverse ">
        <div class=" max-w-md">
          <h1
            class={`${
              animate.value && "animate-fade-down"
            } animate-delay-300 animate-duration-1000 text-[14rem] uppercase ease-in text-stroke text-base-300`}>
            JOIN US
          </h1>
        </div>
      </div>
    </main>
  )
})

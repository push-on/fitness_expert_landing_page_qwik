import { component$, useStylesScoped$ } from "@builder.io/qwik"
import styles from "./font.css?inline"

export const Hero = component$(() => {
  useStylesScoped$(styles)
  return (
    <main
      class="hero min-h-screen bg-base-300 "
      style="background-image: url(./images/hero_bg.webp);">
      <div class="hero-overlay bg-opacity-50 backdrop-blur-sm  bg-base-300"></div>

      <div class="hero-content flex-col lg:flex-row  space-x-10">
        <img
          decoding="async"
          loading="lazy"
          srcSet="./images/hero.webp"
          alt="hero"
          width="400"
          height="550"
          class=" max-w-sm rounded-lg shadow-2xl shadow-black  animate-fade-right animate-duration-1000 animate-delay-150 animate-ease-in-out animate-normal animate-fill-both"
        />
        <div class="max-w-md  lg:max-w-sm ">
          <h1 class="text-9xl flex justify-center lg:justify-start gap-4 lg:gap-0 lg:text-9xl lg:text-left flex-wrap ">
            <section class="animate-fade-down animate-delay-75 text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-600">
              YOUR
            </section>
            <section class="animate-fade-down animate-delay-150 text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-600">
              FITNESS
            </section>
            <section class="animate-fade-down animate-delay-200 text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-red-900">
              JOURNEY
            </section>
          </h1>
          <p class="text-center lg:text-left py-2 text-2xl animate-fade-left animate-delay-500 ">
            Starts today. <br />
            Personal training <br />
            with Zafir Anam.
          </p>
          <div class="flex justify-center lg:justify-start mt-6">
            <button class="btn btn-outline btn-primary animate-fade-left animate-delay-500 uppercase">
              LET'S GO
            </button>
          </div>
        </div>
      </div>
    </main>
  )
})

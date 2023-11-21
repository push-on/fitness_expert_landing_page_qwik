import { component$ } from "@builder.io/qwik"

export const Hero = component$(() => {
  return (
    <main class="hero min-h-screen bg-base-300 ">
      <div class="hero-content flex-col lg:flex-row ">
        <img
          decoding="async"
          loading="lazy"
          srcSet="./images/hero.webp"
          alt="hero"
          width="300"
          height="450"
          class="max-w-sm rounded-lg shadow-2xl shadow-black "
        />
        <div>
          <h1 class="text-5xl font-bold">YOUR FITNESS JOURNEY</h1>
          <p class="py-6">
            Start today. <br />
            Personal training <br />
            with Zafir Anam.
          </p>
          <button class="btn btn-outline btn-primary">LET'S GO</button>
        </div>
      </div>
    </main>
  )
})

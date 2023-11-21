import { component$ } from "@builder.io/qwik"

export const HeroOverlay = component$(() => {
  return (
    <main class="hero min-h-screen bg-base-300 ">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <img
          decoding="async"
          loading="lazy"
          srcSet="./images/heroOverlay.jpg"
          alt="hero"
          width="300"
          height="450"
          class="max-w-sm rounded-lg shadow-2xl shadow-black "
        />
        <div class="max-w-xl">
          <h1 class="text-5xl font-bold">
            EXPERIENCE THE BENEFITS OF PERSONAL TRAINER
          </h1>
          <p class="py-6 ">
            Zafir Anam is an Expert in fitness, nutrition, and wellness
            dedicated to understanding your unique fitness needs and goals. We
            offer personalised target-driven training programs that will help
            you reach your goals quickly and sustainably. The concept is unique.
            We combine the best equipment and coaches with bespoke fitness and
            nutrition plans to power your progress, If you bring the
            determination, we promise we'll achieve your goals together.
          </p>
          <button class="btn btn-outline btn-primary">Get Started</button>
        </div>
      </div>
    </main>
  )
})

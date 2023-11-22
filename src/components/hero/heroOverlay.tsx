import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"

export const HeroOverlay = component$(() => {
  const animate = useSignal(false)

  useVisibleTask$(() => {
    animate.value = true
  })
  return (
    <main class="hero min-h-screen bg-base-300 ">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <img
          decoding="async"
          loading="lazy"
          srcSet="./images/heroOverlay.webp"
          alt="hero"
          width="300"
          height="450"
          class={`${
            animate.value && "animate-fade-left"
          } animate-delay-300 animate-duration-1000 max-w-sm rounded-lg shadow-2xl shadow-black `}
        />
        <div class="max-w-xl">
          <h1
            class={`${
              animate.value && "animate-fade-right"
            } animate-delay-500 animate-duration-1000 text-5xl font-bold`}>
            EXPERIENCE THE BENEFITS OF PERSONAL TRAINER
          </h1>
          <p
            class={`${
              animate.value && "animate-fade-right"
            } animate-delay-700 animate-duration-1000 py-6 `}>
            Zafir Anam is an Expert in fitness, nutrition, and wellness
            dedicated to understanding your unique fitness needs and goals. We
            offer personalised target-driven training programs that will help
            you reach your goals quickly and sustainably. The concept is unique.
            We combine the best equipment and coaches with bespoke fitness and
            nutrition plans to power your progress, If you bring the
            determination, we promise we'll achieve your goals together.
          </p>
          <button
            class={`${
              animate.value && "animate-fade-right"
            } btn btn-outline btn-primary animate-delay-1000 animate-duration-1000`}>
            Get Started
          </button>
        </div>
      </div>
    </main>
  )
})

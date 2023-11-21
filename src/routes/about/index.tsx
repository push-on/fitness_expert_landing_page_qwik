import { component$ } from "@builder.io/qwik"

export default component$(() => {
  return (
    <>
      <main>
        <div class="hero min-h-screen">
          <div class="hero-overlay "></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">ABOUT</h1>
              <p class="mb-5">
                About me About Zafir Anam <br />
                Meet Your Certified Fitness Expert
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
})

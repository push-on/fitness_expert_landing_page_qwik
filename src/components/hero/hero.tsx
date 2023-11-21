import { component$, useStylesScoped$ } from "@builder.io/qwik"
import heroStyle from "./hero.css?inline"
 

export const Hero = component$(() => {
  useStylesScoped$(heroStyle)

  return (
    <main>
      <img
        decoding="async"
        loading="lazy"
        srcSet="./images/hero.webp"
        alt="hero"
        width="300"
        height="450"
      />
      <div>
        <div class="x">
          <h1>YOUR </h1>
          <h1>FITNESS</h1>
        </div>
        <h1 class="red">JOURNEY</h1>
        <p>
          Start today. <br />
          Personal training <br />
          with Zafir Anam.
        </p>
        <a href="/packages">LET'S GO</a>
      </div>
    </main>
  )
})

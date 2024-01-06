import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"

import { packages } from "~/data/packages"  

export const PriceCards = component$(() => {
  const animate = useSignal(false)

  useVisibleTask$(() => {
    animate.value = true
  })

  return (
    <div class="hero py-20">
      <div class="hero-content grid md:grid-cols-2 gap-12 p-4">
        {Object.entries(packages).map(
          ([packageNumber, { title, price, details }]) => (
            <div
              class={`${animate.value &&
                "animate-fade-right animate-duration-1000 animate-delay-300 ease-in-out"
                } card bg-base-300 shadow-3xl shadow-black/50`}
              key={packageNumber}>
              <div class="card-body">
                <h2
                  class={`${animate.value &&
                    "animate-fade-right animate-duration-1000 animate-delay-500 ease-in-out"
                    } card-title`}>
                  Package {packageNumber}
                </h2>
                <p
                  class={`${animate.value &&
                    "animate-fade-right animate-duration-1000 animate-delay-700 ease-in-out"
                    } text-base-content text-opacity-40`}>
                  {title}
                </p>
                <p
                  class={`${animate.value &&
                    "animate-fade-right animate-duration-1000 animate-delay-1000 ease-in-out"
                    } text-3xl font-bold`}>
                  {price}
                </p>
                <div class="card-actions justify-end">
                  <button
                    class={`${animate.value &&
                      "animate-fade-left animate-duration-1000 animate-delay-1000 ease-in-out"
                      } btn btn-primary btn-outline`}>
                    Buy Now
                  </button>
                </div>
              </div>
              <ul class="menu p-4 shadow-lg bg-base-200 rounded-box">
                {details.map((detail: string, index: number) => (
                  <li key={index}>
                    <p
                      class={`${animate.value &&
                        "animate-fade-left animate-duration-1000 animate-delay-1000 ease-in-out"
                        }`}>
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  )
})

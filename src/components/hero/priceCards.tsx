import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { packages } from "~/data/packages"

export const PriceCards = component$(() => {
  const animate = useSignal(false)

  useVisibleTask$(() => {
    animate.value = true
  })

  return (
    <div class="grid place-items-center  w-full">
      <div class='max-w-6xl w-full py-24 px-4 content-center justify-center'>

        <div class='grid md:grid-cols-3 grid-cols-1 w-full gap-8 '>


          <div class={`${animate.value &&
            "animate-fade-right animate-duration-1000 animate-delay-200 ease-in-out"
            }  card w-full mt-6  bg-base-300 shadow-xl shadow-black border-4 border-slate-800 hover:border-slate-700`}>
            <div class="card-body pt-12 pb-16  items-center text-center ">
              <h2 class={`${animate.value &&
                "animate-fade-right animate-duration-1000 animate-delay-700 ease-in-out"
                }card-title text-xl`}>{packages[0].title}</h2>
              <h2 class="font-bold mt-4 text-4xl">{packages[0].price}</h2>
              <button class="btn btn-sm mt-8 btn-outline normal-case w-full" >Buy Now</button>
              <ul class="text-left mt-4 menu">
                {packages[2].details.map((detail: string, index: number) => (
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
          </div>


          <div class={` ${animate.value &&
            "animate-fade-right animate-duration-1000 animate-delay-500 ease-in-out"
            } card w-full mt-6  bg-base-300 shadow-2xl shadow-black border-4 border-slate-700  hover:border-slate-600 transition-colors duration-300`}>
            <div class="card-body pt-12 pb-16 items-center  ">
              <div class="badge badge-secondary badge-sm absolute text-white mt-1 ml-1 left-2 top-2">Most Popular</div>
              <h2 class={`${animate.value &&
                "animate-fade-right animate-duration-1000 animate-delay-700 ease-in-out"
                }card-title text-xl`}>{packages[1].title} </h2>
              <h2 class="font-bold mt-4 text-4xl text-center inline-block">{packages[1].price}</h2>
              <button class="btn btn-sm mt-8 btn-primary normal-case w-full" >Buy Now</button>
              <ul class="text-left mt-4 menu">
                {packages[2].details.map((detail: string, index: number) => (
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
          </div>


          <div class={`${animate.value &&
            "animate-fade-right animate-duration-1000 animate-delay-700 ease-in-out"
            }  card w-full mt-6  bg-base-300 shadow-2xl shadow-black border-4 border-slate-800  hover:border-slate-700`}>
            <div class="card-body pt-12 pb-16 items-center  ">
              <h2 class={`${animate.value &&
                "animate-fade-right animate-duration-1000 animate-delay-700 ease-in-out"
                }card-title text-xl`}>{packages[2].title} </h2>
              <h2 class="font-bold mt-4 text-4xl text-center inline-block">{packages[2].price}</h2>
              <button class="btn btn-sm mt-8 btn-outline normal-case w-full" >Buy Now</button>
              <ul class="text-left mt-4 menu">
                {packages[2].details.map((detail: string, index: number) => (
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
          </div>

        </div>
      </div>
    </div>
  )
})

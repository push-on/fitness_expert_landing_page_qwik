import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { testimonials } from "~/data/testimonials"

export const Testimonial = component$(() => {
	const animate = useSignal(false)

	useVisibleTask$(() => {
		animate.value = true

	})

	return (
		<div class="grid place-items-center w-full ">
			<div class="max-w-6xl px-4 py-24 content-center justify-center ">
				<h1 class={`${animate.value &&
					"animate-fade-right animate-duration-1000 animate-delay-300 ease-in-out"
					} text-3xl  text-center font-bold`}>Testimonials</h1>
				<div class="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8 ">
					{
						testimonials.map((t, k) => {
							return (
								<div key={k} class={`${animate.value &&
									"animate-fade-right animate-duration-1000 animate-delay-500 ease-in-out"
									} card w-full bg-base-300 shadow-black shadow-xl `}>
									<figure class="px-10 pt-10">
										<img
											alt="hero"
											width="400"
											height="400"
											decoding="async"
											loading="lazy"
											class={`${animate.value &&
												"animate-fade-right animate-duration-1000 animate-delay-150 ease-in-out"
												} mask w-28 h-28 mask-circle object-cover`}
											src={t.image} />
									</figure>
									<div class="card-body text-justify">
										<div class="text-base">
											<p class={`
										${animate.value &&
												"animate-fade-right animate-duration-1000 animate-delay-1000 ease-in-out"
												}
										
										text-slate-500`}>{t.name}</p>
											<p class={`
										
										${animate.value &&
												"animate-fade-right animate-duration-1000 animate-delay-1000 ease-in-out"
												}
										text-slate-500`}>{t.packageName}</p>
										</div>
										<p class={`${animate.value &&
											"animate-fade-right animate-duration-1000 animate-delay-700 ease-in-out"
											}  text-sm `}>{t.review}</p>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
})

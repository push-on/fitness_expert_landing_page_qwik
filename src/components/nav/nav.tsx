import { component$ } from "@builder.io/qwik"

export const Nav = component$(() => {
  return (
    <div class="border-b border-slate-800 bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-50 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
      <div class="navbar ">
        <div class="navbar-start ">
          <a href="/" class="btn btn-ghost text-3xl font-black">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              class="fill-current animate-jump-in animate-delay-500">
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            
            <section class="animate-fade-right animate-delay-100 text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400">
              ZAFIR
            </section>
            <section class="animate-fade-right animate-delay-300 text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-red-900">
              ANAM
            </section>
          </a>
        </div>
        <div class="navbar-end">
          <div>
            <div class="drawer drawer-end">
              <input id="my-drawer" type="checkbox" class="drawer-toggle" />
              <div class="drawer-content">
                <label
                  for="my-drawer"
                  class="btn btn-primary drawer-button btn-outline ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                  MENU
                </label>
              </div>
              <div class="drawer-side z-50">
                <label
                  for="my-drawer"
                  aria-label="close sidebar"
                  class="drawer-overlay"></label>
                <ul class="menu p-4 w-96 min-h-full bg-base-100 text-base-content ">
                  <li>
                    <a
                      class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent "
                      href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-home">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      HOME
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent "
                      href="/about">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-info">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent "
                      href="/training">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-dumbbell">
                        <path d="m6.5 6.5 11 11" />
                        <path d="m21 21-1-1" />
                        <path d="m3 3 1 1" />
                        <path d="m18 22 4-4" />
                        <path d="m2 6 4-4" />
                        <path d="m3 10 7-7" />
                        <path d="m14 21 7-7" />
                      </svg>
                      PERSONAL TRAINING
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent "
                      href="/packages">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-package">
                        <path d="m7.5 4.27 9 5.15" />
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                      PACKAGES
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent "
                      href="/book">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-calendar-check">
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="m9 16 2 2 4-4" />
                      </svg>
                      BOOK
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent "
                      href="/contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-message-square">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

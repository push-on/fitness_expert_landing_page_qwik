import { component$ } from "@builder.io/qwik"

export const Nav = component$(() => {
  return (
    <div class="navbar bg-base-100 ">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">
          LOGO
        </a>
      </div>
      <div class="flex-none">
        <div class="drawer drawer-end">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <label for="my-drawer" class="btn btn-primary drawer-button btn-outline">
               MENU
            </label>
          </div>
          <div class="drawer-side z-50">
            <label
              for="my-drawer"
              aria-label="close sidebar"
              class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content ">
              <li>
                <a class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent " href="/">HOME</a>
              </li>
              <li>
                <a class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent " href="/about">ABOUT</a>
              </li>
              <li>
                <a class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent " href="/">PERSONAL TRAINING</a>
              </li>
              <li>
                <a class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent " href="/packages">PACKAGES</a>
              </li>
              <li>
                <a class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent " href="/book">BOOK</a>
              </li>
              <li>
                <a class="text-left text-2xl whitespace-nowrap font-extrabold hover:text-accent " href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

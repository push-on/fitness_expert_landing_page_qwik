import { component$ } from "@builder.io/qwik"


const packages = {
  "01": {
    title: "40-Day Fitness Program",
    price: "990 BDT",
    details: [
      "Program Duration: 40 Days",
      "Customized diet plan",
      "Customized home workout",
      "Tailored for Fat loss/Weight loss/Weight gain",
      "Building the habit of consistency",
      "Flexible & affordable nutrition program",
      "Bi-weekly diet & training adjustments after closely monitoring progress",
    ],
  },
  "02": {
    title: "Premium Coaching - 4 Weeks",
    price: "1990 BDT",
    details: [
      "Program Duration: 4 Weeks",
      "Customized diet plan",
      "Customized Gym/Home workout",
      "Tailored for Muscle build/Bulk up/Fat loss/Weight loss/Six-pack",
      "Flexible & affordable nutrition program",
      "Weekly diet & training adjustments after closely monitoring performance",
      "Supplementation/lifestyle guide",
    ],
  },
  "03": {
    title: "Premium Coaching - 12 Weeks",
    price: "3490 BDT",
    details: [
      "Program Duration: 12 Weeks",
      "Customized diet plan",
      "Customized Gym/Home workout",
      "Tailored for Muscle build/Bulk up/Fat loss/Weight loss/Six-pack",
      "Flexible & affordable nutrition program",
      "Weekly diet & training adjustments after closely monitoring performance",
      "Supplementation/lifestyle guide",
    ],
  },
  "04": {
    title: "Premium Coaching - 24 Weeks",
    price: "5450 BDT",
    details: [
      "Program Duration: 24 Weeks",
      "Customized diet plan",
      "Customized Gym/Home workout",
      "Tailored for Muscle build/Bulk up/Fat loss/Weight loss/Six-pack",
      "Flexible & affordable nutrition program",
      "Weekly diet & training adjustments after closely monitoring performance",
      "Supplementation/lifestyle guide",
    ],
  },
}

export const PriceCards = component$(() => (
  <div class="hero py-20">
    <div class="hero-content grid md:grid-cols-2 gap-12 p-4">
      {Object.entries(packages).map(
        ([packageNumber, { title, price, details }]) => (
          <div class="card bg-base-300 shadow-3xl shadow-black/50" key={packageNumber}>
            <div class="card-body">
              <h2 class="card-title">Package {packageNumber}</h2>
              <p class="text-base-content text-opacity-40">{title}</p>
              <p class="text-3xl font-bold">{price}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary btn-outline">Buy Now</button>
              </div>
            </div>
            <ul class="menu p-4 shadow-lg bg-base-200 rounded-box">
              {details.map((detail, index) => (
                <li key={index}>
                  <p >{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  </div>
))

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        envoyFont: ["Oxygen"],
      },
      backgroundImage: {
        envoy_pattern: "url('./assets/envoy_background.jpg')",
        envoy_icon: "url('./assets/Envoy-logo.png')",
        default_profile: "url('./assets/User-icon.png')",
        total_user: "url('./assets/icon1.png')",
        total_post: "url('./assets/icon2.png')",
        total_cea: "url('./assets/icon3.png')",
        total_citc: "url('./assets/icon4.png')",
        total_csm: "url('./assets/icon5.png')",
        total_cste: "url('./assets/icon6.png')",
        total_cot: "url('./assets/icon7.png')",
        profile_icon: "url('./assets/profile-icon.png')",
        wip: "url('./assets/wip.svg')",
        checkIcon: "url('./assets/check.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};

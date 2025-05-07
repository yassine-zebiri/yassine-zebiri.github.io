/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{js,ts,jsx,tsx}", // ← مجلد App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // ← في حال تستخدم صفحات قديمة
    "./components/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
    extend: {
        colors: {
            primary: "#050e20",
        }
    }
};
export const plugins = [];
  
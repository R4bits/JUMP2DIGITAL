/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'background': 'hsl(187, 64%, 15%)',
        'input': 'hsl(175, 30%, 36%)',
        'placeholder': 'hsl(182, 43%, 80%)',
        'radioactive': 'hsl(65, 67%, 56%)',
        'card': 'hsl(184, 82%, 29%)',
        'breed': 'hsl(91, 77%, 35%)'
      },
      gridTemplateCols: {
        '4': 'repeat(1, minmax(100px, 1fr))',
      },
    },
    plugins: [],
  }
}
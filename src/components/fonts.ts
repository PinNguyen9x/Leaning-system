import { Manrope, Roboto } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})
// const arialNarrow = localFont({
//   src: [
//     {
//       path: "../app/Arial Narrow.ttf",
//       style: "normal",
//     },
//     {
//       path: "../app/Arial Narrow Italic.ttf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "../app/Arial Narrow Bold.ttf",
//       weight: "700",
//     },
//     {
//       path: "../app/Arial Narrow Bold Italic.ttf",
//       weight: "700",
//       style: "italic",
//     },
//   ],
//   display: "swap",
// });
export { manrope, roboto }

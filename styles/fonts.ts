import { Inter } from 'next/font/google';
import localFont from 'next/font/local'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});
const clashDisplay = localFont({
  src: './ClashDisplay-Variable.woff2',
  variable: '--font-clash-display',
}); 

export {
  inter,
  clashDisplay
}
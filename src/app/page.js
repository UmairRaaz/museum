import MainPage from "@/components/MainPage";
import { Noto_Sans } from 'next/font/google'
const noto_sans = Noto_Sans({
  weight : ["300", '400' ,'500', '700', '800', '900'],
  subsets: ["latin"],
  display:'swap'
})
export default function Home() {
  return (
  <div className={noto_sans.className}>
    <MainPage/>
  </div>
  )
}

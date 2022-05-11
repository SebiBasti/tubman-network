import Image from "next/image";
import banner from '../../styles/banner.module.scss'

export default function Banner() {
  return (
    <>
      <div className={ banner.container }>
        <h1>
          Every great dream begins with a dreamer.
        </h1>
      </div>
    </>
  )
}
import '../styles/footer.module.css';
import Image from 'next/image';

export default function Footer() {
    return (
      <>
        <p>Footer Area</p>
        <ul>
          <li><Image src='/images/icons/blackhole.svg' alt='' width={30} height={30}/></li>
        </ul>
      </>
    )
  }
  
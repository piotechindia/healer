import Image from 'next/image';

export default function Footer() {
    return (
      <footer className='flex-center flex-space-between p1'>
        <p>&copy;Healer - Made with ❤️ by <span className="copyright">Piotech <span style={{fontWeight: 'bold'}}>INDIA</span></span></p>
        <ul className='flex-center gap1'>
          <li className='backToTop'><Image src='/images/icons/blackhole.svg' alt='' width={30} height={30}/></li>
        </ul>
      </footer>
    )
  }
  
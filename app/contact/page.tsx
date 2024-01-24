import Image from "next/image";
import style from './contact.module.css';

export default function Contact() {
  return (
    <>
      <div className={`flex-center flex-column ${style.contact}`}>
        <div className={`pt3 pb3 ${style.heading}`}>
          <h1>Contact Our Friendly Team</h1>
        </div>
        <p className="pt1">Let us know how can we help</p>
        <div className={`flex-space-around pt3 pb3 gap5 ${style.info}`}>
          <div className={`flex-column gap2 ${style.getInTouch}`}>
            <div className={`flex gap1 ${style.contactInfo}`}>
              <Image src='/images/icons/location.svg' alt="" width={30} height={30} />
              <div className={`flex-coloumn ${style.data}`}>
                <h2>Visit Us</h2>
                <p>visit our office</p>
                <span>Directions Google Map</span>
              </div>
            </div>
            <div className={`flex gap1 ${style.contactInfo}`}>
              <Image src='/images/icons/phone.svg' alt="" width={30} height={30} />
              <div className={`flex-coloumn ${style.data}`}>
                <h2>Call Us</h2>
                <p>Mon-Sat (8:00 a.m. - 11:00 p.m.)</p>
                <span>+91 82396 10162</span>
              </div>
            </div>
            <div className={`flex gap1 ${style.contactInfo}`}>
              <Image src='/images/icons/mail.svg' alt="" width={30} height={30} />
              <div className={`flex-coloumn ${style.data}`}>
                <h2>Email</h2>
                <p>We are here to help</p>
                <span>contactpiotechindia@gmail.com</span>
              </div>
            </div>
            <div className={`flex gap1 ${style.contactInfo}`}>
              <Image src='/images/icons/mail.svg' alt="" width={30} height={30} />
              <div className={`flex-coloumn ${style.data}`}>
                <h2>Chat to support</h2>
                <p>Speak to our friendly team</p>
                <span>+91 82396 10162</span>
              </div>
            </div>
          </div>
          <form className={`flex-column gap1 ${style.feedback}`} action="" method="post" >
            <label>Your Name: </label>
            <input className="pt1 pb1 pr2 pl2" type="text" name="yourName" value="" />
            <label>Your Email: </label>
            <input className="pt1 pb1 pr2 pl2" type="email" name="yourEmail" value="" />
            <label>Your Message: </label>
            <textarea className="pt1 pb1 pr2 pl2" name="Name"></textarea>
            <button className={`pt1 pb1 pr3 pl3 ${style.submit}`} type="submit" name="">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};
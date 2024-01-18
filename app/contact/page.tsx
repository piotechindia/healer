import Image from "next/image";
import style from './contact.module.css';

export default function Contact(){
  return (
    <>
    <div className={style.contact}>
        <div className={style.heading}>
            <h1>Contact Our Friendly Team</h1>
            <p>Let us know how can we help</p>
        </div>
        <div className={style.info}>
            <div className={style.getInTouch}>
                <div className={style.contactInfo}>
                  <Image src='/images/icons/location.svg' alt="" width={30} height={30}/>
                    <h2>Visit Us</h2>
                    <p>visit our office</p>
                  <span>Directions Google Map</span>
                </div>
                <div className={style.contactInfo}>
                  <Image src='/images/icons/phone.svg' alt="" width={30} height={30}/>
                    <h2>Call Us</h2>
                    <p>Mon-Sat (8:00 a.m. - 11:00 p.m.)</p>
                    <span>+91 82396 10162</span>
                </div>
                <div className={style.contactInfo}>
                  <Image src='/images/icons/mail.svg' alt="" width={30} height={30}/>
                    <h2>We are here to help</h2>
                    <span>contactpiotechindia@gmail.com</span>
                </div>
                <div className={style.contactInfo}>
                  <Image src='/images/icons/mail.svg' alt="" width={30} height={30}/>
                    <h2>Chat to support</h2>
                    <p>Speak to our friendly team</p>
                    <span>+91 82396 10162</span>
                </div>
            </div>
            <form className={style.feedback} action="" method="post" >
                <label className={style.inputLabel}>Your Name: </label><input className={style.inputLabel} type="text" name="yourName" value=""/>
                <label className={style.inputLabel}>Your Email: </label><input className={style.inputLabel} type="email" name="yourEmail" value=""/>
                <label className={style.inputLabel}>Your Message: </label><textarea className={style.inputLabel} name="Name"></textarea>
                <button className={style.submit} type="submit" name="">Send Message</button>
            </form>
        </div>
    </div>
    </>
  );
};

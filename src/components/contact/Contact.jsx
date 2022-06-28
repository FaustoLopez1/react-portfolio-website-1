import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FiTwitter} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x8pdbwq', 'template_89um9w2', form.current, 'KBscjT-kibWAnzWCb')

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
        <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>lopezfausto12345@gmail.com</h5>
          <a href='mailto:lopezfausto12345@gmail.com' target='_blank'>Send A Email</a>
        </article>

        <article className='contact_option'>
          <RiMessengerLine className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>Fausto Lopez</h5>
          <a href='https://m.me/fausto.lopez.90' target='_blank'>Send A Facebook Message</a>
        </article>

        <article className='contact_option'>
          <FiTwitter className='contact_option-icon'/>
          <h4>Twitter</h4>
          <h5>Fausto_Lopez44</h5>
          <a href='https://twitter.com/messages/compose?recipient_id=2274076892' target='_blank'>Send A Message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
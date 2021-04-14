import "./style.css"

const Contact = () => {
    return (
        <div className="contact">
        <h1>Contact me!</h1>
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bhopal+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>

        <h4>Phone</h4>
        <p>+91 7694979466</p>
  
        <h4>Email</h4>
        <p>sunidhisharma1814@grmail.com</p>
  
        <h4>Address</h4>
        <p>Hamidia Road, Bhopal, Madhya Pradesh</p>
      </div>
    );
  };
  

export default Contact;

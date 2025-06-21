import Social from "../components/Social";
import { useState } from "react"
import emailjs from '@emailjs/browser';

const Contact=()=>{
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form,
        process.env.REACT_APP_PUBLIC_KEY       
        ).then(() => {
            alert("Message sent! ✅");
            setForm({ name: "", email: "", message: "" });
        }).catch((error) => {
            alert("Message failed to send ❌");
        });
    };

    return(
        <div className="container contact d-flex justify-content-center min-vh-100 align-items-center">
        <div className="row contact-form bg-white rounded mx-3 shadow">
            <div className="col-12 col-md-6 p-4 pb-1 contact-left rounded text-center">
                <h2 className=" mb-3">Get in Touch</h2>
                <p className="mb-3 text-light-emphasis ">Have a question or proposal? I'd love to hear from you!</p>
                <div className="contact-info mb-2">
                    <h6 className="fw-normal"><i className="bi bi-telephone-fill me-2"></i>9384596296</h6>
                    <h6 className="fw-normal"><i className="bi bi-envelope-fill me-2"></i>aksayaam2003@gmail.com</h6>
                    <h6 className="fw-normal"><i className="bi bi-geo-alt-fill me-2"></i>Ondipudur, Jallimedu, Coimbatore</h6>
                </div>
                <div className="mb-2">
                    <Social />
                </div>
                <img src="Email.png"  className="img-fluid" alt="email" />
            </div>
            <div className="col-12 col-md-6 p-4">
                <h2 className="text-center mb-3">Contact Me</h2>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                    <label className="form-label fw-bold mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                        placeholder="Your full name"
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label fw-bold mb-2">Email address</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                        placeholder="name@example.com"
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label fw-bold mb-2">Message</label>
                    <textarea
                        className="form-control"
                        name="message"
                        rows="4"
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Write your message here..."
                    ></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-custom w-100 mt-2">Send Message</button>
                </form>
        </div>
        </div>
        </div>
    )
}

export default Contact;
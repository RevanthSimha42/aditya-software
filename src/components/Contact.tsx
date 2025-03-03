import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const contactRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate");
				}
			},
			{ threshold: 0.1 }
		);

		if (contactRef.current) {
			observer.observe(contactRef.current);
		}

		return () => {
			if (contactRef.current) {
				observer.unobserve(contactRef.current);
			}
		};
	}, []);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real application, you would send the form data to a server
		console.log("Form submitted:", formData);
		setIsSubmitted(true);

		// Reset form after submission
		setTimeout(() => {
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
			setIsSubmitted(false);
		}, 3000);
	};

	return (
		<section id="contact" className="contact" ref={contactRef}>
			<div className="contact-background">
				<img
					src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
					alt="Contact Background"
				/>
				<div className="contact-overlay"></div>
			</div>

			<div className="section-header">
				<h2>Get In Touch</h2>
				<p>Want to build a powerful digital presence? Let's connect!</p>
			</div>

			<div className="contact-container">
				<div className="contact-info">
					<div className="contact-card">
						<div className="contact-icon">
							<Phone size={24} />
						</div>
						<div className="contact-details">
							<h3>Call Us</h3>
							<p>+91 77022 51024</p>
						</div>
					</div>

					<div className="contact-card">
						<div className="contact-icon">
							<Mail size={24} />
						</div>
						<div className="contact-details">
							<h3>Email Us</h3>
							<p>adityamr820@gmail.com</p>
						</div>
					</div>

					<div className="contact-card">
						<div className="contact-icon">
							<MapPin size={24} />
						</div>
						<div className="contact-details">
							<h3>Visit Us</h3>
							<p>
								Bharat Nagar, Kukatpally, Hyderabad, Telangana, India – 500018
							</p>
						</div>
					</div>
				</div>

				<div className="contact-form-container">
					<form className="contact-form" onSubmit={handleSubmit}>
						{isSubmitted ? (
							<div className="form-success">
								<h3>Thank you for your message!</h3>
								<p>We'll get back to you soon.</p>
							</div>
						) : (
							<>
								<div className="form-group">
									<input
										type="text"
										name="name"
										placeholder="Your Name"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="form-group">
									<input
										type="email"
										name="email"
										placeholder="Your Email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="form-group">
									<input
										type="text"
										name="subject"
										placeholder="Subject"
										value={formData.subject}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="form-group">
									<textarea
										name="message"
										placeholder="Your Message"
										value={formData.message}
										onChange={handleChange}
										required
									></textarea>
								</div>

								<button type="submit" className="btn btn-primary">
									Send Message
								</button>
							</>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;

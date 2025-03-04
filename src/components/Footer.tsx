import React from "react";
import { Code2, Twitter, Linkedin, Mail } from "lucide-react";
import "../styles/Footer.css";
import logo from "../components/public/logo.png";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-logo">
					<img src={logo} alt="logo" width="100" height="50" />
					<h2>Aditya Software Solutions</h2>
					<p>Transforming ideas into powerful digital experiences</p>

					<div className="social-links">
						{/* <a href="#" aria-label="Facebook"><Facebook size={20} /></a> */}
						<a href="#" aria-label="Twitter">
							<Twitter size={20} />
						</a>
						{/* <a href="#" aria-label="Instagram"><Instagram size={20} /></a> */}
						<a href="#" aria-label="LinkedIn">
							<Linkedin size={20} />
						</a>
						{/* <a href="#" aria-label="Github"><Github size={20} /></a> */}
						<a href="#" aria-label="Gmail">
							<Mail size={20} />
						</a>
					</div>
				</div>

				<div className="footer-links">
					<div className="footer-links-column">
						<h3>Services</h3>
						<ul>
							<li>
								<a href="#services">Web Development</a>
							</li>
							<li>
								<a href="#services">E-commerce Solutions</a>
							</li>
							<li>
								<a href="#services">Custom Software</a>
							</li>
							<li>
								<a href="#services">UI/UX Design</a>
							</li>
						</ul>
					</div>

					<div className="footer-links-column">
						<h3>Company</h3>
						<ul>
							<li>
								<a href="#home">About Us</a>
							</li>
							<li>
								<a href="#expertise">Our Work</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
						</ul>
					</div>

					<div className="footer-links-column">
						<h3>Legal</h3>
						<ul>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Terms of Service</a>
							</li>
							<li>
								<a href="#">Cookie Policy</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<p>
					&copy; {currentYear} Aditya Software Solutions. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;

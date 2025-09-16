import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import linkedln from '../assets/img/navLinkedln.png';
import github from '../assets/img/navGithub.png';
import gmail from '../assets/img/navGmail-whitescale.png';
import discord from '../assets/img/navDiscord.png';
import whatsapp from '../assets/img/navWhatsapp.png';
/*
import telegram from '../assets/img/navTelegram.png';
import medium from '../assets/img/navMedium.png';
import facebook from '../assets/img/navFacebook.svg';
import instagram from '../assets/img/navInstagram.svg';
*/

function Footer() {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<MailchimpForm />
					<Col size={12} sm={6} md={6} lg={6} xs={10}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/juansilvadesign/"
							>
								<img src={linkedln} alt="LinkedIn" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/juansilvadesign"
							>
								<img src={github} alt="GitHub" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="mailto:jaypy.uxdesign@gmail.com/"
							>
								<img src={gmail} alt="Gmail" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://api.whatsapp.com/send?phone=5521966442965&text=I%27ve%20reviewed%20your%20%20and%20I%27am%20reaching%20out%20to%20offer%20you%20a%20job%20opportunity."
							>
								<img src={whatsapp} alt="WhatsApp" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://discordapp.com/users/908604345992491018"
							>
								<img src={discord} alt="Discord" />
							</a>
							{/*
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://t.me/jaypy06"
							>
								<img src={telegram} alt="Telegram" />
							</a>
							<a 
								target="_blank"

								href="https://medium.com/@JuanPablo./">

								<img src={medium} alt="Medium" />
							</a> */}
							{/* <a href="https://www.facebook.com/people/Juan-Pablo/100075404547097/">
								<img src={facebook} alt="Facebook" />
							</a> */}
							{/* <a href="https://www.instagram.com/jaypy06/">
								<img src={instagram} alt="Instagram" />
							</a> */}
						</div>
						<p>Copyright 2022. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
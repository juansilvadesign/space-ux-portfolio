import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import linkedln from '../assets/img/navLinkedln.png';
import github from '../assets/img/navGithub.png';
import telegram from '../assets/img/navTelegram.png';
import discord from '../assets/img/navDiscord.png';
/*
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
								href="https://www.linkedin.com/in/jaypy/"
							>
								<img src={linkedln} alt="linkedIn" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/JuanPabloDesigner"
							>
								<img src={github} alt="github" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://t.me/jaypy06"
							>
								<img src={telegram} alt="telegram" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://discordapp.com/users/908604345992491018"
							>
								<img src={discord} alt="discord" />
							</a>
							{/* <a href="https://medium.com/@JuanPablo./">
								<img src={medium} alt="medium" />
							</a> */}
							{/* <a href="https://www.facebook.com/people/Juan-Pablo/100075404547097/">
								<img src={facebook} alt="facebook" />
							</a> */}
							{/* <a href="https://www.instagram.com/jaypy06/">
								<img src={instagram} alt="instagram" />
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
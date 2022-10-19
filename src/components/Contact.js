import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img1.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import MessageSuccess from "./MessageSuccess";
import MessageError from "./MessageError";

function Contact() {
	const formInitialDetails = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	};
	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState("Send");
	const [status, setStatus] = useState({});

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus({
			message: null,
		});

		const getDate = new Date();
		const formatedDate = `${getDate.getDate()}-${
			getDate.getMonth() + 1
		}-${getDate.getFullYear()} ${getDate.toLocaleTimeString()}`;

		setButtonText("Sending... Don't close the page.");

		const response = await fetch(
			"https://formsubmit.co/ajax/krystian.kruszelnicki1@gmail.com",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json;charset=utf-8",
				},
				body: JSON.stringify({
					time: formatedDate,
					...formDetails,
				}),
			}
		).catch((error) => console.log(error));

		setButtonText("Send");

		let result = await response.json();

		if (result.success === "true") {
			setStatus({
				success: true,
				message: <MessageSuccess />,
			});
			setFormDetails(formInitialDetails);
		} else {
			setStatus({
				success: false,
				message: <MessageError />,
			});
		}
	};

	return (
		<section className="contact" id="connect">
			<Container>
				<Row className="align-items-center">
					<Col size={12} md={6}>
						<TrackVisibility offset={400}>
							{({ isVisible }) => (
								<img
									className={
										isVisible
											? "animate__animated animate__zoomIn"
											: "animate__animated animate__zoomOut"
									}
									src={contactImg}
									alt="Contact Us"
								/>
							)}
						</TrackVisibility>
					</Col>
					<Col size={12} md={6}>
						<TrackVisibility offset={500}>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__fadeIn"
											: "animate__animated animate__fadeOut"
									}
								>
									<h2>Get In Touch</h2>
									<form onSubmit={handleSubmit}>
										<Row>
											<Col size={12} sm={6} className="px-1">
												<input
													type="hidden"
													name="_subject"
													value="New submission!"
												/>
												<input
													name="firstName"
													type="text"
													value={formDetails.firstName}
													placeholder="First Name"
													onChange={(e) =>
														onFormUpdate("firstName", e.target.value)
													}
												/>
											</Col>
											<Col size={12} sm={6} className="px-1">
												<input
													name="lastName"
													type="text"
													value={formDetails.lastName}
													placeholder="Last Name"
													onChange={(e) =>
														onFormUpdate("lastName", e.target.value)
													}
												/>
											</Col>
											<Col size={12} sm={6} className="px-1">
												<input
													name="email"
													type="email"
													value={formDetails.email}
													placeholder="Email Address"
													onChange={(e) =>
														onFormUpdate("email", e.target.value)
													}
													required={true}
												/>
											</Col>
											<Col size={12} sm={6} className="px-1">
												<input
													name="phone"
													type="tel"
													value={formDetails.phone}
													placeholder="Phone No."
													onChange={(e) =>
														onFormUpdate("phone", e.target.value)
													}
												/>
											</Col>
											<Col size={12} className="px-1">
												<textarea
													name="message"
													rows="6"
													value={formDetails.message}
													placeholder="Message"
													onChange={(e) =>
														onFormUpdate("message", e.target.value)
													}
													required={true}
												></textarea>
												{status.message && status.message}
												<button type="submit">
													<span>{buttonText}</span>
												</button>
											</Col>
										</Row>
									</form>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Contact;

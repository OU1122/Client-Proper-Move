import { Modal as BaseModal } from "@mui/base/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/base/Button";
import { styled, css } from "@mui/system";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import useAuth from "../lib/useAuth";

export default function TransitionsModal({
	handleOpen,
	handleClose,
	open,
	post,
}) {
	const { currentUser } = useAuth();
	const [status, setStatus] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("");
		setIsLoading(true);
		//EXTRACT FORM INPUTS
		const formData = new FormData(e.currentTarget);
		const { message } = Object.fromEntries(formData);

		const templateParams = {
			to_name: `${post.user.username}`,
			from_name: `${currentUser?.email}`,
			message,
		};

		try {
			await emailjs.send(
				"service_wlpka8i",
				"template_vl2fv4b",
				templateParams,
				{
					publicKey: "G3dm8K2Kad1bR3H-W",
				}
			);
			setStatus("Your message was sent successfully.");
		} catch (error) {
			console.log("FAILED...", error.text);
			setStatus("Failed to send message, please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<div
				className="flex flex-row items-center p-2 gap-2 justify-center border bg-white rounded-lg cursor-pointer min-w-fit"
				onClick={handleOpen}>
				<img
					className="w-6 h-6"
					src="/chat.png"></img>
				<TriggerButton onClick={handleOpen}>
					<span className="hidden lg:block">Send a Message</span>
				</TriggerButton>
			</div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: StyledBackdrop }}>
				<Fade in={open}>
					<ModalContent sx={style}>
						<div className="relative">
							<h2
								id="transition-modal-title"
								className="modal-title text-lg font-semibold">
								Send a message to{" "}
								<span className="font-semibold">
									{post.user.username}
								</span>
							</h2>
							<form
								className="flex flex-col gap-4"
								onSubmit={handleSubmit}>
								<textarea
									name="message"
									id="message"
									placeholder="Hi, I would love to learn more about your property..."
									className=" rounded-lg h-[8rem] text-start p-2 leading-relaxed border-[1px]"></textarea>
								<button
									disabled={isLoading}
									type="submit"
									className={`bg-emerald-500 hover:bg-emerald-600 transition-all hover:shadow-md ease-in px-4 py-2 rounded-lg text-white ${
										isLoading ? "cursor-wait !bg-emerald-300" : ""
									}`}>
									Send
								</button>
								<span>{status}</span>
							</form>
						</div>
					</ModalContent>
				</Fade>
			</Modal>
		</div>
	);
}

const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean }>(
	(props, ref) => {
		const { open, ...other } = props;
		return (
			<Fade in={open}>
				<div
					ref={ref}
					{...other}
				/>
			</Fade>
		);
	}
);

const blue = {
	200: "#99CCFF",
	300: "#66B2FF",
	400: "#3399FF",
	500: "#007FFF",
	600: "#0072E5",
	700: "#0066CC",
};

const grey = {
	50: "#F3F6F9",
	100: "#E5EAF2",
	200: "#DAE2ED",
	300: "#C7D0DD",
	400: "#B0B8C4",
	500: "#9DA8B7",
	600: "#6B7A90",
	700: "#434D5B",
	800: "#303740",
	900: "#1C2025",
};

const Modal = styled(BaseModal)`
	position: fixed;
	z-index: 1300;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
	z-index: -1;
	position: fixed;
	inset: 0;
	background-color: rgb(0 0 0 / 0.5);
	-webkit-tap-highlight-color: transparent;
`;

const style = {
	position: "absolute" as const,
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
};

const ModalContent = styled("div")(
	({ theme }) => css`
		font-family: sans-serif;
		font-weight: 500;
		text-align: start;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 8px;
		overflow: hidden;
		background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
		border-radius: 8px;

		padding: 24px;
		color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

		& .modal-title {
			margin: 0;
			line-height: 1.5rem;
			margin-bottom: 8px;
		}

		& .modal-description {
			margin: 0;
			line-height: 1.5rem;
			font-weight: 400;
			color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
			margin-bottom: 4px;
		}
	`
);

const TriggerButton = styled(Button)(
	({ theme }) => css`
		font-family: sans-serif;
		font-weight: 400;
		font-size: 16px;
		line-height: 1.5;

		border-radius: 8px;
		transition: all 150ms ease;
		cursor: pointer;
		background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};

		&:active {
			background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
		}

		&:focus-visible {
			box-shadow: 0 0 0 4px
				${theme.palette.mode === "dark" ? blue[300] : blue[200]};
			outline: none;
		}
	`
);

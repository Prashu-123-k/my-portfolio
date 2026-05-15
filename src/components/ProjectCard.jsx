import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
	title,
	title2,
	description,
	techStack = [],
	image,
	label,
	liveLink,
	codeLink,
}) => {
	const renderAction = (href, text, icon) => {
		if (!href) {
			return (
				<span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 opacity-50">
					{icon}
					{text}
				</span>
			);
		}

		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors duration-300 hover:text-white"
			>
				{icon}
				{text}
			</a>
		);
	};

	return (
		<motion.article
			initial={{ opacity: 0, y: 18 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="group overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:border-white/20 hover:shadow-[0_16px_50px_rgba(0,0,0,0.45)]">
				<div className="grid md:grid-cols-[1.15fr_0.85fr]">
					<motion.div 
						className="relative min-h-80 overflow-hidden bg-black/70"
						whileHover="hover"
						initial="initial"
					>
						<motion.div
							className="absolute inset-0 bg-center bg-cover bg-no-repeat"
							style={{ backgroundImage: image ? `url(${image})` : undefined }}
							variants={{
								initial: { scale: 1 },
								hover: { scale: 1.08 }
							}}
							transition={{ duration: 0.4, ease: "easeOut" }}
						/>
						<motion.div 
							className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"
							variants={{
								initial: { opacity: 1 },
								hover: { opacity: 0.6 }
							}}
							transition={{ duration: 0.4, ease: "easeOut" }}
						/>
						<div className="relative z-10 flex h-full flex-col p-6 md:p-7">
							{label && (
								<span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
									{label}
								</span>
							)}
							<div className="mt-auto">
								<h3 className="text-2xl font-semibold text-white md:text-3xl">
									{title}
								</h3>
							</div>
						</div>
					</motion.div>

					<div className="flex h-full flex-col p-6 md:p-7">
						<div className="mb-6">
							{/* <h3 className="text-2xl font-semibold text-white md:text-3xl">
								{title}
							</h3> */}
							
								<h2 className="text-lg font-bold text-white/90 md:text-xl">
									{title2}
								</h2>
							
						</div>
						{techStack.length > 0 && (
							<div className="mb-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
								{techStack.map((tech) => (
									<span key={tech}>{tech}</span>
								))}
							</div>
						)}

						<p className="text-sm leading-relaxed text-[#b0b0b0] md:text-base">
							{description}
						</p>

						<div className="mt-auto flex items-center border-t border-white/10 pt-5">
							<div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-1 py-1 transition-all duration-300 hover:border-white/40 hover:bg-white/10">
								<button className="inline-flex items-center gap-2 px-3 py-1.5 transition-colors duration-300">
									{renderAction(
										liveLink,
										"Live Demo",
										<svg
											className="h-4 w-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.6}
												d="M7 17L17 7m0 0H9m8 0v8"
											/>
										</svg>,
									)}
								</button>
								<div className="h-4 w-px bg-white/15" />
								<button className="inline-flex items-center gap-2 px-3 py-1.5 transition-colors duration-300">
									{renderAction(
										codeLink,
										"View Code",
										<svg
											className="h-4 w-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.6}
												d="M8 9l-3 3 3 3m8-6l3 3-3 3M13 7l-2 10"
											/>
										</svg>,
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.article>
	);
};

export default ProjectCard;

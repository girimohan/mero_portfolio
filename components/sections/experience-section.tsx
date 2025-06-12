"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
	{
		title: "Machine Learning Engineer Intern",
		company: "HAMK Smart",
		period: "June 2024 - Nov 2024",
		description:
			"Led the development of a comprehensive system for detecting and classifying blisters in color-coated metal surfaces. Implemented dual-approach solution using traditional machine vision (OpenCV) and deep learning (YOLOv5). Developed Django web application for real-time blister detection and comparison with standard images.",
		technologies: ["Python", "Django", "YOLO", "OpenCV", "PyTorch", "Bootstrap"],
	},
	{
		title: "Summer Project Developer",
		company: "Cinia Oy",
		period: "Sept 2023 - Jan 2024",
		description:
			"Collaborated with Finnish tech company to develop call volume prediction system. Integrated external factors using Finnish weather API and calendar events data. Implemented comprehensive data pipeline with ARIMA and SARIMA-X models. Created interactive visualization dashboard for trend analysis.",
		technologies: [
			"Python",
			"Pandas",
			"Scikit-learn",
			"Time Series Analysis",
			"API Integration",
		],
	},
	{
		title: "Service Manager",
		company: "SiljaLine",
		period: "July 2013 - Aug 2021",
		description:
			"Led team operations for cabin preparation, ensuring high service standards and enhanced guest experiences. Managed service quality and supervised staff operations.",
		technologies: [],
	},
]

export default function ExperienceSection() {
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.1,
	})

	const containerRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	})

	const y = useTransform(scrollYProgress, [0, 1], [100, -100])

	return (
		<section
			id="experience"
			ref={containerRef}
			className="py-20 min-h-screen relative overflow-hidden dark:bg-background/60"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/90 dark:from-background/70 dark:to-background" />
				<motion.div
					className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
					style={{ y }}
				/>
				<motion.div
					className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
					style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
				/>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					className="max-w-6xl mx-auto"
					ref={ref}
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.6 }}
				>
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6 }}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={
								inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
							}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="inline-block"
						>
							<Badge className="px-4 py-1 text-lg mb-4 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 border-primary/20 dark:border-primary/30 rounded-full">
								Career
							</Badge>
						</motion.div>
						<h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-foreground">
							Work Experience
						</h2>
						<p className="text-xl text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto">
							My professional journey showcases a blend of technical expertise and
							practical application in machine learning, data science, and leadership
							roles.
						</p>
					</motion.div>

					<div className="space-y-16">
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className="relative"
							>
								<div className="flex flex-col md:flex-row gap-8 items-start">
									{/* Timeline */}
									<motion.div
										className="md:w-1/3 space-y-4"
										initial={{ opacity: 0, x: -30 }}
										animate={
											inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
										}
										transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
									>
										<div className="sticky top-20">
											<h3 className="text-2xl font-bold dark:text-foreground">
												{exp.title}
											</h3>
											<p className="text-primary dark:text-primary/90 font-medium">
												{exp.company}
											</p>
											<Badge className="mt-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 border-primary/20 dark:border-primary/30">
												{exp.period}
											</Badge>
										</div>
									</motion.div>

									{/* Content */}
									<motion.div
										className="md:w-2/3"
										initial={{ opacity: 0, x: 30 }}
										animate={
											inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
										}
										transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
									>
										<Card className="bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/30 dark:border-border/20 hover:border-primary/20 dark:hover:border-primary/30 transition-colors p-6">
											<p className="text-lg text-foreground/85 dark:text-foreground/75 mb-6 leading-relaxed">
												{exp.description}
											</p>

											{exp.technologies.length > 0 && (
												<div className="flex flex-wrap gap-2">
													{exp.technologies.map((tech, techIndex) => (
														<Badge key={techIndex} variant="secondary" className="text-xs">
															{tech}
														</Badge>
													))}
												</div>
											)}
										</Card>
									</motion.div>
								</div>

								{/* Connector line (except for last item) */}
								{index < experiences.length - 1 && (
									<motion.div
										className="absolute left-1/3 top-full w-px h-16 bg-border/50 dark:bg-border/40 hidden md:block"
										initial={{ height: 0 }}
										animate={inView ? { height: 64 } : { height: 0 }}
										transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
									/>
								)}
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}

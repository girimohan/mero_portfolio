import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
	{
		id: 1,
		title: "Introduction to YOLOv5 for Object Detection",
		summary: "Learn how to implement YOLOv5 for real-time object detection in your computer vision projects.",
		date: "March 15, 2023",
		category: "Computer Vision",
		slug: "introduction-to-yolov5",
	},
	{
		id: 2,
		title: "Building ML Pipelines with Python",
		summary:
			"A comprehensive guide to creating efficient machine learning pipelines using Python and popular frameworks.",
		date: "February 8, 2023",
		category: "Machine Learning",
		slug: "building-ml-pipelines",
	},
	{
		id: 3,
		title: "Data Preprocessing Techniques for ML Models",
		summary: "Essential data preprocessing steps to improve the performance of your machine learning models.",
		date: "January 22, 2023",
		category: "Data Science",
		slug: "data-preprocessing-techniques",
	},
	{
		id: 4,
		title: "Deploying ML Models with Flask and Docker",
		summary: "Step-by-step guide to deploying your machine learning models as web services using Flask and Docker.",
		date: "December 10, 2022",
		category: "Deployment",
		slug: "deploying-ml-models",
	},
	{
		id: 5,
		title: "Transfer Learning in Computer Vision",
		summary:
			"How to leverage pre-trained models to improve performance on your computer vision tasks with limited data.",
		date: "November 5, 2022",
		category: "Deep Learning",
		slug: "transfer-learning",
	},
	{
		id: 6,
		title: "Building Interactive Dashboards with Plotly and Dash",
		summary: "Create interactive data visualization dashboards to communicate your findings effectively.",
		date: "October 18, 2022",
		category: "Data Visualization",
		slug: "interactive-dashboards",
	},
]

export default function BlogPage() {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />
			<main className="pt-32 pb-16">
				<div className="container">
					<div className="mb-12">
						<h1 className="text-4xl font-bold mb-4">Blog</h1>
						<p className="text-muted-foreground text-lg max-w-3xl">
							Thoughts, tutorials, and insights on machine learning, computer vision, and software development.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post) => (
							<Link
								key={post.id}
								href={`/blog/${post.id}`}
								className="bg-background border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
							>
								<div className="relative h-48">
									<Image
										src={`/images/ui/placeholder.svg?height=300&width=500&text=${post.title}`}
										alt={post.title}
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
										<Badge className="bg-primary hover:bg-primary">{post.category}</Badge>
									</div>
								</div>
								<div className="p-6">
									<div className="flex items-center text-muted-foreground mb-2">
										<Calendar className="h-4 w-4 mr-2" />
										<span className="text-sm">{post.date}</span>
									</div>
									<h2 className="text-xl font-bold mb-2">{post.title}</h2>
									<p className="text-muted-foreground line-clamp-2">{post.summary}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

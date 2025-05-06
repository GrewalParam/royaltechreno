"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Facebook,
  Instagram,
  Twitter,
  ExternalLink,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold" style={{ color: "orange" }}>
              Royal Tech Reno
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-orange-500">
              Services
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-orange-500">
              Projects
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-orange-500">
              Testimonials
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-orange-500">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-orange-500">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex" style={{ backgroundColor: "orange", color: "white" }}>
            <Link href="#contact">Get a Quote</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_banner.jpg?height=800&width=1920"
              alt="Modern home renovation"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Transform Your Space with Excellence
              </h1>
              <p className="text-xl text-white/90">
                Premium renovation services that blend innovative technology with timeless craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild style={{ backgroundColor: "orange", color: "white" }}>
                  <Link href="#contact">Get a Free Estimate</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <Link href="#projects">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Premium Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer comprehensive renovation solutions tailored to your unique vision and requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Kitchen Renovations",
                  description:
                    "Transform your kitchen into a stunning, functional space with premium materials and expert craftsmanship.",
                  image: "/kitchen.jpg?height=300&width=400",
                },
                {
                  title: "Bathroom Remodeling",
                  description:
                    "Create a luxurious bathroom retreat with modern fixtures, beautiful tilework, and elegant finishes.",
                  image: "/bathroom.jpg?height=300&width=400",
                },
                {
                  title: "Basement Finishing",
                  description:
                    "Convert your unused basement into valuable living space, from home theaters to guest suites.",
                  image: "/basement.jpg?height=300&width=400",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow transition-all hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                    <div className="mt-4">
                      <Link
                        href="#contact"
                        className="inline-flex items-center font-medium hover:underline"
                        style={{ color: "orange" }}
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/rtr.webp?height=600&width=600"
                  alt="Professional renovation team"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Royal Tech Reno</h2>
                <p className="text-muted-foreground">
                  With over 5 years of experience, we combine traditional craftsmanship with innovative technology to
                  deliver exceptional results.
                </p>
                <div className="space-y-4">
                  {[
                    "Experienced and skilled professionals",
                    "Premium materials and finishes",
                    "Transparent pricing with no hidden costs",
                    "On-time project completion",
                    "5-year workmanship warranty",
                    "Cutting-edge design technology",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5" style={{ color: "orange" }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild style={{ backgroundColor: "orange", color: "white" }}>
                  <Link href="#contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our portfolio of successful renovations and transformations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group overflow-hidden rounded-lg">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={`/p${item}.webp?height=500&width=500&text=Project ${item}`}
                      alt={`Project ${item}`}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />

                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button variant="outline" asChild style={{ borderColor: "orange", color: "orange" }}>
                <Link href="#contact">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. See what our satisfied clients have to say.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-8 w-8" style={{ fill: "orange", color: "orange" }} />
                  ))}
                </div>
                <span className="ml-2 text-2xl font-bold">5.0</span>
              </div>
              <p className="text-lg mb-6">
                Based on <span className="font-semibold">Multiple reviews</span> on Google
              </p>
              <Button size="lg" className="mb-8" asChild style={{ backgroundColor: "orange", color: "white" }}>
                <Link
                  href="https://g.co/kgs/AbtZ3Sp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Read Our Google Reviews
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Param Grewal",
                  role: "Homeowner",
                  content:
                    "Royal Tech Reno transformed our outdated kitchen into a stunning modern space. Their attention to detail and craftsmanship exceeded our expectations.",
                },
                {
                  name: "Rajpreet Brar",
                  role: "Property Developer",
                  content:
                    "We've worked with many contractors over the years, but Royal Tech Reno stands out for their professionalism, quality, and ability to stay on schedule and budget.",
                },
                {
                  name: "Navjot Saggu",
                  role: "Homeowner",
                  content:
                    "The team at Royal Tech Reno made our bathroom renovation stress-free. They were communicative throughout the process and delivered exceptional results.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="rounded-lg border bg-background p-6 shadow">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5" style={{ fill: "orange", color: "orange" }} />
                    ))}
                  </div>
                  <p className="mb-4">{testimonial.content}</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">Love our work? Please consider leaving us a review!</p>
              <Button variant="outline" asChild style={{ borderColor: "orange", color: "orange" }}>
                <Link href="https://g.co/kgs/AbtZ3Sp" target="_blank" rel="noopener noreferrer">
                  Write a Review
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Royal Tech Reno</h2>
                <p>
                  Founded by Sajan in 2020, Royal Tech Reno has established itself as a leader in high-quality
                  residential and commercial renovations across the Greater Toronto Area.
                </p>
                <p>
                  Our mission is to blend innovative technology with traditional craftsmanship to create spaces that are
                  not only beautiful but functional and sustainable.
                </p>
                <p>
                  With a team of skilled professionals including architects, designers, and craftsmen, we handle
                  projects of all sizes with the same dedication to excellence and attention to detail.
                </p>
                <div className="pt-4">
                  <Button asChild style={{ backgroundColor: "orange", color: "white" }}>
                    <Link href="#contact">Get to Know Us</Link>
                  </Button>
                </div>
              </div>
              <div>
                <Image
                  src="/team.jpg?height=600&width=600"
                  alt="Royal Tech Reno team"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Contact Us</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to start your renovation project? Contact us today for a free consultation and estimate.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-0.5" style={{ color: "orange" }} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 647-406-8034</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-0.5" style={{ color: "orange" }} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">sajan280299@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-0.5" style={{ color: "orange" }} />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">20 Gatewood Dr, Brampton, ON</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 mt-0.5" style={{ color: "orange" }} />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                      <p className="text-muted-foreground">Saturday: 9am - 4pm</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">

                    <Link
                      href="https://www.instagram.com/royal_tech_reno/"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
               
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border bg-background p-6 shadow">
                  <h3 className="text-xl font-bold mb-4">Request a Free Estimate</h3>
                  <form
  className="space-y-4"
  onSubmit={(e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const firstName = (form.querySelector('#first-name') as HTMLInputElement).value;
    const lastName = (form.querySelector('#last-name') as HTMLInputElement).value;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const phone = (form.querySelector('#phone') as HTMLInputElement).value;
    const service = (form.querySelector('#service') as HTMLSelectElement).value;
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value;

    const subject = encodeURIComponent('Free Estimate Request');
    const body = encodeURIComponent(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService Interested In: ${service}\n\nProject Details:\n${message}`
    );

    window.location.href = `mailto:sajan280299@gmail.com?subject=${subject}&body=${body}`;
  }}
>
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <label htmlFor="first-name" className="text-sm font-medium">
        First name
      </label>
      <Input id="first-name" name="first-name" placeholder="John" required />
    </div>
    <div className="space-y-2">
      <label htmlFor="last-name" className="text-sm font-medium">
        Last name
      </label>
      <Input id="last-name" name="last-name" placeholder="Doe" required />
    </div>
  </div>
  <div className="space-y-2">
    <label htmlFor="email" className="text-sm font-medium">
      Email
    </label>
    <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
  </div>
  <div className="space-y-2">
    <label htmlFor="phone" className="text-sm font-medium">
      Phone
    </label>
    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
  </div>
  <div className="space-y-2">
    <label htmlFor="service" className="text-sm font-medium">
      Service Interested In
    </label>
    <select
      id="service"
      name="service"
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      required
    >
      <option value="">Select a service</option>
      <option value="kitchen">Kitchen Renovation</option>
      <option value="bathroom">Bathroom Remodeling</option>
      <option value="basement">Basement Finishing</option>
      <option value="addition">Home Addition</option>
      <option value="smart-home">Smart Home Integration</option>
      <option value="exterior">Exterior Renovation</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div className="space-y-2">
    <label htmlFor="message" className="text-sm font-medium">
      Project Details
    </label>
    <Textarea
      id="message"
      name="message"
      placeholder="Tell us about your project and any specific requirements"
      rows={4}
      required
    />
  </div>
  <Button type="submit" className="w-full" style={{ backgroundColor: "orange", color: "white" }}>
    Submit Request
  </Button>
</form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <span className="text-xl font-bold" style={{ color: "orange" }}>
                  Royal Tech Reno
                </span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Premium renovation services that blend innovative technology with timeless craftsmanship.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Kitchen Renovations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Bathroom Remodeling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Basement Finishing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Home Additions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Smart Home Integration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-foreground">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Royal Tech Reno. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

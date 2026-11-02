import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import OwnershipAndMaintenance from '@/components/sections/about/OwnershipAndMaintenance';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { Monitor, Rocket, Shield, TrendingUp, Users, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="WEB DEVELOPMENT SERVICES"
      title="We Build Websites That Help Businesses Grow"
      description="Establish your online presence with professional, high-performance websites tailored to your unique business needs."
      primaryButton={{
        text: "Start Your Project",
        href: "#contact",
      }}
      secondaryButton={{
        text: "See Our Work",
        href: "#features",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-futuristic-technologies_23-2151941514.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252430.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/business-person-futuristic-business-environment_23-2150970188.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hands-holding-smartphone_23-2150671567.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cybersecurity-concept-illustration_23-2151883584.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/empty-office-desk-with-computer-screen-showing-terminal-windows_482257-126357.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="ownership" data-section="ownership">
    <SectionErrorBoundary name="ownership">
      <OwnershipAndMaintenance
        tag="OWNERSHIP & CARE"
        title="Built Guided by You. Handed Off Fully. Maintained When Needed."
        description="We craft websites to the highest standard, shaped by your vision and handed off with complete ownership. Need hands-off peace of mind? We also offer monthly maintenance where we monitor your site, handle updates, and report on any issues."
        textAnimation="slide-up"
      />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="OUR APPROACH"
      title="Digital Solutions for Modern Growth"
      description="Don't settle for being 'offline'. We specialize in bringing local businesses into the digital era with professional design and development strategies."
      items={[
        {
          icon: Rocket,
          title: "Rapid Deployment",
          description: "Get your business online in record time.",
        },
        {
          icon: Monitor,
          title: "Modern UI/UX",
          description: "Beautiful designs that convert visitors into customers.",
        },
        {
          icon: Zap,
          title: "High Performance",
          description: "Blazing fast speeds for better rankings and user experience.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/candid-shot-stylish-young-male-programmer-with-curly-gathered-hair-working-modern-office-using-personal-computer-laptop-having-serious-focused-look-job-business-career-occupation_343059-1580.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesRevealCards
      tag="SERVICES"
      title="What We Offer"
      description="A comprehensive suite of services designed to build and elevate your digital brand identity."
      items={[
        {
          title: "Performance Optimization",
          description: "We ensure your site loads lightning fast for peak conversions.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-space-rocket-model_23-2151113237.jpg",
        },
        {
          title: "Mobile Responsive Design",
          description: "Your site will look perfect on every smartphone and tablet.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-books-versus-technology_23-2150062953.jpg",
        },
        {
          title: "Secure Web Hosting",
          description: "Robust and secure hosting infrastructure for your peace of mind.",
          imageSrc: "http://img.b2bpic.net/free-photo/website-hosting-concept-with-man-holding-tablet-front-view_23-2149406766.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="BY THE NUMBERS"
      title="Proven Success Metrics"
      description="We track everything to ensure your website performs as hard as you do."
      metrics={[
        {
          icon: TrendingUp,
          title: "Avg Speed Gain",
          value: "200%",
        },
        {
          icon: Users,
          title: "Visitor Conversion",
          value: "45%",
        },
        {
          icon: Shield,
          title: "Uptime Guarantee",
          value: "99.9%",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Trusted By"
      title="Partners In Growth"
      description="Businesses that have trusted us to build their digital presence."
      names={[
        "Logo1",
        "Logo2",
        "Logo3",
        "Logo4",
        "Logo5",
        "Logo6",
        "Logo7",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingMediaCards
      tag="PRICING PLANS"
      title="Professional Web Packages"
      description="Affordable solutions to get you started on the right foot."
      plans={[
        {
          tag: "Essentials",
          price: "$1,250",
          period: "once",
          features: [
            "Landing Page",
            "Mobile Optimized",
            "1 Month Support",
          ],
          primaryButton: {
            text: "Select Plan",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/speed-meter-extreme-scale-fast_53876-120604.jpg",
        },
        {
          tag: "Professional",
          price: "$4,500",
          period: "once",
          features: [
            "5-Page Website",
            "Custom Branding",
            "3 Months Support",
          ],
          primaryButton: {
            text: "Select Plan",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-digital-tablet-with-search-job-screen-male-hands_169016-38981.jpg",
        },
        {
          tag: "Growth",
          price: "$10,000",
          period: "once",
          features: [
            "E-commerce Ready",
            "Content Strategy",
            "6 Months Support",
          ],
          primaryButton: {
            text: "Select Plan",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/programming-background-concept_23-2150170125.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="TESTIMONIALS"
      title="What Clients Say"
      description="Don't just take our word for it."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Owner, Boutique",
          quote: "SitePlanner transformed our local store into a thriving online brand.",
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-business-woman-office-isolated_1303-21403.jpg",
        },
        {
          name: "Michael C.",
          role: "Tech Founder",
          quote: "Incredible speed and design. My conversion rate doubled in 3 months.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-lean-grey-wall-holding-laptop-hand_197531-348.jpg",
        },
        {
          name: "David K.",
          role: "CEO, Services",
          quote: "The team was professional and responsive. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-people-working-office-with-digital-tablet_1301-6633.jpg",
        },
        {
          name: "Emily R.",
          role: "Marketing Director",
          quote: "Finally a team that understands local business marketing online.",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-successful-young-businessman-standing-office-looking-camera_1163-4223.jpg",
        },
        {
          name: "Jane D.",
          role: "Consultant",
          quote: "Best investment I have made for my business this year.",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-woman-standing-with-coffee-busy-street-smiling-camera_1258-123421.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Q&A"
      title="Common Questions"
      description="Answers to help you get started with ease."
      items={[
        {
          question: "How long does a website take?",
          answer: "Most projects are completed in 2-4 weeks depending on complexity.",
        },
        {
          question: "Do I need technical skills?",
          answer: "No, we handle everything from design to hosting for you.",
        },
        {
          question: "What happens after it's live?",
          answer: "We offer monthly maintenance plans to keep your site updated.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="GET IN TOUCH"
      text="Ready to expand your business online? Let's talk."
      contactInfoText="Schedule an appointment now! Email SitePlannerOfficial@hotmail.com"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}

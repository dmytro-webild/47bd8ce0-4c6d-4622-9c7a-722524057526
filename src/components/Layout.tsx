import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Social Proof",
    "href": "#social-proof"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="gridDots" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="GrowthWeb"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="GrowthWeb"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Case Studies",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 GrowthWeb. All rights reserved."
      links={[
        {
          label: "Privacy",
          href: "#",
        },
        {
          label: "Terms",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/layout-icon-front-side_187299-45683.jpg"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}

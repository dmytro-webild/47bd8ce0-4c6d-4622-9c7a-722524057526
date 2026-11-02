import { CheckCircle2, ShieldCheck, KeyRound, Activity, FileText, Wrench } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface OwnershipAndMaintenanceProps {
  tag?: string;
  title?: string;
  description?: string;
  textAnimation?: "slide-up" | "fade-blur" | "fade";
}

export default function OwnershipAndMaintenance({
  tag = "OWNERSHIP & CARE",
  title = "Built Guided by You. Handed Off Fully. Maintained When Needed.",
  description = "We craft websites to the highest standard, shaped by your vision and handed off with complete ownership. Need hands-off peace of mind? We also offer monthly maintenance where we monitor your site, handle updates, and report on any issues.",
  textAnimation = "slide-up",
}: OwnershipAndMaintenanceProps) {
  return (
    <section aria-label="Ownership and Maintenance section" className="py-20">
      <div className="flex flex-col gap-10 md:gap-12 w-content-width mx-auto">
        <div className="flex flex-col items-center gap-2">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-4xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
          />
        </div>

        <ScrollReveal variant="slide-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Customer-Guided Build & Full Ownership */}
            <div className="flex flex-col justify-between card rounded p-6 xl:p-8 relative overflow-hidden">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center shrink-0 size-12 primary-button rounded">
                    <KeyRound className="size-6 text-primary-cta-text" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-accent font-mono">Full Hand-Off</span>
                    <h3 className="text-2xl md:text-3xl font-semibold">Client-Guided & Full Ownership</h3>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-6">
                  Every website we build is crafted to the finest degree, strictly guided by your vision and business requirements. Once complete, we hand over 100% full ownership of your site, code, and assets.
                </p>

                <div className="space-y-4 pt-2 border-t border-accent/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-cta shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Guided by Your Customer Vision</h4>
                      <p className="text-sm leading-snug text-accent">We work closely with you to customize every section, ensuring the website matches your exact standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-cta shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">100% Handed Off & Owned by You</h4>
                      <p className="text-sm leading-snug text-accent">You own all source files, domains, and administrative rights upon completion with zero mandatory contracts.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-cta shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Finest Build Quality</h4>
                      <p className="text-sm leading-snug text-accent">Built with high-performance modern web frameworks for top-tier speed, responsiveness, and SEO.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-accent/20">
                <span className="text-xs font-medium text-accent">Zero vendor lock-in. Full control.</span>
                <Button text="Start Your Website" href="#contact" variant="primary" />
              </div>
            </div>

            {/* Card 2: Monthly Maintenance Service */}
            <div className="flex flex-col justify-between card rounded p-6 xl:p-8 relative overflow-hidden">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center shrink-0 size-12 primary-button rounded">
                    <ShieldCheck className="size-6 text-primary-cta-text" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-accent font-mono">Monthly Care Service</span>
                    <h3 className="text-2xl md:text-3xl font-semibold">Proactive Monitoring & Maintenance</h3>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-6">
                  Lacking the time or staff to look after your site? We offer an optional monthly service where we actively monitor your site, process updates, and report back on issues.
                </p>

                <div className="space-y-4 pt-2 border-t border-accent/30">
                  <div className="flex items-start gap-3">
                    <Activity className="size-5 text-primary-cta shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Continuous Site Monitoring</h4>
                      <p className="text-sm leading-snug text-accent">We keep watch over your website uptime, speed, and overall health around the clock.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Wrench className="size-5 text-primary-cta shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Ongoing Updates & Tweaks</h4>
                      <p className="text-sm leading-snug text-accent">We handle software security patches, content changes, and feature enhancements whenever you need them.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="size-5 text-primary-cta shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Transparent Issue Reporting</h4>
                      <p className="text-sm leading-snug text-accent">Receive regular reports covering performance metrics, potential vulnerabilities, and resolved issues.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-accent/20">
                <span className="text-xs font-medium text-accent">For teams who need zero hassle.</span>
                <Button text="Inquire About Maintenance" href="#contact" variant="secondary" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

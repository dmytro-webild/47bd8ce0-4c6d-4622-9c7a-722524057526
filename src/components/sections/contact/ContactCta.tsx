import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";

interface ContactCtaProps {
  tag: string;
  text: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  contactInfoText?: string;
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const ContactCta = ({
  tag,
  text,
  primaryButton,
  secondaryButton,
  contactInfoText,
  textAnimation,
}: ContactCtaProps) => {
  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="fade-blur">
          <div className="flex flex-col items-center gap-8 md:gap-10 py-20 px-8 rounded card">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                <p>{tag}</p>
              </div>

              <TextAnimation
                text={text}
                variant={textAnimation}
                gradientText={true}
                tag="h2"
                className="md:max-w-8/10 text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
              />

              {contactInfoText && (
                <p className="mt-4 text-xl md:text-2xl font-medium text-foreground text-center">
                  {contactInfoText.includes("SitePlannerOfficial@hotmail.com") ? (
                    <>
                      Schedule an appointment now! Email{" "}
                      <a
                        href="mailto:SitePlannerOfficial@hotmail.com"
                        className="text-primary underline hover:opacity-80 transition-opacity font-semibold"
                      >
                        SitePlannerOfficial@hotmail.com
                      </a>
                    </>
                  ) : (
                    contactInfoText
                  )}
                </p>
              )}

              {(primaryButton || secondaryButton) && (
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {primaryButton && (
                    <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
                  )}
                  {secondaryButton && (
                    <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactCta;

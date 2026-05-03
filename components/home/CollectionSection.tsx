import { Container } from "@/components/ui-luxe/Container";
import { LuxeGallery } from "@/components/ui-luxe/LuxeGallery";
import { Section } from "@/components/ui-luxe/Section";
import { SectionHeading } from "@/components/ui-luxe/SectionHeading";
import { useTranslations } from "next-intl";

export function CollectionSection() {
  const t = useTranslations('home');

  return (
    <Section id="collection" variant="ivory" spacing="lg">
      <Container>
        <SectionHeading
          eyebrow={t("collection.eyebrow")}
          title={
            <>
              {t("collection.title1")} <em className="text-gold">{t("collection.title2")}</em>
            </>
          }
          subtitle={t("collection.subtitle")}
        />
        <LuxeGallery />
      </Container>
    </Section>
  );
}

import type { Metadata } from "next";
import { InquiryCta, PageHero } from "@/components/Blocks";
import Catalogue from "@/components/Catalogue";
import Icon from "@/components/Icon";
import { home, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description:
    "Browse the full Peppy Foods wholesale catalogue: frozen foods, dairy/cooler products, grocery staples and packaging material with pack sizes.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero kicker="Product Catalogue" title="Our full product range" intro={home.categoryIntro}>
        {site.catalogueFile && (
          <a href={site.catalogueFile} className="btn btn--outline" download>
            <Icon name="download" size={18} /> Download Catalogue / Price List
          </a>
        )}
      </PageHero>
      <section className="section section--tight">
        <div className="container">
          <Catalogue />
        </div>
      </section>
      <InquiryCta />
    </>
  );
}

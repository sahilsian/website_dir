import { PageHero } from "@/components/Blocks";
import { site } from "@/content/site";

/**
 * Placeholder legal page. Paste the client's approved Terms / Privacy text
 * from the existing website into `children` when supplied.
 */
export default function LegalPage({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <>
      <PageHero kicker="Legal" title={title} />
      <section className="section section--tight">
        <div className="container narrow legal">
          {children ?? (
            <p className="body">
              The full {title} for {site.name} will be published here. For any questions in the meantime, please
              contact us at <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

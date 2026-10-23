import Link from "next/link";
import { PageHero } from "@/components/Blocks";

export default function NotFound() {
  return (
    <PageHero kicker="404" title="Page not found" intro="The page you are looking for doesn't exist. Try the product catalogue instead.">
      <div className="btn-row">
        <Link href="/products/" className="btn btn--primary">
          View Product Catalogue
        </Link>
        <Link href="/" className="btn btn--outline">
          Back to Home
        </Link>
      </div>
    </PageHero>
  );
}

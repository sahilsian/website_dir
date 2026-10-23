import Link from "next/link";
import { PageHero } from "@/components/Blocks";

export default function NotFound() {
  return (
    <PageHero kicker="404" title="This page took a wrong turn" intro="The page you're looking for doesn't exist or has moved.">
      <div className="btn-row">
        <Link href="/" className="btn btn--primary">
          Back to Home
        </Link>
        <Link href="/contact/" className="btn btn--outline">
          Contact Us
        </Link>
      </div>
    </PageHero>
  );
}

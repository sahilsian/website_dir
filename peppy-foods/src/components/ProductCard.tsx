import Link from "next/link";
import Icon from "@/components/Icon";
import { getCategory, type Product } from "@/content/products";

export const inquiryHref = (p: Product) => `/contact/?product=${encodeURIComponent(p.productName)}`;

export default function ProductCard({ product }: { product: Product }) {
  const cat = getCategory(product.category)!;
  return (
    <article className="product">
      <div className="product__thumb" style={{ background: cat.tint }}>
        {product.image ? (
          <img src={product.image} alt={product.productName} loading="lazy" decoding="async" />
        ) : (
          <Icon name={cat.icon} size={40} />
        )}
        <span className="product__cat">{cat.short}</span>
      </div>
      <div className="product__body">
        {product.subcategory && <span className="product__sub">{product.subcategory}</span>}
        <h3 className="product__name">{product.productName}</h3>
        <dl className="product__meta">
          <div>
            <dt>Pack size</dt>
            <dd>{product.packSize}</dd>
          </div>
          <div>
            <dt>Unit</dt>
            <dd>{product.unitType}</dd>
          </div>
        </dl>
        <Link href={inquiryHref(product)} className="btn btn--soft btn--block btn--sm">
          Request Pricing <Icon name="arrow" size={15} />
        </Link>
      </div>
    </article>
  );
}

export function ProductTable({ items }: { items: Product[] }) {
  return (
    <div className="table-wrap">
      <table className="ptable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Category</th>
            <th scope="col">Pack Size / Detail</th>
            <th scope="col">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((p, i) => (
            <tr key={p.id}>
              <td className="ptable__num">{i + 1}</td>
              <th scope="row">
                {p.productName}
                {p.subcategory && <small>{p.subcategory}</small>}
              </th>
              <td>{getCategory(p.category)!.short}</td>
              <td>{p.packSize}</td>
              <td>
                <Link href={inquiryHref(p)} className="link-arrow">
                  Request Pricing <Icon name="arrow" size={14} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

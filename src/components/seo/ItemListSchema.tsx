import { JsonLd } from "./JsonLd";

interface ItemListItem {
  name: string;
  url: string;
  description?: string;
}

interface ItemListSchemaProps {
  /** The hub page name, e.g. "Services", "Guides", "Blog Posts" */
  name: string;
  /** Optional description of what this list represents */
  description?: string;
  /** The items in the list, in display order */
  items: ItemListItem[];
}

/**
 * ItemList schema for hub pages — services, guides, blog, compare, tools.
 *
 * Helps Google understand the page is a directory of items and increases
 * eligibility for rich-result presentation in SERPs.
 */
export function ItemListSchema({
  name,
  description,
  items,
}: ItemListSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    ...(description && { description }),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.url,
      name: item.name,
      ...(item.description && { description: item.description }),
    })),
  };

  return <JsonLd data={data} />;
}

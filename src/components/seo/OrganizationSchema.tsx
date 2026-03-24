import { JsonLd } from "./JsonLd";
import { ORGANIZATION_SCHEMA } from "@/lib/constants";

export function OrganizationSchema() {
  return <JsonLd data={ORGANIZATION_SCHEMA} />;
}

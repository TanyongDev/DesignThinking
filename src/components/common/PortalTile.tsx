import Link from "next/link";
import type { PortalTileConfig } from "@/config/navigation";

export function PortalTile({ title, subtitle, href, image }: PortalTileConfig) {
  return (
    <Link href={href} className="tile">
      <div className="tile__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {image && <img src={image} alt="" />}
      </div>
      <div className="tile__label">
        <div>
          <span className="tile__title">{title}</span>
          {subtitle && <span className="tile__subtitle">{subtitle}</span>}
        </div>
        <span className="tile__go" aria-hidden="true">
          <i className="bi bi-arrow-right" />
        </span>
      </div>
    </Link>
  );
}

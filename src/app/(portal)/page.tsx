import { PageHeader } from "@/components/layout/PageHeader";
import { PortalTile } from "@/components/common/PortalTile";
import { HOME_TILES } from "@/config/navigation";

export const metadata = { title: "หน้าหลัก" };

export default function HomePage() {
  return (
    <>
      <PageHeader title="หน้าหลัก" />
      <div className="tile-grid">
        {HOME_TILES.map((t) => (
          <PortalTile key={t.title} {...t} />
        ))}
      </div>
    </>
  );
}

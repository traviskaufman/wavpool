import { Outlet } from "@remix-run/react";
import PageShell from "~/components/common/PageShell";

export default function Tracks() {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  );
}

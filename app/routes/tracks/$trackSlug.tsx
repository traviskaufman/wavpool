import { useParams } from "@remix-run/react";
import PlayerHero from "~/components/tracks/PlayerHero";

type Params = Readonly<{
  trackSlug: string;
}>;

export default function TrackDetail() {
  const { trackSlug } = useParams<Params>();
  return (
    <section className="grid grid-rows-2 grid-cols-12 mt-4">
      <section className="col-span-12 h-80">
        <PlayerHero />
      </section>
      <div className="col-span-3 flex justify-start">Artist Info</div>
      <div className="col-span-6 flex justify-center">Track Info</div>
      <div className="col-span-3 flex justify-end">More Links</div>
    </section>
  );
}

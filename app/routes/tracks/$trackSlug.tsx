import { useParams } from "@remix-run/react";

type Params = Readonly<{
  trackSlug: string;
}>;

export default function TrackDetail() {
  const { trackSlug } = useParams<Params>();
  return (
    <p>
      Eventually, a track with slug {trackSlug}, if it exists, will live here.
    </p>
  );
}

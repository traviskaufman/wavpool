import type { PropsWithChildren } from "react";
import { H4 } from "./Typography";
import logo from "~/assets/logo.svg";
import profileLink from "~/assets/profile-link.svg";
import { Link } from "@remix-run/react";

export default function PageShell({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col">
      <PageHeader />
      <main className="px-4 pt-4">{children}</main>
    </div>
  );
}

function PageHeader() {
  return (
    <header className="flex items-center px-4 py-1 h-16 bg-blue text-white">
      <Link to="/" className="flex items-center mr-auto gap-2">
        <img src={logo} loading="lazy" alt="WavPool Logo" />
        <H4 tagName="span">WavPool</H4>
      </Link>
      <div className="flex items-center gap-1">
        <button
          onClick={() => alert("Not yet implemented!")}
          aria-label="View Account Settings"
        >
          <img src={profileLink} alt="Profile Icon" />
        </button>
      </div>
    </header>
  );
}

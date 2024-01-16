import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
    </nav>
  );
}

export default Navbar;

import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h2>Dear RainFocus Engineering Team,</h2>
      <p>Welcome to my UI submission! This layout should adhere to the guidelines in the Figma mockup.</p>
      <p>Loading and 404 pages are also included.</p>
      <p>It is responsive across all screen sizes down to 320px, and the nav and meganav are fully functional.</p>
      <p>I improvised the mobile layout, so please feel free to check that out as well.</p>
      <p>Also, I`d like you to pay particular attention to this UI`s complete ADA compliance, including appropriate use of aria labels and tab navigation. Try navigating through the layout using just your keyboard!</p>
      <p>This is just the homepage, but the complete requested layout is located <Link href="attendees/attendees">here.</Link></p>
      <p>Please let me know if you have any questions or feedback!</p>
      <br />
      <p>All the best,</p>
      <p>Seth Baldridge</p>
      <a href="https://github.com/sethbaldridge87/rf-ui" target="_blank" rel="noreferrer">Source code</a>
    </section>
  );
}

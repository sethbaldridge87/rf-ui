import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface AttendeePageProps {
  params: Promise<{ slug: string }>;
}

const ATTENDEE_PAGES = [
  {
    slug: "attendee-types",
    title: "Attendee Types",
  },
  {
    slug: "packages",
    title: "Packages",
  },
  {
    slug: "reg-codes",
    title: "Reg Codes",
  },
  {
    slug: "discounts",
    title: "Discounts",
  },
] as const;

function getAttendeePage(slug: string) {
  const page = ATTENDEE_PAGES.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return page;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return ATTENDEE_PAGES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: AttendeePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getAttendeePage(slug);

  return {
    title: page.title,
  };
}

export default async function AttendeesSubPage({
  params,
}: AttendeePageProps) {
  const { slug } = await params;
  const page = getAttendeePage(slug);

  return (
    <section>
      <h2>This is an Attendees Sub Page. It is the {page.title} page</h2>
    </section>
  );
}
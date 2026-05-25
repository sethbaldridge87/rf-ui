export default async function AttendeesSubPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <section><h2>This is an Attendees Sub Page. It is the {slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())} page</h2></section>
    )
}
interface sectionHeadingProps {
  title: string;
  description: string;
}

export default function SectionHeading({
  title,
  description,
}: sectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">{title}</h2>

      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}

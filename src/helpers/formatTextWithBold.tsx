export function formatTextWithBold(input: string) {
  // Replace <b>...</b> with actual <b> tags
  const parts = input.split(/(<b>.*?<\/b>)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("<b>") && part.endsWith("</b>")) {
          return (
            <b key={index}>{part.slice(3, -4)}</b> // Extract text inside <b> tags
          );
        }
        return part; // Return plain text
      })}
    </>
  );
}

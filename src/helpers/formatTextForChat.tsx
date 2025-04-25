export function formatTextForChat(input: string) {
  // Replace <b>...</b> with actual <b> tags and handle new line characters
  const parts = input.split(/(<b>.*?<\/b>|\n)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("<b>") && part.endsWith("</b>")) {
          return (
            <b key={index}>{part.slice(3, -4)}</b> // Extract text inside <b> tags
          );
        } else if (part === "\n") {
          return <br key={index} />; // Insert <br /> for new line characters
        }
        return part; // Return plain text
      })}
    </>
  );
}

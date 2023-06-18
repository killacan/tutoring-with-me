export default function InPageLink(text, href) {
  return (
    <>
      <a className="sm:p-2 p-1 text-center" href={href}>
        {text}
      </a>
    </>
  );
}
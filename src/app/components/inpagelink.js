export default function InPageLink(text, href) {
  return (
    <>
      <a className="" href={href}>
        {text}
      </a>
    </>
  );
}
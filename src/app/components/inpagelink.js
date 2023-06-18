export default function InPageLink(text, href) {
  return (
    <>
      <a className="sm:p-2 p-1 md:text-2xl font-burtons text-center transition ease-in-out duration-500" href={href}>
        {text}
      </a>
    </>
  );
}
/**
 * Footer that displays the current year + link to portfolio.
 *
 * App -> Footer
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-primarytext z-12 mt-24 border-t p-2 border-gray-500 border-opacity-45 flex justify-center">
      <small>
        JobHunter © {currentYear} | Built by{" "}
        <a href="https://justinclark.bio">Justin Clark</a>
      </small>
    </div>
  );
};

export default Footer;

import FooterIcons from "./FooterIcons";

function Footer() {
  return (
    <>
      <footer className="border-t border-gray-300 bg-white py-4 text-center text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Made With ❤️ and ☕ by{" "}
        <a
          href="https://www.linkedin.com/in/ibrahim-ashraf-924520259/"
          target="_blank"
          className="font-medium text-blue-500 transition hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
        >
          Ibrahim Ashraf
        </a>
      </footer>
      <div className="fixed bottom-0 left-0 z-40 flex w-full items-center justify-around gap-6 border-t border-gray-300 bg-white p-5 shadow-2xl md:hidden">
        <FooterIcons />
      </div>
    </>
  );
}

export default Footer;

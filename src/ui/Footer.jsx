function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-white py-4 text-center text-sm text-gray-600">
      &copy; {new Date().getFullYear()} Made With ❤️ and ☕ by{" "}
      <a
        href="https://www.linkedin.com/in/ibrahim-ashraf-924520259/"
        target="_blank"
        className="font-medium text-blue-500 transition hover:text-blue-600"
      >
        Ibrahim Ashraf
      </a>
    </footer>
  );
}

export default Footer;

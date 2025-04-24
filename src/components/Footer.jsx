const Footer = () => {
  return (
    <footer className="px-4 py-6 flex flex-col gap-3 lg:px-32">
      <div className="w-100% bg-red-50 h-0.25"></div>
      <p>
        © {new Date().getFullYear()} CCHive. Built by students, for students.
      </p>
      <p>
        <a
          href="https://github.com/amrxt1/cchive_backend"
          target="_blank"
          rel="noreferrer"
          className="text-primary"
        >
          View source
        </a>
      </p>
    </footer>
  );
};

export default Footer;

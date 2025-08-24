const Footer = () => {
  return (
    <footer className="font-display mt-64 mb-8 py-6 lg:mt-32 lg:mb-16">
      <div>
        <div className="w-100% bg-text h-[1px]"></div>
        <p className="pt-4 text-center text-sm">
          © {new Date().getFullYear()} CCHive. <br /> Built by students, for
          students.
        </p>
        <p className="text-center">
          <a
            href="https://github.com/amrxt1/cchive_backend"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            View source
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

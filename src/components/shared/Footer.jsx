const Footer = () => {
  return (
    <footer className="py-6 mt-16 mb-8 lg:mt-32 lg:mb-16 font-mono">
      <div>
        <div className="w-100% bg-text h-[1px]"></div>
        <p className="text-center">
          © {new Date().getFullYear()} CCHive. <br /> Built by students, for
          students.
        </p>
        <p className="text-center">
          <a
            href="https://github.com/amrxt1/cchive_backend"
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            View source
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

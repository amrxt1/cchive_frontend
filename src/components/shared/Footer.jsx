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
      <div className="mt-12 px-4 text-xs">
        <h3>Flaticon Attributions:</h3>
        <div className="grid">
          <a
            href="https://www.flaticon.com/free-icons/books"
            title="books icons"
          >
            Books icons created by Freepik
          </a>
          <a
            href="https://www.flaticon.com/free-icons/study"
            title="study icons"
          >
            Study icons created by Freepik
          </a>
          <a
            href="https://www.flaticon.com/free-icons/discussion"
            title="discussion icons"
          >
            Discussion icons created by Freepik
          </a>
          <a
            href="https://www.flaticon.com/free-icons/reviews"
            title="reviews icons"
          >
            Reviews icons created by Freepik
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

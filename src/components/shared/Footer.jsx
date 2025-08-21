const Footer = () => {
  return (
    <footer className="mt-16 mb-8 py-6 font-mono lg:mt-32 lg:mb-16">
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
      <div className="mt-12 px-4 text-xs">
        <h3>Flaticon Attributions:</h3>
        <div className="grid underline">
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

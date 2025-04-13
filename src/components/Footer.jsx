const Footer = () => {
    return (
      <footer >
        <p >
          © {new Date().getFullYear()} CCHive. Built by students, for students.
        </p>
        <p>
          <a
            href="https://github.com/amrxt1/cchive_backend"
            target="_blank"
            rel="noreferrer"
          >
            View source
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  
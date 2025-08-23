import Container from "../components/shared/Container";

const ContactUs = () => {
  return (
    <Container>
      <h1 className="text-primary mt-4 text-center text-2xl font-bold">
        Contact Us
      </h1>
      <form className="bg-surface mt-4 grid gap-y-4 rounded-md px-2 py-4">
        <input
          type="text"
          className="bg-background text-md rounded-md px-2 py-1"
          placeholder="First Name"
        />
        <input
          type="text"
          className="bg-background text-md rounded-md px-2 py-1"
          placeholder="Last Name"
        />
        <input
          type="text"
          className="bg-background text-md rounded-md px-2 py-1"
          placeholder="Your Email"
        />
        <input
          type="text"
          className="bg-background text-md rounded-md px-2 py-1"
          placeholder="Subject"
        />
        <textarea
          type="textarea"
          className="bg-background text-md resize-none rounded-md px-2 py-1"
          placeholder="Message"
          rows={4}
        />
        <button className="bg-primary text-surface w-full rounded-lg p-1 text-lg font-bold">
          Submit
        </button>
      </form>
    </Container>
  );
};

export default ContactUs;

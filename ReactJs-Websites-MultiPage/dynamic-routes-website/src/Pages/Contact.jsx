
export const Contact = () => {

  const handleFormSubmit = (formData) =>{
    const InputFormData = Object.fromEntries(formData.entries());

    console.log(InputFormData);
  }

  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">
          <form action={handleFormSubmit}>
            <input
              type="text"
              className="form-control"
              required
              autoComplete="off"
              placeholder="Enter your name"
              name="username"
            />
            <input
              type="email"
              className="form-control"
              required
              autoComplete="off"
              placeholder="Enter your email"
              name="email"
            />
             <input
              type="password"
              className="form-control"
              required
              autoComplete="off"
              placeholder="Enter your password"
              name="passwords"
            />
            <textarea
              className="form-control"
              rows="10"
              placeholder="Enter your message"
              required
              name="message"
              autoComplete="off"
            ></textarea>
            <button type="submit" value="send">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

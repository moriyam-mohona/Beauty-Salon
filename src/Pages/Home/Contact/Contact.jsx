import Button from "../../../Component/Button/Button";

const Contact = () => {
  return (
    <div className="bg-pink-50 p-20 ">
      <h2 className="font-bold text-4xl text-center mb-16 max-w-md mx-auto">
        Let us handle your project, professionally.
      </h2>
      <div className="mx-auto">
        <div className="flex gap-10 justify-center mb-5">
          <label className="input text-slate-400 flex items-center gap-2 w-full max-w-xs">
            First Name
            <input type="text" className="" />
          </label>
          <label className="input text-slate-400 flex items-center gap-2 w-full max-w-xs ">
            Last Name
            <input type="text" className="" />
          </label>
        </div>
        <div className="flex gap-10  justify-center mb-5">
          {" "}
          <label className="input text-slate-400 flex items-center gap-2 w-full max-w-xs">
            Email
            <input type="text" className="" />
          </label>
          <label className="input text-slate-400 flex items-center gap-2 w-full max-w-xs">
            Phone
            <input type="text" className="" />
          </label>
        </div>
        <div className="flex justify-center">
          <textarea
            placeholder="Your Message"
            className="textarea textarea-lg w-full max-w-2xl"
          ></textarea>
        </div>
        <div className="flex justify-center mt-10">
          {" "}
          <Button label="Send Message"></Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

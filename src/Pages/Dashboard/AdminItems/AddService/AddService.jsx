import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="p-10">
      <h2 className="font-bold text-4xl text-center mb-16">Add Service</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex gap-10 items-end justify-start">
          <div className="w-full">
            <label className="form-control   max-w-xs">
              <div className="label">
                <span className="label-text">Service Title*</span>
              </div>
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Service Title"
              className="input input-bordered w-full text-sm"
            />

            {errors.title && <span>This field is required</span>}
          </div>
          <input type="file" className="file-input bg-pink-200 text-sm" />
        </div>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Service Details*</span>
          </div>
        </label>
        <textarea
          {...register("details", { required: true })}
          type="text"
          className="textarea textarea-bordered textarea-lg w-full h-60 text-sm"
          placeholder="Service Details"
        ></textarea>
        {errors.details && <span>This field is required</span>}
        <button type="submit" className="btn btn-secondary bg-pink-500 my-5">
          Secondary
        </button>
      </form>
    </div>
  );
};

export default AddService;

import ButtonBlue from "../../../Components/ButtonBlue/ButtonBlue";
import "./ContactForm.css";
import location from "../../../assets/ContactPage/location.png";
import phone from "../../../assets/ContactPage/phone.png";
import email from "../../../assets/ContactPage/email.png";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../Utils/AxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
const ContactForm = () => {
  const axiosPublic = UseAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axiosPublic.post("/contact", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Your Form Has Been Submitted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please Fill Up The Form Again",
        });
      }
    });
  };
  return (
    <div>
      <div className=" bg-[#F8FDFE] text-[#1D2345] h-[min-content] xl:py-20 lg:py-20 md:py-14 sm:py-12 py-10">
        <div className="max-w-[1280px] mx-auto px-4 space-y-16">
          <div className="mx-auto w-[max-content] space-y-1.5">
            <h5 className=" xl:text-xl lg:text-xl md:text-xl sm:text-xl text-lg font-semibold ruluko-bold text-[#00626F] uppercase text-center">
              Contact Us
            </h5>
            <h1 className="xl:text-4xl/snug lg:text-4xl/snug md:text-4xl/snug sm:text-4xl/snug text-2xl/snug inter-bold  capitalize">
              Contact For Any Query
            </h1>
          </div>
          <div className="hero-content p-0 flex-col lg:flex-row">
            <div className="text-center lg:text-left xl:w-1/2 lg:w-1/2">
              <h4 className="text-xl inter-bold">Get In Touch</h4>
              <p className="py-4 text-gray-500 ruluko-regular">
                Let's Talk About Your Projects. Thank You For Contact Us.
              </p>
              <ul className="my-5 space-y-5">
                <li className="flex flex-col xl:flex-row lg:flex-row  items-center gap-4">
                  <img
                    className="w-12 h-12 hover:grayscale"
                    src={location}
                    alt="location icon"
                  />
                  <div className="space-y-1.5">
                    <h3 className="text-xl text-[#1D2345] inter-bold">
                      Address
                    </h3>
                    <p className=" ruluko-regular text-gray-500">
                      House-15, Road-07, Block-C, Kalshi,Mirpur-11, Dhaka-1216
                    </p>
                  </div>
                </li>
                <li className="flex flex-col xl:flex-row lg:flex-row  items-center gap-4">
                  <img
                    className="w-12 h-12 hover:grayscale"
                    src={phone}
                    alt="phone icon"
                  />
                  <div className="space-y-1.5">
                    <h3 className="text-xl text-[#1D2345] inter-bold">Phone</h3>
                    <p className=" ruluko-regular text-gray-500">
                      +8801768-789018
                    </p>
                  </div>
                </li>
                <li className="flex flex-col xl:flex-row lg:flex-row  items-center gap-4">
                  <img
                    className="w-12 h-12 hover:grayscale"
                    src={email}
                    alt="email icon"
                  />
                  <div className="space-y-1.5">
                    <h3 className="text-xl text-[#1D2345] inter-bold">
                      Email Address
                    </h3>
                    <p className=" ruluko-regular text-gray-500">
                      codexbond@gmail.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card custom-shadow bg-[#F8FDFE] text-[#1D2345] xl:w-1/2 lg:w-1/2">
              <div className="card-body">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="fieldset xl:grid-cols-2 lg:grid-cols-2 space-y-2.5  gap-2"
                  autocomplete="off"
                >
                  <input
                    type="text"
                    className="input input-sm md:input-md lg:input-lg xl:input-xl w-full bg-[#1d234528] custom-shadow-inner p-5"
                    placeholder="Your Name"
                    {...register("name")}
                    required
                  />
                  <input
                    type="email"
                    className="input input-sm md:input-md lg:input-lg xl:input-xl w-full bg-[#1d234528] custom-shadow-inner p-5"
                    placeholder="Email"
                    {...register("email")}
                    required
                  />
                  <input
                    type="number"
                    className="input input-sm md:input-md lg:input-lg xl:input-xl w-full bg-[#1d234528] xl:col-span-2 lg:col-span-2 custom-shadow-inner p-5 "
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Number is required",
                      pattern: {
                        value: /^(?!.*(\d)(?:[-\s()]?\1){5,})\+?[0-9]\d{6,14}$/,
                      },
                    })}
                  />
                  {errors.phone && (
                    <span className="text-red-600">Enter a valid number</span>
                  )}
                  <textarea
                    className="textarea textarea-sm md:textarea-md lg:textarea-lg xl:textarea-xl w-full bg-[#1d234528] xl:col-span-2 lg:col-span-2 h-36 custom-shadow-inner p-5"
                    placeholder="Message"
                    {...register("message")}
                    required
                  ></textarea>
                  <ButtonBlue>Submit</ButtonBlue>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

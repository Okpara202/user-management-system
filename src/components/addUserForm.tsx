import { FaEdit } from "react-icons/fa";
import { Iuser } from "../types/reduxType";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../reduxManager/store";
import { addUser } from "../reduxManager/usersSlice";
import { useNavigate } from "react-router-dom";
function AddUserForm() {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  // Zod validation for adding users
  const formSchema: ZodType<Omit<Iuser, "id">> = z.object({
    name: z
      .string()
      .min(1, "Name is required")
      .min(3, "Enter your real name")
      .regex(
        /^([A-Z][a-z]+(?:[-'][A-Z][a-z]+)?)( [A-Z][a-z]+(?:[-'][A-Z][a-z]+)?)+$/,
        {
          message:
            "Enter your full name, first letter of each name must be capital e.g (First Last)",
        }
      )
      .trim(),
    username: z
      .string()
      .min(1, "Username is required")
      .min(3, "Username must have atleast 4 characters")
      .trim(),
    email: z.string().email("Invalid email").trim(),
    address: z.object({
      street: z
        .string()
        .min(1, "Street name is required")
        .min(3, "Enter a valid street name")
        .trim(),
      suite: z
        .string()
        .min(1, "Suite number is required")
        .regex(/^\d+$/, { message: "Only numbers are allowed" })
        .trim(),
      city: z
        .string()
        .min(1, "City name is required")
        .min(3, "Enter a valid city name")
        .trim(),
      zipcode: z
        .string()
        .min(1, "Zipcode name is required")
        .regex(/^\d+$/, { message: "Only numbers are allowed" })
        .min(6, "Enter a valid zipcode")
        .trim(),
      geo: z.object({
        lat: z
          .string()
          .min(1, "Latitude is required")
          .trim()
          .regex(/^\d+$/, { message: "Only numbers are allowed" }),

        lng: z
          .string()
          .min(1, "Longitude is required")
          .regex(/^\d+$/, { message: "Only numbers are allowed" })
          .trim(),
      }),
    }),
    phone: z
      .string()
      .min(1, "Mobile number is required")
      .regex(/^\d+$/, { message: "Only numbers are allowed" })
      .min(10, "Invalid number")

      .trim(),
    website: z.string().url("Invalid website URL").trim(),
    company: z.object({
      name: z
        .string()
        .min(1, "Company name is required")
        .min(4, "Enter a valid company name")
        .trim(),
      catchPhrase: z
        .string()
        .min(1, "Task name is required")
        .min(7, "Enter a valid task")
        .trim(),
      bs: z
        .string()
        .min(1, "Task name is required")
        .min(7, "Enter a valid task")
        .trim(),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Iuser, "id">>({ resolver: zodResolver(formSchema) });

  const submitForm = (data: Omit<Iuser, "id">) => {
    // submit function

    const confirmUpdate = confirm(
      `Do you want to add ${data.name} to the database`
    );

    if (confirmUpdate) {
      dispatch(addUser(data));
      navigate("/");
      alert(`${data?.name} succesfully added`);
    } else {
      return;
    }
  };
  return (
    <form onSubmit={handleSubmit(submitForm)} className="mt-10">
      <p className="text-xl text-orange font-medium -mb-3">Personal Info</p>
      <aside className="grid grid-cols-2 md:grid-cols-3 gap-x-5">
        <label className=" mt-4 col-span-2">
          <p className="text-gray-500 font-medium">
            Full Name <span>*</span>
          </p>
          <input
            type="text"
            placeholder="First Letter of each name must be capital eg. Favour Okpara"
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            {...register("name")}
            onInput={(e) => {
              // capitalize first letter of each word
              e.currentTarget.value = e.currentTarget.value
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase());
            }}
          />
          {errors?.name && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.name.message}
            </p>
          )}
        </label>

        <label className=" mt-4">
          <p className="text-gray-500 font-medium">
            Username <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] font-medium focus:outline-orange px-3 py-2 border-2 border-gray-600 rounded-lg"
            placeholder="Eg. Okpara202"
            {...register("username")}
          />
          {errors?.username && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.username.message}
            </p>
          )}
        </label>

        <label className=" mt-4">
          <p className="text-gray-500 font-medium">
            Email<span>*</span>
          </p>
          <input
            type="email"
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            {...register("email")}
            placeholder="Eg. okpara@gmail.com"
          />
          {errors?.email && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.email.message}
            </p>
          )}
        </label>

        <label className=" mt-4">
          <p className="text-gray-500 font-medium">
            Mobile no <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            placeholder="Eg. 0494820840"
            {...register("phone")}
          />
          {errors?.phone && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.phone.message}
            </p>
          )}
        </label>
        <label className=" mt-4">
          <p className="text-gray-500 font-medium">
            Website <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            placeholder="Eg. https://okpara.com"
            {...register("website")}
          />
          {errors?.website && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.website.message}
            </p>
          )}
        </label>
      </aside>

      <p className="text-xl mt-10 -mb-3 text-orange font-medium">
        Contact Info
      </p>
      <aside className="grid grid-cols-2 md:grid-cols-3 gap-x-5">
        <label className=" mt-4">
          <p className="text-gray-500 font-medium">
            Street <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            placeholder="Eg. Parklane"
            {...register("address.street")}
            // capitalize first letter of each word
            onInput={(e) =>
              (e.currentTarget.value = e.currentTarget.value
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase()))
            }
          />
          {errors?.address?.street && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.address.street.message}
            </p>
          )}
        </label>
        <label className=" mt-4">
          <p className="text-gray-500 font-medium">
            Suite <span>*</span>
          </p>
          <input
            type="text"
            placeholder="223"
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            {...register("address.suite")}
          />
          {errors?.address?.suite && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.address.suite.message}
            </p>
          )}
        </label>

        <label className=" mt-4">
          <p className="text-gray-500 font-medium">
            City <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            placeholder="Eg. Abakaliki"
            {...register("address.city")}
            // capitalize first letter of each word
            onInput={(e) =>
              (e.currentTarget.value = e.currentTarget.value
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase()))
            }
          />
          {errors?.address?.city && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.address.city.message}
            </p>
          )}
        </label>

        <label className=" mt-4">
          <p className="text-gray-500 font-medium">
            Zipcode<span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            placeholder="Eg. 00000000"
            {...register("address.zipcode")}
            // capitalize first letter of each word
          />
          {errors?.address?.zipcode && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.address.zipcode.message}
            </p>
          )}
        </label>

        <label className=" mt-4">
          <p className="text-gray-500 font-medium">
            Latitude <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            placeholder="Eg. 90"
            {...register("address.geo.lat")}
            // capitalize first letter of each word
          />
          {errors?.address?.geo?.lat && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.address.geo.lat.message}
            </p>
          )}
        </label>
        <label className=" mt-4">
          <p className="text-gray-500 font-medium">
            Longitude <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            placeholder="Eg. 90"
            {...register("address.geo.lng")}
          />
          {errors?.address?.geo?.lng && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.address.geo.lng.message}
            </p>
          )}
        </label>
      </aside>

      <p className="text-xl mt-10 -mb-3 text-orange font-medium">Work Info</p>
      <aside className="grid grid-cols-2 md:grid-cols-3 gap-x-5">
        <label className=" mt-4">
          <p className="text-gray-500 font-medium">
            Place of Work <span>*</span>
          </p>
          <textarea
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            placeholder="Eg. Google"
            {...register("company.name")}
            // capitalize first letter of each word
            onInput={(e) =>
              (e.currentTarget.value = e.currentTarget.value
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase()))
            }
          />
          {errors?.company?.name && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.company.name.message}
            </p>
          )}
        </label>
        <label className=" mt-4 col-span-2 md:col-span-1">
          <p className="text-gray-500 font-medium">
            Secondary task <span>*</span>
          </p>
          <textarea
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            placeholder="Eg. Updating hard Disk drive"
            {...register("company.bs")}
            // capitalize first letter of each word
            onInput={(e) =>
              (e.currentTarget.value = e.currentTarget.value
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase()))
            }
          />
          {errors?.company?.bs && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.company.bs.message}
            </p>
          )}
        </label>

        <label className="col-span-3 md:col-span-1">
          <p className="mt-4 f text-gray-500 font-medium">
            Main task <span>*</span>
          </p>
          <textarea
            className="w-[100%] font-medium focus:outline-orange  px-3 py-2 border-2 border-gray-600 rounded-lg"
            placeholder="Eg. Maintaining server room"
            {...register("company.catchPhrase")}
            // capitalize first letter of each word
            onInput={(e) =>
              (e.currentTarget.value = e.currentTarget.value
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase()))
            }
          />
          {errors?.company?.catchPhrase && (
            <p className="mt-1 text-sm text-rose-500 font-medium px-4">
              {errors.company.catchPhrase.message}
            </p>
          )}
        </label>
      </aside>

      <button className="mt-10 md:mt-15 bg-orange text-white px-10 py-2 rounded flex items-center mx-auto text-xl hover:bg-blue-950 hover:text-orange hover:font-black">
        <FaEdit /> <span className="ml-3">Add New User</span>
      </button>
    </form>
  );
}

export default AddUserForm;

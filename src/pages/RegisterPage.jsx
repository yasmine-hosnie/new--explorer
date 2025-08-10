import "./../styles/AuthForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  name: yup.string().required("Name is required"),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // تحقق من وجود البريد مسبقًا
    const exists = users.some((user) => user.email === data.email);
    if (exists) {
      alert("Email already registered. Please login.");
      navigate("/login");
      return;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Name" {...register("name")} />
          <p className="auth-error">{errors.name?.message}</p>

          <input type="email" placeholder="Email" {...register("email")} />
          <p className="auth-error">{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p className="auth-error">{errors.password?.message}</p>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const getItem = () => {
  const list = localStorage.getItem("register");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const RegLog = () => {
  const [dt, setdt] = useState();
  const navigate = useNavigate();
  const [val, setVal] = useState(getItem());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const list = JSON.parse(localStorage.getItem("register"));
    console.log(list);

    val.push(data);

    localStorage.setItem("register", JSON.stringify(val));

    console.log(val);

    reset();
    navigate("/showuser");
  };

  return (
    <>
      <div className="arpit">
        <div className="container a">
          <div className="col-sm-6">
            <div className="f">
              <h3>RGISTER FORM</h3>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <p>
                    Enter Your Fullname :
                    <input
                      className="form-control"
                      {...register("fullName", {
                        required: true,
                        maxLength: 20,
                      })}
                    />
                    {errors.fullName && (
                      <span className="sp">Please Enter valid name </span>
                    )}
                  </p>
                </div>
                <div className="form-group">
                  <p>
                    Enter Email :
                    <input
                      className="form-control"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      })}
                    />
                    {errors.email && <span className="sp">@ is essential</span>}
                  </p>
                </div>
                <div className="form-group">
                  <p>
                    Enter Your Age :
                    <input
                      className="form-control"
                      type="number"
                      {...register("age", { required: true, min: 18, max: 23 })}
                    />
                    {errors.age && <span className="sp">age is in 18-23</span>}
                  </p>
                </div>

                <div className="form-group">
                  <p>
                    Enter YourMobile No. :
                    <input
                      className="form-control"
                      {...register("mobile", {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                      })}
                    />
                    {errors.mobile && (
                      <span className="sp">Mobile No is Not valid </span>
                    )}
                  </p>
                </div>
                <div className="form-check">
                  <input
                    {...register("gender", { required: true })}
                    value="male"
                    className="form-check-input"
                    type="radio"
                  />{" "}
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    MALE
                  </label>
                  <input
                    {...register("gender", { required: true })}
                    value="female"
                    className="form-check-input"
                    type="radio"
                  />{" "}
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    FEMALE
                  </label>
                  <input
                    {...register("gender", { required: true })}
                    value="other"
                    className="form-check-input"
                    type="radio"
                  />{" "}
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    OTHER
                  </label>{" "}
                </div>
                <div className="form-group">
                  {errors.gender && (
                    <span className="sp">Please Choose Gender</span>
                  )}
                  <p>
                    <select
                      {...register("city", { required: true })}
                      className="form-select "
                      aria-label=".form-select-sm example"
                    >
                      <option value=""> Select city...</option>
                      <option value="dewas">DEWAS</option>
                      <option value="ujjain">UJJAIN</option>
                      <option value="indore">INDORE</option>
                    </select>
                    {errors.city && (
                      <span className="sp">Please select city </span>
                    )}
                  </p>
                </div>
                <div className="checkbox">
                  <label>
                    <input
                      {...register("checked", { required: true })}
                      type="checkbox"
                    />{" "}
                    Remember me
                  </label>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary  btn-block mt-2"
                    type="submit"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegLog;

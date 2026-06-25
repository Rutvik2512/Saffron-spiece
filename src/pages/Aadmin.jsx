import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Aadmin = () => {
    // var view = false;
    const [view, setView] = useState(false)
    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object({
        username: Yup.string()
            .required("Username is required")
            .min(3, "Minimum 3 characters"),

        password: Yup.string()
            .required("Password is required")
            .min(6, "Minimum 6 characters"),
    });

    const handleSubmit = (values) => {
        console.log(values);
        alert("Login Successful");
    };
    console.log("out side view ", view);
    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-50">
            <div className="bg-white w-[400px] p-8 rounded-3xl shadow-lg">

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="bg-orange-100 p-4 rounded-full">
                        <FaLock className="text-3xl text-orange-500" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-bold text-center">
                    Admin Login
                </h1>

                <p className="text-center text-gray-500 mt-2 mb-8">
                    Saffron & Spice management portal
                </p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        {/* Username */}
                        <div className="mb-5">
                            <label className="block text-gray-700 mb-2">
                                Username
                            </label>

                            <Field
                                type="text"
                                name="username"
                                placeholder="admin"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-400"
                            />

                            <ErrorMessage
                                name="username"
                                component="p"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2">
                                Password
                            </label>
                            <div
    className="w-full border flex items-center justify-between border-gray-300 rounded-lg p-3 focus-within:border-orange-400"
>
    <Field
        type={view ? "text" : "password"}
        name="password"
        placeholder="********"
        className="focus:outline-none"
    />
                                <div>
                                    {view ? <FaEyeSlash onClick={() => {
                                        console.log("ughj");
                                        // view = !view;
                                        setView(false)

                                    }} /> : <FaEye onClick={() => {
                                        console.log("old values : ", view)
                                        // view = !view
                                        setView(true)
                                        console.log("new values : ", view)
                                    }} />}


                                </div>
                            </div>
                            <ErrorMessage
                                name="password"
                                component="p"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-full transition"
                        >
                            Sign In
                        </button>

                        

                        <div className="text-center mt-4">
                            <a href="/"><button
                                type="button"
                                className="text-gray-500 hover:text-orange-500"
                            >
                                Back to Website
                            </button></a>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Aadmin;
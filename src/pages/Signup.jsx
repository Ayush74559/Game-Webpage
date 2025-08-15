import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .required('Full name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async () => {
      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 800));
      setIsLoading(false);
      navigate('/login');
    },
  });

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join and start your journey"
  sideTitle="Join Code Battle Arena"
      sideDescription="Create your account to start competing and winning."
      sideBullets={["Secure account", "Track progress", "Exclusive events"]}
      footerText={"Already have an account?"}
      footerLinkTo="/login"
      footerLinkLabel="Sign in"
    >
      <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-5">
        <div>
          <label className="block text-sm sm:text-base text-gray-300">Full Name</label>
          <input
            {...formik.getFieldProps('fullName')}
            type="text"
            placeholder="Your name"
            className="mt-1 w-full px-5 py-3.5 rounded-xl bg-gray-900 text-white border border-gray-700 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-sm sm:text-base text-red-400 mt-1">{formik.errors.fullName}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm sm:text-base text-gray-300">Email</label>
          <input
            {...formik.getFieldProps('email')}
            type="email"
            placeholder="you@example.com"
            className="mt-1 w-full px-5 py-3.5 rounded-xl bg-gray-900 text-white border border-gray-700 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-sm sm:text-base text-red-400 mt-1">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm sm:text-base text-gray-300">Password</label>
          <input
            {...formik.getFieldProps('password')}
            type="password"
            placeholder="********"
            className="mt-1 w-full px-5 py-3.5 rounded-xl bg-gray-900 text-white border border-gray-700 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-sm sm:text-base text-red-400 mt-1">{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm sm:text-base text-gray-300">Confirm Password</label>
          <input
            {...formik.getFieldProps('confirmPassword')}
            type="password"
            placeholder="********"
            className="mt-1 w-full px-5 py-3.5 rounded-xl bg-gray-900 text-white border border-gray-700 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-sm sm:text-base text-red-400 mt-1">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-base sm:text-lg font-semibold transition-transform duration-150"
        >
          {isLoading ? 'Creating account...' : 'Create Account'}
        </button>
      </form>
    </AuthLayout>
  );
}

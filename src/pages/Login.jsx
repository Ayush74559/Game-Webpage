import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 600));
      localStorage.setItem('isAuthenticated', 'true');
      setIsLoading(false);
      navigate('/dashboard');
    },
  });

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue to the dashboard"
  sideTitle="Code Battle Arena"
      sideDescription="Sign in to track stats, join tournaments, and compete."
      sideBullets={["AI matchmaking", "Live leaderboards", "Weekly events"]}
      footerText={"Don't have an account?"}
      footerLinkTo="/signup"
      footerLinkLabel="Sign up"
    >
      <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-5">
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

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-base sm:text-lg font-semibold transition-transform duration-150"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </AuthLayout>
  );
}

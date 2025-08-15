import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="w-full max-w-md p-8 rounded-xl bg-gray-800/60 border border-gray-700 shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-white">Welcome Back</h2>
          <p className="text-sm text-gray-400">Sign in to continue to the dashboard</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300">Email</label>
            <input
              {...formik.getFieldProps('email')}
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-xs text-red-400 mt-1">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label className="block text-sm text-gray-300">Password</label>
            <input
              {...formik.getFieldProps('password')}
              type="password"
              placeholder="********"
              className="mt-1 w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-xs text-red-400 mt-1">{formik.errors.password}</div>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded transition-transform duration-150"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>

          <div className="text-center text-sm text-gray-400">
            Don't have an account? <Link to="/signup" className="text-indigo-400">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

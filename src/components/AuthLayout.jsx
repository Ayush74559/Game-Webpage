import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthLayout({
  title,
  subtitle,
  sideTitle,
  sideDescription,
  sideBullets = [],
  footerText,
  footerLinkTo,
  footerLinkLabel,
  children,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 px-6">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl lg:max-w-4xl rounded-2xl overflow-hidden border border-gray-700 bg-gray-800/70 shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Side Panel */}
            <div className="hidden md:flex flex-col justify-center gap-4 p-10 bg-gradient-to-br from-indigo-600/15 via-purple-600/10 to-transparent border-r border-white/10">
              <div>
                <h1 className="text-3xl font-extrabold">{sideTitle}</h1>
                {sideDescription && <p className="text-gray-300 mt-2">{sideDescription}</p>}
              </div>
              {Array.isArray(sideBullets) && sideBullets.length > 0 && (
                <ul className="space-y-2 text-gray-300 text-sm">
                  {sideBullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Form Panel */}
            <div className="p-6 sm:p-8 md:p-10">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{title}</h2>
                {subtitle && (
                  <p className="text-sm sm:text-base text-gray-400">{subtitle}</p>
                )}
              </div>

              {children}

              {(footerText || footerLinkLabel) && (
                <div className="text-center text-sm text-gray-400 mt-4">
                  {footerText}{' '}
                  {footerLinkTo && footerLinkLabel && (
                    <Link to={footerLinkTo} className="text-indigo-400">
                      {footerLinkLabel}
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

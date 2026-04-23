'use client';

import { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      <div
        className={`
          fixed bottom-4 right-4 left-4 md:left-auto md:w-[420px] z-[100]
          animate-in slide-in-from-bottom-4 fade-in duration-500
        `}
      >
        <div
          className="
            relative overflow-hidden rounded-2xl
            bg-white/95 backdrop-blur-xl
            border border-[var(--border)]
            shadow-[0_20px_60px_rgba(18,59,104,0.15)]
            p-5
          "
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="
              absolute top-3 right-3 p-1.5 rounded-full
              text-[var(--muted)] hover:text-[var(--text)]
              hover:bg-[var(--bg-soft)]
              transition-colors duration-200
            "
            aria-label="Cerrar banner de cookies"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="flex gap-4">
            {/* Icon */}
            <div
              className="
                flex-shrink-0 w-10 h-10 rounded-xl
                bg-gradient-to-br from-[var(--orange)] to-[#e07d20]
                flex items-center justify-center
                shadow-lg shadow-orange-500/20
              "
            >
              <Cookie className="w-5 h-5 text-white" />
            </div>

            {/* Text content */}
            <div className="flex-1 pr-6">
              <h3 className="font-heading font-bold text-[var(--blue-deep)] text-base mb-1">
                Tu privacidad importa
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Puedes aceptar todas las cookies o gestionar tus preferencias.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleAccept}
                  className="
                    inline-flex items-center justify-center gap-2
                    px-4 py-2 rounded-full
                    bg-[var(--orange)] text-white
                    font-semibold text-sm
                    shadow-lg shadow-orange-500/25
                    hover:shadow-xl hover:shadow-orange-500/30
                    hover:-translate-y-0.5
                    active:translate-y-0
                    transition-all duration-200
                  "
                >
                  Aceptar todas
                </button>

                <button
                  onClick={handleReject}
                  className="
                    inline-flex items-center justify-center gap-2
                    px-4 py-2 rounded-full
                    bg-white text-[var(--blue-deep)]
                    font-semibold text-sm
                    border border-[var(--border)]
                    hover:bg-[var(--bg-soft)]
                    hover:border-[var(--blue)]/30
                    active:translate-y-0
                    transition-all duration-200
                  "
                >
                  Rechazar
                </button>
              </div>

              {/* Settings link */}
              <button
                onClick={() => setShowSettings(true)}
                className="
                  inline-flex items-center gap-1.5 mt-3
                  text-sm font-medium text-[var(--blue)]
                  hover:text-[var(--blue-deep)]
                  hover:underline underline-offset-4
                  transition-colors duration-200
                "
              >
                <Settings className="w-3.5 h-3.5" />
                Preferencias de cookies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div
          className="
            fixed inset-0 z-[110]
            bg-black/40 backdrop-blur-sm
            flex items-center justify-center p-4
            animate-in fade-in duration-200
          "
          onClick={() => setShowSettings(false)}
        >
          <div
            className="
              w-full max-w-md rounded-2xl
              bg-white border border-[var(--border)]
              shadow-[0_25px_80px_rgba(18,59,104,0.2)]
              p-6
              animate-in zoom-in-95 duration-200
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-10 h-10 rounded-xl
                    bg-gradient-to-br from-[var(--blue)] to-[var(--blue-deep)]
                    flex items-center justify-center
                  "
                >
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[var(--blue-deep)] text-lg">
                    Preferencias
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    Gestiona tus cookies
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="
                  p-2 rounded-full
                  text-[var(--muted)] hover:text-[var(--text)]
                  hover:bg-[var(--bg-soft)]
                  transition-colors duration-200
                "
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cookie Options */}
            <div className="space-y-4 mb-6">
              {/* Necessary */}
              <div
                className="
                  flex items-center justify-between p-4 rounded-xl
                  bg-[var(--bg-soft)]
                "
              >
                <div>
                  <h4 className="font-semibold text-[var(--text)] text-sm">
                    Cookies necesarias
                  </h4>
                  <p className="text-xs text-[var(--muted)] mt-0.5">
                    Siempre activas. Necesarias para el funcionamiento del sitio.
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="
                      w-11 h-6 rounded-full appearance-none
                      bg-[var(--green)] cursor-not-allowed
                      checked:after:translate-x-5
                      after:content-[''] after:absolute after:top-0.5 after:left-0.5
                      after:w-5 after:h-5 after:rounded-full after:bg-white
                      after:transition-transform
                    "
                  />
                </div>
              </div>

              {/* Analytics */}
              <div
                className="
                  flex items-center justify-between p-4 rounded-xl
                  border border-[var(--border)]
                  hover:border-[var(--blue)]/30
                  transition-colors duration-200
                "
              >
                <div>
                  <h4 className="font-semibold text-[var(--text)] text-sm">
                    Cookies analíticas
                  </h4>
                  <p className="text-xs text-[var(--muted)] mt-0.5">
                    Nos ayudan a mejorar el sitio web.
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="
                      w-11 h-6 rounded-full appearance-none
                      bg-[var(--border)] cursor-pointer
                      checked:bg-[var(--blue)]
                      checked:after:translate-x-5
                      after:content-[''] after:absolute after:top-0.5 after:left-0.5
                      after:w-5 after:h-5 after:rounded-full after:bg-white
                      after:transition-transform
                      transition-colors duration-200
                    "
                  />
                </div>
              </div>

              {/* Marketing */}
              <div
                className="
                  flex items-center justify-between p-4 rounded-xl
                  border border-[var(--border)]
                  hover:border-[var(--blue)]/30
                  transition-colors duration-200
                "
              >
                <div>
                  <h4 className="font-semibold text-[var(--text)] text-sm">
                    Cookies de marketing
                  </h4>
                  <p className="text-xs text-[var(--muted)] mt-0.5">
                    Personalizan anuncios y contenido.
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    className="
                      w-11 h-6 rounded-full appearance-none
                      bg-[var(--border)] cursor-pointer
                      checked:bg-[var(--blue)]
                      checked:after:translate-x-5
                      after:content-[''] after:absolute after:top-0.5 after:left-0.5
                      after:w-5 after:h-5 after:rounded-full after:bg-white
                      after:transition-transform
                      transition-colors duration-200
                    "
                  />
                </div>
              </div>
            </div>

            {/* Modal actions */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  localStorage.setItem('cookie-consent', 'custom');
                  setShowSettings(false);
                  setIsVisible(false);
                }}
                className="
                  flex-1 inline-flex items-center justify-center gap-2
                  px-4 py-2.5 rounded-full
                  bg-[var(--blue-deep)] text-white
                  font-semibold text-sm
                  shadow-lg shadow-blue-900/25
                  hover:shadow-xl
                  hover:-translate-y-0.5
                  active:translate-y-0
                  transition-all duration-200
                "
              >
                Guardar preferencias
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="
                  px-4 py-2.5 rounded-full
                  text-[var(--muted)] font-semibold text-sm
                  hover:text-[var(--text)]
                  hover:bg-[var(--bg-soft)]
                  transition-all duration-200
                "
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

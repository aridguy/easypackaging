import React from 'react';
import '../App.css';

function WhatsAppButton() {
  const phone = '+2347012983524';
  const message = encodeURIComponent('Hello! I would like to enquire about your carton packaging services.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
        <path d="M16.003 3C9.385 3 4.003 8.382 4.003 15c0 2.12.55 4.11 1.514 5.84L4 29l8.35-1.49A11.94 11.94 0 0 0 16 28c6.618 0 12-5.382 12-12S22.62 3 16.003 3zm0 22c-1.84 0-3.56-.5-5.04-1.36l-.36-.21-4.96.88.9-4.83-.23-.37A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10.003-10C21.52 5 26 9.486 26 15s-4.48 10-9.997 10zm5.5-7.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface BookingModalContextType {
  isBookingOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const BookingModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBookingModal = useCallback(() => {
    setIsBookingOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsBookingOpen(false);
  }, []);

  // Permite que qualquer elemento com evento ou clique global também acione a abertura
  useEffect(() => {
    const handleOpenEvent = () => setIsBookingOpen(true);
    const handleCloseEvent = () => setIsBookingOpen(false);

    window.addEventListener('open-booking-modal', handleOpenEvent);
    window.addEventListener('close-booking-modal', handleCloseEvent);

    return () => {
      window.removeEventListener('open-booking-modal', handleOpenEvent);
      window.removeEventListener('close-booking-modal', handleCloseEvent);
    };
  }, []);

  return (
    <BookingModalContext.Provider value={{ isBookingOpen, openBookingModal, closeBookingModal }}>
      {children}
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = (): BookingModalContextType => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal deve ser usado dentro de BookingModalProvider');
  }
  return context;
};

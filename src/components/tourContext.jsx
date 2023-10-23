import { createContext, useContext, useState } from 'react';

const TourContext = createContext();

export function TourProvider({ children }) {
  const [tour, setTour] = useState(null);

  return (
    <TourContext.Provider value={{ tour, setTour }}>
      {children}
    </TourContext.Provider>
  );
}

export function useTour() {
  return useContext(TourContext);
}

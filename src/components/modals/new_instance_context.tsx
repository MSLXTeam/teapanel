import React, {createContext, ReactNode, useContext, useState} from 'react';

interface NewInstanceContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const NewInstanceContext = createContext<NewInstanceContextType | undefined>(undefined);

export const CreatingNewInstanceContextProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <NewInstanceContext.Provider value={{isOpen, openModal, closeModal}}>
            {children}
        </NewInstanceContext.Provider>
    );
};

export const useNewInstanceContext = () => {
    const context = useContext(NewInstanceContext);
    if (!context) {
        throw new Error('useNewInstance must be used within a NewInstanceProvider');
    }
    return context;
};

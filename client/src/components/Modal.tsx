import React, { useRef } from "react";
import { ModalProps } from "../@types/types";

export default function Modal({ children, isOpen, setIsOpen }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    function closeModal(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target === overlayRef.current) {
            setIsOpen(false);
        }
    }

    return (
        <>
            <div onClick={closeModal} ref={overlayRef} className={`overlay ${!isOpen && "hidden"}`}  >
                <div className="modal">
                    {
                        children
                    }
                </div>
            </div>
        </>
    )
}
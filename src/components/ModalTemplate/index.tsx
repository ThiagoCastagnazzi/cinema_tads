"use cliente";

const ModalTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 shadow-md">
      {children}
    </div>
  );
};

export default ModalTemplate;

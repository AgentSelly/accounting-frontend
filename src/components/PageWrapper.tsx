import { ReactNode } from "@tanstack/react-router";

interface PageWrapperProps {
     children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps ) {
     return (
          <div className="container mx-auto p-4">
               {children}
          </div>
     );
}

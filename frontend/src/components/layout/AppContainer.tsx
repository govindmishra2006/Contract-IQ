import { ReactNode } from "react";

// Props expected by this component
interface AppContainerProps {
  children: ReactNode;
}

// Reusable wrapper component
export default function AppContainer({
  children,
}: AppContainerProps) {
  return (
    <div className="container mx-auto px-6">

      {/* Anything passed between opening
          and closing tags will appear here */}

      {children}

    </div>
  );
}
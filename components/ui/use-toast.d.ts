declare module '@/components/ui/use-toast' {
  export interface Toast {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: React.ReactElement;
    // Fügen Sie hier weitere Eigenschaften hinzu, die Ihr Toast-Objekt haben könnte
  }

  export interface UseToastReturn {
    toast: (props: Omit<Toast, 'id'>) => { id: string; dismiss: () => void; update: (props: Toast) => void };
    dismiss: (toastId?: string) => void;
  }

  export function useToast(): UseToastReturn;
}
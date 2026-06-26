'use client'; // Error components must be Client Components
 
import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex min-h-screen items-center justify-center bg-noir">
      <Container className="text-center">
        <h2 className="text-2xl font-bold text-arctic mb-4">Something went wrong!</h2>
        <p className="text-mint mb-8">An unexpected error occurred while loading this page.</p>
        <Button onClick={() => reset()} variant="primary">
          Try again
        </Button>
      </Container>
    </main>
  );
}

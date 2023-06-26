
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useClient } from 'next/client';

function ScrollToTopOnPathChange({ text, href }) {
  const router = useRouter();
  const client = useClient();

  useEffect(() => {
    if (!client) {
      return null; // Render nothing on the server-side
    }

    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [client, router.events]);

  return <Link href={href}>{text}</Link>;
}

export default ScrollToTopOnPathChange;

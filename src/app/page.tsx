import { Background } from '@/components/Background/Background';
import { Logo } from '@/components/Logo/Logo';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Logo />
      <Background />
    </main>
  );
}

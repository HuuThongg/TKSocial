'use client';

import { SocketProvider } from './socket-provider';

export default function Provider({ children }: { children: React.ReactNode }) {
  return <SocketProvider>{children}</SocketProvider>;
}

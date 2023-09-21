import { NextApiRequest } from 'next';
import { NextApiResponseServerIo } from '@/types';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo,
) {
  if (req.method !== 'DELETE' && req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const {content} = req.body;
  res?.socket?.server?.io?.emit('chat message', content);
  return res.status(200).json(content);
}
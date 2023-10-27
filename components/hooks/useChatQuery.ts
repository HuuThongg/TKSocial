'use  client';
import qs from 'query-string';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSocket } from '../providers/socket-provider';

interface ChatQueryProps {
  queryKey: string;
  apiUrl: string;
  paramKey: 'channelId' | 'conversationId';
  paramValue: string;
}
export const useChatQuery = ({
  queryKey,
  apiUrl,
  paramKey,
  paramValue,
}: ChatQueryProps) => {
  const { isConnected } = useSocket();
  const fetchMessages = async ({ pageParam = undefined }) => {
    const url = qs.stringifyUrl(
      {
        url: apiUrl,
        query: {
          cursor: pageParam,
          [paramKey]: paramValue,
        },
      },
      { skipNull: true },
    );

    const res = await fetch(url);
    return res.json();
  };

const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
  useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: async ({ pageParam = undefined }) => {
      const url = qs.stringifyUrl(
        {
          url: apiUrl,
          query: {
            cursor: pageParam,
            [paramKey]: paramValue,
          },
        },
        { skipNull: true },
      );

      const res = await fetch(url);
      return res.json();
    },
    initialPageParam: 0,
    // getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
    getNextPageParam: (lastPage) => lastPage?.nextCursor,
    // maxPages: 3,
    refetchInterval: isConnected ? false : 1000,
  });

return {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  status,
};
  // return fetchMessages;
};

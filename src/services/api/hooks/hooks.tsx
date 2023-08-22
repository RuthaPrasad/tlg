import { HttpService } from '../http';
import { useMutation, useQuery } from '@tanstack/react-query';

export const GET = (key: any, url: string) => {
  return useQuery({
    queryKey: key,
    queryFn: () => {
      return HttpService.GET(url);
    },
  });
};

export const POST = (key: any, url: string, payload: any) => {
  return useMutation({
    mutationKey: key,
    mutationFn: (payload: any) => {
      return HttpService.POST(url, payload);
    },
  });
};

export const PUT = (key: any) => {
  return useMutation({
    mutationKey: key,
    mutationFn: ({ url, payload }: { url: string; payload: any }) => {
      return HttpService.PUT(url, payload);
    },
  });
};

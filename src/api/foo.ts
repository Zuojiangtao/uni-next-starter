import { httpRequest } from '@/utils/httpRequest.ts';

export interface Foo {
  id: number;
  name: string;
}

export function foo() {
  return httpRequest.Get<Foo>('/foo', {
    params: {
      id: 1,
      page: 1,
      pageSize: 20,
    },
  })
}

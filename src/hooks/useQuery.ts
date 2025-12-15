import { onLaunch } from '@dcloudio/uni-app';

export function useQuery(key?: MaybeRefOrGetter<string>) {
  const query = ref<AnyObject>({})
  onLaunch((q) => {
    query.value = q || {}
  })
  const value = computed(() => (key ? query.value[toValue(key)] : null))
  return { query, value }
}

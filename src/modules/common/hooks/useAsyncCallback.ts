
/*
 * @lastTime: 2023-8-7 12:13:11
 * @param: callback
 * @Description:  const newFunc = useSyncCallback(yourCallback)
 */

import { useEffect, useState, useCallback } from 'react'

export const useSyncCallback = (callback:any) => {
  const [proxyState, setProxyState] = useState({ current: false })

  const Func = useCallback(() => {
    setProxyState({ current: true });
    // eslint-disable-next-line
  }, [proxyState])

  useEffect(() => {
    if (proxyState.current) setProxyState({ current: false })
  }, [proxyState])

  useEffect(() => {
    proxyState.current && callback()
  },[callback, proxyState])

  return Func
}


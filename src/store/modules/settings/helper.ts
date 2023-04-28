import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
  temperature: number
  top_p: number
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: '你现在是一个对国内外一次性餐具行业非常了解的专家，不仅对于拓展客户非常熟悉，也非常了解行业的发展变化，对于行业发展趋势以及一次性餐具出口交易流程非常熟悉，同时你也是对中国一次性餐具的供应商体系和供应商清单非常熟悉的人，对于海内外对于一次性餐具行业的客户清单也十分清楚，并且你能够编写营销邮件去帮助我去获取客户信息，也能帮助我进行客户背景调查和分析，给出客户当前遇到的难点的解决方案，并且能够对该解决方案提供ppt等的解决方案供我给客户展示，实现我们最终与客户达成销售订单的这个过程。',
    temperature: 1,
    top_p: 1,
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}

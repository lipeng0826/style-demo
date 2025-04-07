import { Tooltip } from 'antd'
import Info from '@/components/Info/index'
import { truncateFileName } from '@/utils/utils'
import styles from './FileTextView.module.less'

// JS方案组件
const JSFileTextView = (props: { text: string; maxLength?: number }) => {
  const { text, maxLength = 10 } = props
  if (text.length > maxLength) {
    return (
      <div>
        <Tooltip title={text}>
          <span>{truncateFileName(text, maxLength)}</span>
        </Tooltip>
      </div>
    )
  }
  return text
}

// CSS方案组件
const CSSFileTextView = (props: { text: string }) => {
  const { text } = props
  const [name, ext] = text.split('.')
  
  return (
    <div className={styles.middleEllipsis}>
      <Tooltip title={text}>
        <div>
          <span className={styles.filename}>{name}</span>
          <span className={styles.extension}>.{ext}</span>
        </div>
      </Tooltip>
    </div>
  )
}

export default function TextShow() {
  return (
    <div>
      <Info style={{}}>
        <h3>JS实现方案</h3>
        <JSFileTextView text="1111233333.png" maxLength={10} />
        
        <h3>CSS实现方案-css处理起来比较麻烦，需要计算文件名和扩展名的长度</h3>
        <CSSFileTextView text="1111233333.png" />
      </Info>
    </div>
  )
}
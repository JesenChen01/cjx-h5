import { defineComponent } from 'vue'

export default defineComponent({
  name: 'jsx',
  meta: {
    title: 'JSX 示例',
    i18n: 'menus.jsx',
    keepAlive: true,
  },
  setup() {
    // 定义响应式数据
    const count = ref<number>(0)
    const message = ref('Hello TSX!')
    const items = ref(['苹果', '香蕉', '橙子'])
    return () => (
      <div>
        <h2>JSX 示例</h2>
        <p>
          消息：
          {message.value}
        </p>
        <button onClick={() => { count.value++ }}>
          计数：
          {count.value}
        </button>
        <ul>
          {items.value.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  },
})

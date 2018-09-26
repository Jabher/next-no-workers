import dynamic from 'next/dynamic'

const Test = dynamic(import('../test.js'), {
  ssr: false
})

export default () => <Test/>

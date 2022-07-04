import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'

import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { python } from '@codemirror/lang-python'
import { useEffect, useState } from 'react'

const Editor = ({ isDark, lang }: { isDark: boolean; lang: string }) => {
  const [value, setValue] = useState<string>(``)

  useEffect(() => {
    switch (lang.toLowerCase()) {
      case 'javascript':
        setValue(_js)
        break
      case 'css':
        setValue(_css)
        break
      case 'html':
        setValue(_html)
        break
      case 'python':
        setValue(_python)
        break

      default:
        setValue(_jsx)
        break
    }
  }, [lang])

  return (
    <div className="h-auto px-2 pb-2">
      <CodeMirror
        value={value}
        height="auto"
        className="codemirror"
        extensions={[
          lang === 'javascript'
            ? javascript()
            : lang === 'css'
            ? css()
            : lang === 'html'
            ? html()
            : lang === 'python'
            ? python()
            : javascript({ jsx: true }),
        ]}
        theme={!isDark ? 'dark' : 'light'}
        onChange={(value, viewUpdate) => {
          // console.log("value:", value);
        }}
      />
    </div>
  )
}

export default Editor

export const _js = `const button = doucument.getElementById("btn")

button.addEventListerner('click' () => {
  console.log("Pcode");
}`

export const _css = `.btn {
  color: white;
  background: red;
  border: 1px solid white;
  border-radius: 5px;
}

.text {
  color: #131313;
}`

export const _html = `<html lang="en">
  <head>
    <title>Pcode</title>
  </head>
  <body>
    <div class="container">
      <p class="text">Lorem ipsum dolor sit amet</p>
      <button class="btn">Pcode</button>
    </div>
  </body>
</html>`

export const _python = `# Store input numbers
num1 = input('Enter first number: ')
num2 = input('Enter second number: ')

# Add two numbers
sum = float(num1) + float(num2)

# Display the sum
print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))`

export const _jsx = `import React from "react";

const App = () => {
  return (
    <div>hello world</div>
  )
}
          
export default App;`

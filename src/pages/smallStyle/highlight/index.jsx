import { useEffect, useRef } from 'react';
import { Button } from 'antd';
import Info from '@/components/Info/index';

import './index.less';

const SmallStyle = (props) => {

  const article = useRef(null);

  const onInput = (e) => {

    const treeWalker = document.createTreeWalker(article.current, NodeFilter.SHOW_TEXT);
    const textNodes = treeWalker.nextNode();
    console.log("🚀 ~ onInput ~ textNodes:", textNodes)


    if (!CSS.highlights) {
      article.textContent = "CSS Custom Highlight API not supported.";
      return;
    }

    CSS.highlights.clear();

    const regex = /\[(.*?)\]/g;  // 使用正则表达式匹配 []

    // Iterate over all text nodes and find matches.
    const ranges = (({ text, el }) => {
      const matches = [...text.matchAll(regex)]; // 使用 matchAll 来获取所有匹配项

      // Create a range object for each match we found in the text node.
      return matches.map((match) => {
        const range = new Range();
        const startIndex = match.index;
        const endIndex = startIndex + match[0].length;

        // 设置 range 起始和结束点
        range.setStart(el, startIndex);
        range.setEnd(el, endIndex);

        return range;
      });
    })({ el: textNodes, text: textNodes.textContent.toLowerCase() });

    // Create a Highlight object for the ranges.
    const searchResultsHighlight = new Highlight(...ranges.flat());

    // Register the Highlight object in the registry.
    CSS.highlights.set("search-results", searchResultsHighlight);
  }

  useEffect(() => {
    onInput();
  }, []);

  const addCode = () => {
    const textToInsert = '[123]';

    // 获取当前光标位置
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    // 获取光标之前的内容
    const startContainer = range.startContainer;
    const startOffset = range.startOffset;

    // 更新光标位置的内容
    const newHTML = div.innerHTML.slice(0, range.startOffset) + textToInsert + div.innerHTML.slice(range.startOffset);
    div.innerHTML = newHTML;

    updatePos(startContainer, startOffset);
  }

  // 更新光标位置
  const updatePos = (startContainer, startOffset) => {
    // 将光标移动到新插入的内容后面
    setTimeout(() => {
      // 使 div 获取焦点
      div.focus();
      // 定义要设置光标的位置（例如第5个字符后面）
      var position = startOffset + 4;
      // 创建一个 range 对象
      var range = document.createRange();
      // 遍历节点，找到正确的位置
      var charIndex = 0;
      var found = false;
      (function traverseNodes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          var nextCharIndex = charIndex + node.length;
          if (!found && nextCharIndex >= position) {
            range.setStart(node, position - charIndex);
            range.collapse(true);
            found = true;
          }
          charIndex = nextCharIndex;
        } else {
          for (var i = 0; i < node.childNodes.length; i++) {
            traverseNodes(node.childNodes[i]);
            if (found) break;
          }
        }
      })(div);
      // 如果找到了合适的位置
      if (found) {
        // 获取当前的 selection 对象
        var sel = window.getSelection();
        // 清除所有之前的选区
        sel.removeAllRanges();
        // 添加新建的 range 到选区中
        sel.addRange(range);
      }
      onInput();
    }, [])
  }


  return (
    <div>
      <Info>
        <div>这个代码的功能是让'[]'包裹的内容高亮，使用的css样式</div>
      </Info>
      <div><Button onClick={addCode}>增加内容</Button></div>
      <div ref={article} id="div" contentEditable="true" onInput={onInput}>
        quos architecto. Doloremque deleniti[12121212] non exercitatione[]m r[dsfdsfsdfsdf]erum quam alias harum, nisi obcaecati corporis temporibus vero sapiente voluptatum est quibusdam i[sdfsdf]d ipsa.
      </div>
    </div>
  );
};

export default SmallStyle;
